# ListItem

```JavaScript

var listitem = new JDUI.instance.ListItem(options);

// options配置
{
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
}

//可使用的方法

//设置不可用
listitem.setItemDisabled({
   index:['0']
});

//更新item
listitem.updateItem({
    index : '1',				//item下标 1表示第二个
    map:{
        icon: "&#xe685;",
        title: "This is Update",
        subTitle: '',
        rightTitle: ""
    }
});

```