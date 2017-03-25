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

- [Grid](./documents/components/Grid.md)
- [ListItem](./documents/components/ListItem.md)
- [SwiperSlide](./documents/components/SwiperSlide.md)


#### 参考说明

#####SwiperSlide

<table>
	<tr>
		<th>参数</th>
		<th>说明</th>
		<th>必填</th>
		<th>介绍</th>
	</tr>
	<tr>
		<td>title</td>
		<td>dom的标题</td>
		<td>否</td>
		<td>如：工作模式</td>
	</tr>
	<tr>
		<td> hook </td>
		<td>挂载dom的钩子</td>
		<td>是</td>
		<td>如：`.swiper-wrap-normal`</td>
	</tr>
	<tr>
		<td> showTip </td>
		<td>是否显示滑块上的动态数值</td>
		<td>否</td>
		<td>默认`false`</td>
	</tr>
	<tr>
		<td> type </td>
		<td> 滑动组件类型 </td>
		<td>是</td>
		<td>默认类型：`common`;
			 带+和-按钮类型:`widthBtn`;
			 带刻度的类型:`withPoints`
			 (*类型名称必须写对*)
		</td>
	</tr>
	<tr>
		<td rowspan = "5"> map </td>
		<td rowspan = "5"> 组件配置对象 </td>
		<td rowspan = "5">是</td>
		<td>`min`:最小值</td>
	</tr>
	<tr>
		<td>`max`:最大值</td>
	</tr>
	<tr>
		<td>`defaultValue`:默认值</td>
	</tr>
	<tr>
		<td>`valMap`:值的数组</td>
	</tr>
	<tr>
		<td>`nameMap`:下标名称数组</td>
	</tr>
</table>

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
