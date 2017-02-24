![](http://okw4n9e5h.bkt.clouddn.com/logo.jpg)

# jd-samrt-ui

目标：建立京东微联基础前端 UI 组件库，提升开发效率和项目品质。

思路：基于 jQuery 开发简单、易用并符合平台规范的组件。

安装组件：

```bash
npm install
```

运行开发环境：

```bash
npm run dev
```

## 结构

- main.js       入口文件
- core/UI.js    核心类

目前结构草图：

![结构草图](http://okw4n9e5h.bkt.clouddn.com/082712.jpg)

## 添加组件

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

## 新建组件实例

```JavaScript
var selector = '.work-modes';
var workModeComponentInstance = new JDUI.instance.GridItem(selector, options);
```


## 通用方法：

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