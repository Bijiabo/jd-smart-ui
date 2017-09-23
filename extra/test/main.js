define(function(){
    var APP = {
        Device_Id: null,
        Feed_Id: null,
        Trans_Data: {},
        Device_Status: null,
        /**
         * 初始化
         */
        init:function(){
            var _ = this;
            JDSMART.ready(function() {
                _.initData();
                _.bindEvent();
                setInterval(function() {
                    _.getInfo();
                }, 4000);
            });
        },
        /**
         * 
         * 初始化数据
         */
        initData:function(){
            var _ = this;
            JDSMART.io.initDeviceData(function(res) {
                if (typeof res === "string") {
                    res = JSON.parse(res);
                }
                _.Device_Id = res.device.device_id;
                _.Feed_Id = res.device.feed_id;
                _.Device_Status = res.device.status;
                _.transforData(res.streams);
                _.setDeviceStatus(_.Device_Status);
            });
        },
        bindEvent:function(){

        },
        /**
         * 获取快照（获取数据）
         */
        getInfo:function(){
            var _ = this;
            JDSMART.io.getSnapshot(function(res) {
                if (typeof res === "string") {
                    res = JSON.parse(res);
                }
                _.Device_Status = res.status;
                _.setDeviceStatus(_.Device_Status);
                _.transforData(res.streams);

            }, function(error) {
                JDSMART.app.toast({
                    message: error
                });
            });
        },
        /**
         * 转换数据
         */
         transforData: function(data) {
            var _ = this;
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            data.forEach(function(element, index) {
                this.Trans_Data[element['stream_id']] = element['current_value'];
            }, this);
            this.renderView();
        },
        /**
         * 设置状态
         */
        setDeviceStatus: function(status) {
            var isOnline = true;
            if (status === "1") {
                isOnline = true;
                console.info('设备在线');
            } else {
                isOnline = false;
                console.info('设备不在线');
            }
            JDSMART.app.config({
                showBack: true, // 返回按钮，false是隐藏，true是显示
                showShare: true,
                showMore: true,
                showOnline: isOnline // true---显示：表示设备不在线   false---不显示：表示设备在线
            });
        },
        /**
         * 控制下发函数
         */
        sendCommand: function(cmd) {
            var _ = this;
            if (cmd) {
                JDSMART.io.controlDevice(cmd, function(res) {
                    if (res) {
                        if (typeof res === "string") {
                            res = JSON.parse(res);
                        };
                        _.transforData(res.result.streams);
                    }
                }, function(error) {

                });
            }
        },
        renderView:function(){
            //渲染UI   
        }
        /**
         * 
         * 剩下的自由发挥吧,么么哒~^.^~
         */
    }
    return APP;
})
    