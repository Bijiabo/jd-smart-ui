var $ = require("jquery");
import './assets/style';
import FISH from './core';

const gridItem = new FISH.UI.GridItem({
    title: "模式选择",
    hook: ".grid-item-wrap",
    gridNum:'4',
    value:'0',
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
    },{
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
    },{
        icon: "&#xe665;",
        text: "模式8",
        value: "7"
    },{
        icon: "&#xe665;",
        text: "模式8",
        value: "8"
    },{
        icon: "&#xe665;",
        text: "模式8",
        value: "9"
    }],
    beforeTap:()=>{
        console.log("before");
    },
    onTap:(item,index,content) => {
        console.log(`下发的值:${index}`)
    },
    afterTap:()=>{
        console.log("after");
    }
});


const listitem = new FISH.UI.ListItem({
    title:"列表",
    hook:".list-item-wrap",
    map:[
        {
            icon:"&#xe685;",
            title:"Hello World",
            subTitle:'',
            rightTitle:""
        },
        {
            icon:"&#xe685;",
            title:"Hello World2",
            subTitle:'',
            rightTitle:""
        }
    ],
    beforeTap:function(){

    },
    onTap:function(item,context){
        console.log(item,context);
    },
    afterTap:function(){

    }
});

// 设定值
gridItem.value = '2';
console.log(gridItem.value);

global.gridItem = gridItem; // debug
