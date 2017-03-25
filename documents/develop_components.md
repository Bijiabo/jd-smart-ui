# 组件开发

## 关于组件的 `value`

为了方便业务层开发，建议插件最终暴露出的取值和赋值接口以最简单的形式呈现给开发者。如初始化一个组件实例赋值给变量 `TemperatureSliderComponent`，那么实际项目开发中赋值和取值的操作如下：

```JavaScript
// 取值
var targetTemperature = TemperatureSliderComponent.value;
// 赋值
targetTemperature = 16;
TemperatureSliderComponent.value = targetTemperature;
```

对于一些操作比较简单的组件，组件内部只维护一个 `value` ，并将这个 `value` 取值和赋值的相关接口暴露给开发者即可。而对于一些业务需求相对复杂的组件，需要设定表现层的 `viewValue` 和对外暴露的 `value` 两个值。

- `viewValue` 主要负责在用户交互过程中，如 `touchmove` 随着手指的滑动来作出相应改变，用于调用渲染方法更新界面显示，为用户提供实时反馈。
- `value` 主要负责为外接口，供开发者取到组件的当前值用于判断条件、下发指令，或者用于获取到最新数据后进行赋值，组件接受赋值后进行组件内部渲染。

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
```