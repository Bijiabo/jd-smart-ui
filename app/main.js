var $ = require("jquery");
import './assets/style';
import FISH from './core';

const listitem = new FISH.UI.ListItem({
    title: "title",
    hook: ".ui_wrap_itemlist",
    gridNum:'4',
    map: [{
        icon: "&#xe681;",
        text: "模式1",
        val: "0"
    }, {
        icon: "&#xe67a;",
        text: "模式2",
        val: "1"
    }, {
        icon: "&#xe65f;",
        text: "模式3",
        val: "2"
    }, {
        icon: "&#xe665;",
        text: "模式4",
        val: "3"
    },{
        icon: "&#xe67a;",
        text: "模式5",
        val: "4"
    }, {
        icon: "&#xe65f;",
        text: "模式6",
        val: "5"
    }, {
        icon: "&#xe665;",
        text: "模式7",
        val: "6"
    },{
        icon: "&#xe665;",
        text: "模式8",
        val: "7"
    }],
    change:function(res){
        console.log("下发的参数为"+res);
    }
});

