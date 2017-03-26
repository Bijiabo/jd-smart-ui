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


## 设定主题色

原则上，不同项目对应不同的产品品类，所有组件应遵循该品类应有的主题色，符合标准的组件，可以随项目页面主题色切换不同的高亮着色显示效果，业务逻辑开发中，只需一行代码即可更新整个页面的颜色显示效果。

```JavaScript
JDUI.style.themeColor = '#3E5266';
```
