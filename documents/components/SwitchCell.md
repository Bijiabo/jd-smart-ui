# SwitchCell

开关组件。

![](http://okw4n9e5h.bkt.clouddn.com/161513.jpg)

## 参数配置说明

- title 标题
    - String / Function 
        
        可直接指定字符串
        ```JavaScript
        '开关标题' 
        ```
        或指定函数根据开关状态进行变换
        ```JavaScript
        function (value) { 
            // value: 当前组件的值
            if (value === '1') {
                return '开关开---';
            } else {
                return '开关关---';
            }
        }
        ```
- type: 'JD' 样式类型 
    - JDUI.type.SwitchCell.switch 切换按钮的形式
    - JDUI.type.SwitchCell.power 电源按钮的形式
- value 默认值
- hook 钩子，如 `'.switch-cell'`
- map
    
    开关状态值设定，如：
    ```JavaScript
    {
        on: '1',
        off: '0'
    }
    ```
- onTap 点击后调用函数，可用于下发指令或更新界面其他组件状态
    ```JavaScript
    function(index) {
        // do something...
    }
    ```
    
## 使用示例

```JavaScript
var swithCell = new JDUI.instance.SwitchCell({
    title: function (value) {
        if (value === '1') {
            return '开关开---';
        } else {
            return '开关关---';
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
```