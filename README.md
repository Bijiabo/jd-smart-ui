![](http://okw4n9e5h.bkt.clouddn.com/logo.jpg)

# jd-smart-ui

目标：建立京东微联基础前端 UI 组件库，提升开发效率和项目品质。

思路：基于 jQuery 开发简单、易用并符合平台规范的组件。

目录：

- [本地开发](#本地开发)
- [结构](#结构)
- [添加组件](#添加组件)
    - [项目中添加](#项目中添加)
    - [新建可单独引入的组件文件](#新建可单独引入的组件文件)
- [新建组件实例](#新建组件实例)
- [通用方法](#通用方法)
- [现有组件](#现有组件)
- [样式开发](#样式开发)

## 本地开发

安装依赖：

```bash
npm install
```

运行开发环境：

```bash
npm run dev
```

触摸事件基于 `jquery.finger` https://github.com/ngryman/jquery.finger

## 结构

- main.js       入口文件
- core/UI.js    核心类

目前结构草图：

![结构草图](http://okw4n9e5h.bkt.clouddn.com/082712.jpg)

## 添加组件

### 项目中添加

在`app/compinents/`中新建组件文件
```JavaScript
import UI from './../core/UI';
const $ = require("jquery");

class YourComponentClassName extends UI {
    // ...
}

// 注册组件，不要漏
UI.registerComponent('YourComponentName', YourComponentClassName);

export default YourComponentClassName;

```

新建后，运行
```bash
npm run build
```

用户调用你的新组件新建实例：
```JavaScript
new JDUI.instance.YourComponentName(selector, options);
```

### 新建可单独引入的组件文件

具体编写可参照 `demo/Footer.js`，在 HTML 中直接添加 `<script src="demo/Footer.js"></script>` 引入即可。

## 新建组件实例

```JavaScript
var selector = '.work-modes';
var workModeComponentInstance = new JDUI.instance.GridItem(selector, options);
```


## 通用方法

```JavaScript
var listItem = new JDUI.instance.(selector, {...});

listItem.show();
listItem.hide();
listItem.visibility;

listItem.enable();
listItem.disable();
listItem.isEnabled;
listItem.isDisabled;

listItem.dom;

listItem.value = '2';
listItem.value; // '2'
listItem.updateValue('2');

```

## 现有组件

###GridItem

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
### ListItem

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

// 设定不可用
listitem.disabled();

// 设置可用 
listitem.enable();

// 是否可用 boolean
console.log(listitem.isEnabled);

// 是否不可用 boolean
console.log(listitem.isDisabled);

// 设置可显示 
listitem.show();

// 设置不可显示
listitem.show();

```
###SwiperSlide

```JavaScript

//这是一个无可断的SwiperSlide组件，hook为swiper-wrap-normal
const swiper = new JDUI.instance.SwiperSlide({
    title: '滑动组件',
    hook: '.swiper-wrap-normal',
    type: '1', // 1、不带bar；2、带bar; 3、带刻度的
    showTip: true,
    map: {
        min: 0,
        max: 39,
        value: 10
    },
    onSilde: function (index, trigger) {
        //console.log("妮儿，看这儿",index);
    },
    onChange: function (index) {
        console.log(index);
    }
});

//swiper.disabled();

//swiper.enable();

//swiper.value = "40";

//console.log(swiper.value);

//这是一个带“+”和“-”的无刻度SwiperSlide组件，hook为swiper-wrap-hasbar
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
    onChange: function (index) {
        console.log(index);
    },
    //onPlus and onMinus function only support at type 2;
    onPlus: function (value) {
        console.log(value);
    },
    onMinus: function (value) {
        console.log(value);
    }
});

```

### SwiperStep

```JavaScript

const swiperStep = new JDUI.instance.SwiperStep({
    title: '带刻度的滑动条',
    hook: '.swiper-step',
    showTip: false,
    val: '20',
    map: {
        valMap: ['10', '20', '40', '50', '70', '80', '90'],
        nameMap: ['模式1', '模式2', '模式3', '模式4', '模式5', '模式6', '模式7']
    },
    onChange: function (value, index) {
        console.log(value, index);
    }
});

//swiperStep.value = "40";

// swiperStep.disabled();

// swiperStep.enable();
```

### 特别声明
```
SwiperSlide 和 SwiperStep 两个组件所包含的基本方法相同，可以借鉴使用。
```

## 样式开发

页面中的大部分组件均添加面板类(`.panel`)，以模式选择控件举例：

![](http://okw4n9e5h.bkt.clouddn.com/124512.jpg)

针对不同的项目，可能需要设定不同的主题色，可直接通过`JDUI.style`接口来实现。具体组件中的样式书写可参考`Griditem.js`，需要高亮显示的块或文字添加类`active-block / active-text ／...`即可。

目前主题色相关类：

- active-block
- active-text
- active-border
- theme-block
- theme-text
- theme-border

```JavaScript
JDUI.style.themeColor = '#3E5266';
```

### 组件 css 类命名规范

为避免不同组件之间的命名冲突，css 类命名均采用 `.组件名-组件元素` 的命名方式，如我们现在建立一个开关组件，命名为`switch-cell`，那么它的触摸开关圆点可以命名为`.switch-cell-handle`。