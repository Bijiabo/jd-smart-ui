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

时间选择器基于   `MultiPicker` https://github.com/AppianZ/multi-picker


## 结构

- main.js       入口文件
- core/UI.js    核心类

目前结构草图：

![结构草图](http://okw4n9e5h.bkt.clouddn.com/082712.jpg)

## 新建组件

组件开发相关内容，可阅读 [组件开发](./documents/develop_components.md)。

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

- [Grid](./documents/components/Grid.md)
- [ListItem](./documents/components/ListItem.md)
- [SwiperSlide](./documents/components/SwiperSlide.md)


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
