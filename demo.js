/**
 * Created by huchunbo on 2017/2/23.
 */

var gridItem = new JDUI.instance.GridItem({
    title: "模式选择",
    hook: ".grid-item-wrap",
    gridNum: '4',
    value: '0',
    map: [{
        icon: "&#xe681;",
        text: "模式1",
        value: "0"
    }, {
        icon: "&#xe67a;",
        text: "模式2",
        value: "1"
    }, {
        icon: "&#xe65f;",
        text: "模式3",
        value: "2"
    }, {
        icon: "&#xe665;",
        text: "模式4",
        value: "3"
    }, {
        icon: "&#xe67a;",
        text: "模式5",
        value: "4"
    }, {
        icon: "&#xe65f;",
        text: "模式6",
        value: "5"
    }, {
        icon: "&#xe665;",
        text: "模式7",
        value: "6"
    }, {
        icon: "&#xe665;",
        text: "模式8",
        value: "7"
    }, {
        icon: "&#xe665;",
        text: "模式8",
        value: "8"
    }, {
        icon: "&#xe665;",
        text: "模式8",
        value: "9"
    }],

    beforeTap: function() {
        console.log("before");
    },
    onTap: function(item, index, content) {
        console.log('下发的值: ' + index);
    },
    afterTap: function() {
        console.log("after");

    }
});

var listitem = new JDUI.instance.ListItem({
    title: "列表",
    hook: ".list-item-wrap",
    map: [{
        icon: "&#xe685;",
        title: "Hello World",
        subTitle: '',
        rightTitle: ""
    }, {
        icon: "&#xe685;",
        title: "Hello World2",
        subTitle: '',
        rightTitle: ""
    }],
    beforeTap: function() {

    },
    onTap: function(index, item, context) {
        console.log(index, item, context);
    },
    afterTap: function() {

    }
});

listitem.updateItem({
    index: '1',
    map: {
        icon: "&#xe685;",
        title: "This is Update",
        subTitle: '',
        rightTitle: ""
    }
});



var swiper = new JDUI.instance.SwiperSlide({
    title: '滑动组件0',
    hook: '.swiper-wrap-normal',
    type: JDUI.type.SwiperSlide.default,
    min: 10,
    max: 39,
    step: 1,
    defaultValue: 30,
    unit: '℃',
    afterUserChanged: function(val, label) {
        console.log(val, label);
    }
});

var swiper2 = new JDUI.instance.SwiperSlide({
    title: '滑动组件壹',
    hook: '.swiper-wrap-hasbar',
    type: JDUI.type.SwiperSlide.withBtn,
    showTip: true,
    min: 0,
    max: 100,
    defaultValue: 20,
    step: 1,
    afterUserChanged: function(val, label) {
        console.log('afterUserChanged', val, label);
    },
    //onPlus and onMinus function only support at type 2;
    onPlus: function(value) {
        console.log(value);
    },
    onMinus: function(value) {
        console.log(value);
    }
});

var swiperStep = new JDUI.instance.SwiperSlide({
    title: '带刻度的滑动条',
    hook: '.swiper-step',
    showTip: false,
    type: JDUI.type.SwiperSlide.withPoints,
    map: ['10', '20', '40', '50', '70', '80', '90', '100'],
    defaultValue: '40',
    afterUserChanged: function(value, label) {
        console.log(value, label);
    }
});

var swiper_tow_points = new JDUI.instance.SwiperSlide({
    title: '风速调节',
    hook: '.wind-speed-bar',
    type: JDUI.type.SwiperSlide.withPoints,
    map: [{
            value: '0',
            label: '低档'
        },
        {
            value: '2',
            label: '高档'
        },
    ],
    defaultValue: '0',
    afterUserChanged: function(value, xxx) {
        console.log(value, xxx);
    }
});

var swithCell = new JDUI.instance.SwitchCell({
    title: function(value) {
        if (value === '1') {
            return '电源打开';
        } else {
            return '电源关闭';
        }
    },
    type: JDUI.type.SwitchCell.power, //JD、jd标准样式、 Ali、阿里标准样式
    value: '0', //和正常一样，开1，关0
    hook: '.switch-cell',
    map: {
        on: '1',
        off: '0'
    },
    onTap: function(index) {
        console.log('click jd', index);
    }
});

var swithCell2 = new JDUI.instance.SwitchCell({
    title: '开关',
    type: JDUI.type.SwitchCell.switch, //JD、jd标准样式、 Ali、阿里标准样式
    value: '1', //和正常一样，开1，关0
    hook: '.switch-cell2',
    map: {
        on: '1',
        off: '0'
    },
    onTapBefore: function() {
        //console.log('before');
    },
    onTap: function(index) {
        console.log('click ali', index);
    },
    onTapAfter: function() {
        //console.log('after');
    }
});

