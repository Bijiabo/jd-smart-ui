var $ = require("jquery");
import './assets/style';
import FISH from './core';

const listitem = new FISH.UI.ListItem({
    title: "this is title",
    hook: ".ui_wrap_itemlist",
    gridNum:'4',

        map: [
            {
                icon: "&#xe681;",
                text: "模式1",
                value: '1',
            },
            {
                icon: "&#xe67a;",
                text: "模式2",
                value: '2',
            },
            {
                icon: "&#xe65f;",
                text: "模式3",
                value: '3',
            },
            {
                icon: "&#xe665;",
                text: "模式4",
                value: '4',
            },
            {
                icon: "&#xe67a;",
                text: "模式5",
                value: '5',
            },
            {
                icon: "&#xe65f;",
                text: "模式6",
                value: '6',
            },
            {
                icon: "&#xe665;",
                text: "模式7",
                value: '7',
            },
            {
                icon: "&#xe665;",
                text: "模式8",
                value: '8',
            },
            {
                icon: "&#xe665;",
                text: "模式9",
                value: '9',
            },
        ],
    onClick: (item, index, context) => {
        console.log(`index: ${index}`);
        context.value = item.value;
    }
});

// 设定值
listitem.value = '2';
console.log(listitem.value);

global.listitem = listitem; // debug


