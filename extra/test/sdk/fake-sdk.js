/**
 * Created by tsr on 2017/3/24.
 */
var JDSMART = {};
JDSMART.io = {};
JDSMART.app = {};
var deviceData = {
    switch: '1',
    AlarmClock_On: '500',
    AlarmClock_PowerOn: '0',
    BatteryStatus: '50',
    ChargingStatus: '1',
    Cleaning_Speed: '1',
    ErrorCode: '0',
    Time_Update: '500',
    Week: '0',
    WorkMode: '1',
    WorkStatus: '0',
    Pause: '0'
};

var initGetgenerate = {
    deviceData: function() {
        var result = {
            "device": {
                "status": "1", // 设备在线状态:1 为在线，0 为不在线 "active_time": "2015-04-07 16:09:05",
                "device_name": "海尔扫地机",
                "device_id": "0123456789",
                "feed_id": 149180941310831302
            },
            "streams": []
        };
        for (var key in window.deviceData) {
            result.streams.push({
                "current_value": deviceData[key],
                "master_flag": 0,
                "value_des": "",
                "stream_id": key,
                "at": "2015-04-07T18:43:57+0800",
                "stream_type": 1,
                "units": "",
                "stream_name": "设置湿度"
            })
        }
        return result;
    }
}

var actionBarCallbackCache = [];
var setFakeNavigationBar = function(options) {
    var navigationBarHTML = '\
  <div class="navigation-bar-container" style="position: fixed; left: 0; top: 0; width:100%; height: 48px; background-color: #ffffff;box-shadow: 0 1px 2px rgba(0,0,0,0.3); z-index:9999;">\
    <div class="left-container">back</div>\
    <div class="center-container"></div>\
    <div class="right-container"></div>\
  </div>\
  ';

    if ($('.navigation-bar-container').length === 0) {
        $('body').append(navigationBarHTML).css('padding-top', '48px');

    }
    // set title
    if (options.titletext) {
        $('.center-container').text(options.titletext);
    }
    // set action bars
    if (options.what && options.display && options.callBackName) {
        actionBarCallbackCache = options.callBackName;
        var rightContainerHTML = '';
        for (var i = 0, len = options.display.length; i < len; i++) {
            rightContainerHTML += '<span index="' + i + '">' + options.display[i] + '</span>';
        }
        $('.right-container').html(rightContainerHTML);
    }

    if (!window.hasBeenInitNavigationBar) {
        $(document).on('click', '.navigation-bar-container .right-container span', function() {
            var item = $(this);
            var itemIndex = Number(item.attr('index'));
            console.info(itemIndex);
            var callbackNameForThisItem = actionBarCallbackCache[itemIndex];
            if (!callbackNameForThisItem) {
                console.error('can not find the callback name for this item:' + itemIndex);
                return;
            }

            if (window[callbackNameForThisItem]) {
                window[callbackNameForThisItem]();
            }
        });

        $(document).on('click', '.navigation-bar-container .left-container', function() {
            history.back();
        });
        window.hasBeenInitNavigationBar = true;
    }
};

JDSMART.app.config = function(options) {
    var targetTitle = options.titletext;
    if (targetTitle === undefined) { return; }
    setFakeNavigationBar(options);
};

JDSMART.util = {
    configActionBar: function(options) {
        setFakeNavigationBar(options);
    }
};

// 实现初始化设备数据接口
JDSMART.io.initDeviceData = function(callback) {
    console.info(JSON.stringify(deviceData, null, '\t'));
    callback(initGetgenerate.deviceData());
};



var getDeviceGenerate = {
        newData: function() {
            var data = {
                streams: [],
                digest: '-1618480765',
                status: '1',
                "stream": []
            };
            for (var key in window.deviceData) {
                var value = deviceData[key];
                data.streams.push({
                    stream_id: key,
                    current_value: value
                });
            }
            return data;
        }
    }
    // 实现获取设备数据接口
JDSMART.io.getSnapshot = function(successCallback, failedCallback) {
    var data = getDeviceGenerate.newData();
    //console.info(JSON.stringify(data, null, '\t'));
    data = JSON.stringify(data);
    successCallback(data);
};
// 实现设备控制接口
JDSMART.io.controlDevice = function(targetData, successCallback, failedCallback) {
    console.info(JSON.stringify(targetData, null, '\t'));
    var resultData = {
        "result": {
            "control_ret": "控制成功",
            "streams": []
        }
    };
    // 更新 deviceData
    for (var i = 0, len = targetData.command.length; i < len; i++) {
        var targetItem = targetData.command[i];
        window.deviceData[targetItem.stream_id] = targetItem.current_value;
        resultData.result.streams.push({
            "stream_id": targetItem.stream_id,
            "current_value": targetItem.current_value
        })
    }

    successCallback(resultData);
};

JDSMART.ready = function(callback) {
    callback();
}