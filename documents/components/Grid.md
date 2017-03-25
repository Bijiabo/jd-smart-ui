# GridItem

```JavaScript
var  GridItem = new JDUI.instance.GridItem(options);

//options 配置
{
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
    }],
    beforeTap: function(){
        console.log("before");
    },
    onTap: function(item, index, content) {
        console.log('下发的值: ' + index);
    },
    afterTap: function() {
        console.log("after");

    }
}

//可使用的方法

// 设定值
gridItem.value = '7';

// 设定不可用
gridItem.disabled();

// 设置可用
gridItem.enable();

// 是否可用 boolean
console.log(gridItem.isEnabled);

// 是否不可用 boolean
console.log(gridItem.isDisabled);

// 设置可显示
gridItem.show();

// 设置不可显示
gridItem.show();

// 设置某个item不可用
// 这里的数组为下发的value值
gridItem.setItemDisabled({
     index : ['1','3']
});

```