/**
 * 为了方便开发，方便调用，同时为了减少代码中轮询，封装一层jdsmartsdk
 * 
 * 使用方法
 * 
 * 获取初始化数据   pJD.getDeviceStatus()
 * 获取推送数据     pJD.bindPushData()
 * 下发命令         pJD.setDeviceStatus({
 *                      "WorkMode":{
 *                          "value":"1"
 *                      }
 *                 })
 * 基本信息
 * deviceID     pJD.deviceID
 * feedID       pJD.feedID
 * deviceName   pJD.deviceName
 * 
 * 然后 渲染的话，还是正常的套路@@@~~~嘻嘻，加油喽，又问题记得找我，虽然我很方
 */

;
(function() {
    var oldData = {};

    var pJD = {
        deviceID: null,
        feedID: null,
        deviceName: null,
        deviceStatus: null,
        readyCallbacks: [],
        hasBeenReady: false,
        ready: function(callback) {
            this.readyCallbacks.push(callback);
            if (this.hasBeenReady) {
                this.runReadyCallbacks();
            }
        },
        runReadyCallbacks: function() {
            for (i = 0, len = this.readyCallbacks.length; i < len; i++) {
                this.readyCallbacks[i]();
            }
        },
        //初始化数据
        getDeviceStatus: function(callback) {
            //初始化获取快照
            var _ = this;
            JDSMART.io.initDeviceData(function(suc) {
                if (suc) {
                    if (callback && typeof callback === 'function') {
                        _.deviceID = suc.device.device_id;
                        _.feedID = suc.device.feed_id;
                        _.deviceName = suc.device.device_name;
                        _.deviceStatus = suc.device.status;
                        if (!_.listenDeviceStatus(_.deviceStatus)) {
                            callback({
                                status: "off"
                            })
                        } else {
                            oldData = _.dataFactory(suc.streams);
                            callback(_.dataFactory(suc.streams));
                        }
                    }
                }
            }, function(fail) {
                console.error(fail);
            });
        },
        /**
         * 下发的格式可以参考阿里的
         * {
         *    WorkMode:{
         *      value: '1'
         *    }
         * }
         */
        setDeviceStatus: function(commandObj) {
            var command = {
                command: []
            }
            if (!commandObj) {
                return
            }
            if (typeof commandObj !== 'object') {
                console.error('下发的指令格式不是对象 in setDeviceStatus');
            }
            for (var item in commandObj) {
                command.command.push({
                    "stream_id": item,
                    "current_value": commandObj[item].value
                })
            }
            console.log(command);
            this.commandFromToDevice(command);
        },
        //绑定推送数据
        bindPushData: function(callback) {
            var _ = this;
            setInterval(function() {
                _.getSnapshotInfo(callback);

            }, 2000)
        },
        //获取快照
        getSnapshotInfo: function(callback) {
            var _ = this;
            var hasChange;
            JDSMART.io.getSnapshot( // 获取设备快照接口
                function(suc) {
                    // 执行成功的回调
                    if (typeof suc === 'string') {
                        suc = JSON.parse(suc)
                    }

                    if (suc) {
                        if (!_.listenDeviceStatus(suc.status)) {
                            callback({
                                status: 'off'
                            })
                        } else {
                            newData = _.dataFactory(suc.streams);
                            hasChange = _.filterDataWithOldAndNew();
                            if (hasChange && callback && typeof callback === 'function') {
                                oldData = newData
                                callback(newData)
                            }
                        }
                    }
                },
                function(error) {
                    return;
                    // 执行失败的回调
                }
            );
        },

        //数据比较,返回true为存在变化，返回false，不存在变化不返回
        filterDataWithOldAndNew: function() {
            var hasChange = false;
            for (var item in newData) {
                if (newData[item].value !== oldData[item].value) {
                    console.log('参数发生变化,变化的为 => ' + item + ' 由 ' + oldData[item].value + ' 转变为 ' + newData[item].value)
                    hasChange = true
                }
            }
            return hasChange;
        },

        //数据工厂
        dataFactory: function(data) {
            var _ = this;
            var t_data = {};
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            data.forEach(function(element, index) {
                t_data[element['stream_id']] = {
                    value: element['current_value']
                };
            }, this);
            return t_data;
        },
        //app端到设备端下发指令
        commandFromToDevice: function(command) {
            var _ = this;
            if (!command) {
                return;
            }
            if (typeof command !== 'object') {
                console.error('控制命令错误 in commandFromToDevice')
                return
            }
            JDSMART.io.controlDevice(
                command,
                function(suc) {
                    if (suc) {
                        //get snapInfo
                    }
                },
                function(fail) {
                    _.Toast('下发失败');
                    console.error(fail)
                }
            )
        },
        //toast
        Toast: function(msg) {
            JDSMART.app.toast({ message: msg },
                null
            );
        },
        /**
         * 监听设备状态的变化
         * 如果状态发送变化，并且变化为不在线，则getDeviceStatus和bindPushData返回的是一个对象
         * {
         *    status:"off"
         * }
         * 根据这个判断就行
         * 如果为在线，则返回正常的参数对象
         */
        listenDeviceStatus: function(data) {
            if (data === '1') {
                return true
            } else {
                return false
            }
        }
    }

    JDSMART.ready(function() {
        pJD.hasBeenReady = true;
        pJD.runReadyCallbacks();
    });

    window.pJD = pJD;
})()