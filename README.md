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

## 通用方法：

```JavaScript
var listItem = new FISH.UI.ListItem({...});

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