var swithCell3 = new JDUI.instance.SwitchCell({
    title: '开关',
    type: JDUI.type.SwitchCell.switch, //JD、jd标准样式、 Ali、阿里标准样式
    value: '0', //和正常一样，开1，关0
    hook: '.switch-cell3',
    map: {
        on: '1',
        off: '0'
    },
    onTapBefore: function() {
        //console.log('before');
    },
    onTap: function(index) {
        console.log('click ali', index);
    },
    onTapAfter: function() {
        //console.log('after');
    }
});

new JDUI.instance.DateSelector_Slide({
    input: 'date-selector-input', //点击触发插件的input框的id
    container: 'targetContainer', //插件插入的容器id
    type: 0,
    //0：不需要tab切换，自定义滑动内容，建议小于三个；
    //1：需要tab切换，【年月日】【时分】完全展示，固定死，可设置开始年份和结束年份
    param: [0, 0, 0, 1, 1],
    //设置['year','month','day','hour','minute'],1为需要，0为不需要,需要连续的1
    beginTime: [], //如空数组默认设置成1970年1月1日0时0分开始，如需要设置开始时间点，数组的值对应param参数的对应值。
    endTime: [], //如空数组默认设置成次年12月31日23时59分结束，如需要设置结束时间点，数组的值对应param参数的对应值。
    recentTime: [], //如不需要设置当前时间，被为空数组，如需要设置的开始的时间点，数组的值对应param参数的对应值。
    success: function(arr) {

            console.log(arr);
        } //回调
});

new JDUI.instance.DateSelector({
    input: 'date-selector-input', //点击触发插件的input框的id
    container: 'targetContainer2', //插件插入的容器id
    type: 0,
    //0：不需要tab切换，自定义滑动内容，建议小于三个；
    //1：需要tab切换，【年月日】【时分】完全展示，固定死，可设置开始年份和结束年份
    param: [0, 0, 0, 1, 1],
    //设置['year','month','day','hour','minute'],1为需要，0为不需要,需要连续的1
    beginTime: [], //如空数组默认设置成1970年1月1日0时0分开始，如需要设置开始时间点，数组的值对应param参数的对应值。
    endTime: [], //如空数组默认设置成次年12月31日23时59分结束，如需要设置结束时间点，数组的值对应param参数的对应值。
    recentTime: [], //如不需要设置当前时间，被为空数组，如需要设置的开始的时间点，数组的值对应param参数的对应值。
    success: function(arr) {

            console.log(arr);
        } //回调
});


// set theme color
JDUI.style.themeColor = '#3E5266';
JDUI.style.themeColor = '#ff6600';

// test footer component
var footer = new JDUI.instance.Footer({
    hook: '#footer'
});


/**
 * 两个按钮的Toast
 */
var confirm1 = new JDUI.instance.Toast({
    hook: '.confirm-twobtn-wrap',
    type: 'two',
    teplMap: {
        title: '温馨提示',
        content: 'Hello JimmyJimmy, My Name Is Mr.Prince.Hello JimmyJimmy, My Name Is Mr.Prince.'
    },
    letBtnFn: function(e) {
        confirm1.closeConfirm();
    },
    rightBtnFn: function(e) {
        confirm1.closeConfirm();
    }
});

/**
 * 一个按钮的Toast
 */
var confirm2 = new JDUI.instance.Toast({
    hook: '.confirm-onebtn-wrap',
    type: 'one',
    teplMap: {
        title: '温馨提示',
        content: 'Hello JimmyJimmy, My Name Is Mr.Prince.Hello JimmyJimmy, My Name Is Mr.Prince.'
    },
    confirmBtn: function() {
        confirm2.closeConfirm();
    }
});

confirm2.updateUI({
    teplMap: {
        title: 'new',
        content: 'hello world'
    }
})

let com_btn = document.getElementById('openCFM');
com_btn.addEventListener('click', (e) => {
    confirm1.openConfirm();
}, false);

let com_btn2 = document.getElementById('oneCFM');
com_btn2.addEventListener('click', (e) => {
    confirm2.openConfirm();
}, false);


// test disable()
(function disableAllComponents() {
    gridItem.disable();
    listitem.disable();
    swiper.disable();
    swiper2.disable();
    swiperStep.disable();
    swiper_tow_points.disable();
    swithCell.disable();
    swithCell2.disable();
    swithCell3.disable();
});