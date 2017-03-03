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

    beforeTap: function () {
        console.log("before");
    },
    onTap: function (item, index, content) {
        console.log('下发的值: ' + index);
    },
    afterTap: function () {
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
    beforeTap: function () {

    },
    onTap: function (item, context) {
        console.log(item, context);
    },
    afterTap: function () {

    }
});

// 设定值
//gridItem.value = '7';

// 设定不可用
//gridItem.disabled();

// 设置可用 
//gridItem.enable();

// 是否可用 boolean
//console.log(gridItem.isEnabled);

// 是否不可用 boolean
//console.log(gridItem.isDisabled);

// 设置可显示 
//gridItem.show();

// 设置不可显示
//gridItem.show();

// 设置某个item不可用
// 这里的数组为下发的value值
// gridItem.setItemDisabled({
//     index : ['1','3']
// });


//设置不可用
// listitem.setItemDisabled({
//     index:['0'] 
// });

listitem.updateItem({
    index: '1',
    map: {
        icon: "&#xe685;",
        title: "This is Update",
        subTitle: '',
        rightTitle: ""
    }
});

listitem.disabled();

const swiper = new JDUI.instance.SwiperSlide({
    title: '滑动组件',
    hook: '.swiper-wrap-normal',
    type: '1', // 1、不带bar；2、带bar; 3、带刻度的
    showTip: true,
    map: {
        min: 0,
        max: 100,
        value: 10
    },
    onSilde: function (index, trigger) {
        //console.log("妮儿，看这儿",index);
    },
    onChange: function (index) {
        console.log(index);
    }
});

swiper.disabled();
swiper.enable();


const swiper2 = new JDUI.instance.SwiperSlide({
    title: '滑动组件',
    hook: '.swiper-wrap-hasbar',
    type: '2', // 1、不带bar；2、带bar; 3、带刻度的
    showTip: true,
    map: {
        min: 0,
        max: 100,
        value: 20
    },
    onSilde: (index, trigger) => {
        //console.log("我是滑动的～@@",index);
    },
    onChange: function(index){
        console.log(index);
    },
    //onPlus and onMinus function only support at type 2;
    onPlus:function(value){
        console.log(value);
    },
    onMinus:function(value){
        console.log(value);
    }
});




// set theme color
JDUI.style.themeColor = '#3E5266';
JDUI.style.themeColor = '#ff6600';

// test footer component
var footer = new JDUI.instance.Footer({
    hook: '#footer'
});