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
    onTap: function(item, context) {
        console.log(item, context);
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



const swiper = new JDUI.instance.SwiperSlide({
    title: '滑动组件',
    hook: '.swiper-wrap-normal',
    type: 'common',
    showTip: false,
    map: {
        min: 0,
        max: 39,
        defaultValue: 30
    },
    onChange: function(index) {
        console.log(index);
    }
});

const swiper2 = new JDUI.instance.SwiperSlide({
    title: '滑动组件',
    hook: '.swiper-wrap-hasbar',
    type: 'widthBtn',
    showTip: true,
    map: {
        min: 0,
        max: 100,
        defaultValue: 20
    },
    onChange: function(index) {
        console.log(index);
    },
    //onPlus and onMinus function only support at type 2;
    onPlus: function(value) {
        console.log(value);
    },
    onMinus: function(value) {
        console.log(value);
    }
});

const swiperStep = new JDUI.instance.SwiperSlide({
    title: '带刻度的滑动条',
    hook: '.swiper-step',
    showTip: false,
    type: 'withPoints',
    map: {
        min: 0,
        max: 6,
        valMap: ['10', '20', '40', '50', '70', '80', '90'],
        nameMap: ['模式1', '模式2', '模式3', '模式4', '模式5', '模式6', '模式7'],
        defaultValue: '40'
    },
    onChange: function(value, targetIndex, targetName) {
        console.log(value, targetIndex, targetName);
    }
});

const swithCell = new JDUI.instance.SwitchCell({
    title: '开关',
    type: 'JD', //JD、jd标准样式、 Ali、阿里标准样式
    value: '0', //和正常一样，开1，关0
    hook: '.switch-cell',
    map: {
        on: '1',
        off: '0'
    },

    onTap: function(index) {
        console.log('click jd', index);
    },
});

const swithCell2 = new JDUI.instance.SwitchCell({
    title: '开关',
    type: 'Ali', //JD、jd标准样式、 Ali、阿里标准样式
    value: '0', //和正常一样，开1，关0
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

//自定义的scroll
// new JDUI.instance.MultiPicker({
//     input: 'multiPickerInput2', //点击触发插件的input框的id
//     container: 'targetContainer2', //插件插入的容器id
//     jsonData: $city,
//     success: function(arr) {
//             alert('页面会显示最终结果');
//             document.getElementById('showBlock2').innerHTML = JSON.stringify(arr);
//         } //回调
// });
// set theme color
JDUI.style.themeColor = '#3E5266';
JDUI.style.themeColor = '#ff6600';

// test footer component
var footer = new JDUI.instance.Footer({
    hook: '#footer'
});