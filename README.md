![](http://okw4n9e5h.bkt.clouddn.com/logo.jpg)

# jd-smart-ui

目标：建立京东微联基础前端 UI 组件库，提升开发效率和项目品质。

思路：基于 jQuery 开发简单、易用并符合平台规范的组件。

目录：

- [本地开发](#本地开发)
- [结构](#结构)
- [如何使用](#如何使用)
    - [引入文件](#引入文件)
    - [新建组件](#新建组件)
    - [新建组件实例](#新建组件实例)
    - [通用方法](#通用方法)
- [现有组件](#现有组件)
- [设定主题色](#设定主题色)
- [pJD](#pJD)
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

时间选择器基于   `MultiPicker` https://github.com/AppianZ/multi-picker


## 结构

- main.js       入口文件
- core/UI.js    核心类

目前结构草图：

![结构草图](http://okw4n9e5h.bkt.clouddn.com/082712.jpg)

## 如何使用

### 引入文件

1. 在 HTML 中引入 `jQuery` 库文件，目前我们使用的版本是 `v3.1.1`。
2. 在 HTML 中引入 `jdsmart.ui.js` 库文件，可以在 [这里](./dist/jdsmart.ui.js) 直接下载最新编译的版本。
3. 根据使用文档，编写你的业务逻辑。


### 新建组件

组件开发相关内容，可阅读 [组件开发](./documents/develop_components.md)。

### 新建组件实例

```JavaScript
var selector = '.work-modes';
var workModeComponentInstance = new JDUI.instance.GridItem(selector, options);
```


### 通用方法

```JavaScript
var listItem = new JDUI.instance.ComponentName(options);

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

- [Grid](./documents/components/Grid.md)
- [ListItem](./documents/components/ListItem.md)
- [SwiperSlide](./documents/components/SwiperSlide.md)
- [SwitchCell](./documents/components/SwitchCell.md)
- [Toast]()
- [WorkStep]()
## 设定主题色

原则上，不同项目对应不同的产品品类，所有组件应遵循该品类应有的主题色，符合标准的组件，可以随项目页面主题色切换不同的高亮着色显示效果，业务逻辑开发中，只需一行代码即可更新整个页面的颜色显示效果。

```JavaScript
JDUI.style.themeColor = '#3E5266';
```

## pJD
为了方便开发， 以及结合阿里智能的api逻辑，封装了一层京东微联的sdk，从而统一接口开发，方便初级者。

现有接口
 >   `getDeviceStatus`

初始化数据
```JavaScript
 //初始化
 pJD.getDeviceStatus(function(data){
    //data   
 })
```
> `bindPushData`

绑定推送的数据，js中绑定的定时函数，每2s轮询一次服务器查询数据，当有参数的数据发生变化时，则推送data，没有变化时，则不推送。
```JavaScript
pJD.bindPushData(function(data){
    //data
})
```
>  `setDeviceStatus`

发送指令接口
发送的对象结构
```JSON
{
    "WorkMode":{
        "value":"1"
    },
    "OnOff_Power":{
        "value":"1"
    }
}
```
接口使用
```JavaScript
pJD.setDeviceStatus({
    WorkMode:{
        value:"1"
    }
});
```
>  其他接口

待更新.....