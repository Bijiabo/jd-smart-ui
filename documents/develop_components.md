# 组件开发

## 新建组件文件

### 在此项目(jd-smart-ui)中新建组件文件（es6）

1. 在`app/compinents/`中新建组件文件
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
2.  新建组件文件后，命令行运行
    ```bash
    npm run build
    ```
3. 编写和完善组件逻辑，打包 sdk 后，用户调用你的如下方法即可新建刚刚创建的组件的实例：
    ```JavaScript
    new JDUI.instance.YourComponentName(selector, options);
    ```
    
### 集成 sdk 后，新建组件文件并引入（es5）

1. 新建文件，如我们要新建一个名字为 `Footer` 的组件，新建 `Footer.js`，并写入如下内容：
    ```JavaScript
    (function () {
        function Footer(options) {
            this.options = options;
            this._unclickMap = [];
            this._visibility = true;
            this._enabled = true;
            this.create();
            this.initEventFn();
            return this.instance;
        }
    
        Footer.prototype = new JDUI.class();
        Footer.prototype.constructor = Footer;
    
        Footer.prototype.create = function(options) {
            this.dom.html('<div class="footer">Hello, I am footer component!</div>');
        };
    
        Footer.prototype.show = function() {
            this.dom.show();
        };
    
        Footer.prototype.hide = function() {
            this.dom.hide();
        };

        // 绑定事件
        Footer.prototype.initEventFn = function () {
            $(document).on('tap', this.options.hook, function () {
                console.warn('tap footer!!!');
            });
        };
    
        // 处理相关接口函数
        Footer.prototype.beforeSetValue = function (targetValue, oldValue) {
            console.warn('run beforeSetValue');
            console.log(targetValue, oldValue);
            return true;
        };
    
        Footer.prototype.afterSetValue = function () {
            console.warn('run afterSetValue');
            $(this.options.hook).text(this.value);
        };
    
        JDUI.registerComponent('Footer', Footer);
    })();
    ```

## 关于组件的 `value`

为了方便业务层开发，建议插件最终暴露出的取值和赋值接口以最简单的形式呈现给开发者。如初始化一个组件实例赋值给变量 `TemperatureSliderComponent`，那么实际项目开发中赋值和取值的操作如下：

```JavaScript
// 取值
var targetTemperature = TemperatureSliderComponent.value;
// 赋值
targetTemperature = 16;
TemperatureSliderComponent.value = targetTemperature;
```

对于一些操作比较简单的组件，组件内部只维护一个 `value` ，并将这个 `value` 取值和赋值的相关接口暴露给开发者即可。而对于一些业务需求相对复杂的组件，需要组件维护表现层的 `viewValue` 和对外暴露的 `value` 两个值。

- `viewValue` 主要负责在用户交互过程中，如 `touchmove` 随着手指的滑动来作出相应改变，用于调用渲染方法更新界面显示，为用户提供实时反馈。
- `value` 主要负责为外接口，供开发者取到组件的当前值用于判断条件、下发指令，或者用于获取到最新数据后进行赋值，组件接受赋值后进行组件内部渲染。

`UI.js` 中已经对这两个值做了基础的维护，组件开发过程中只需编写关注下面几个函数逻辑即可：
- beforeSetValue() // 返回 `true`，则允许对组件 `value` 进行修改，返回 `false` 则为不允许。
- afterSetValue()
- beforeSetViewValue() // 返回 `true`，则允许对组件 `viewValue` 进行修改，返回 `false` 则为不允许。
- afterSetViewValue()

## 赋值和取值接口函数

原则上，尽量不要修改组件默认 `value` 的 `setter` 和 `getter`，而是使用提供的 `beforeSetValue`、`afterSetValue` 方法。

```JavaScript
beforeSetValue (targetValue, oldValue) {
    // 赋值前的接口，用于判断是否允许赋值操作
    // targetValue: 目标值
    // oldValue：原有值
    // 返回 true：允许设定新的值
    // 返回 false：禁止设定新的值
    return true;
}

afterSetValue () {
    // 赋值后的接口 
}

beforeSetViewValue (targetValue, oldValue) {
    return true;
}

afterSetViewValue () {
    // 赋值后的接口 
}
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