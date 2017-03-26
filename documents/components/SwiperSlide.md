# SwiperSlide

# 参数配置说明

- title 组件标题，必填
    - String
- type
    - `JDUI.type.SwiperSlider.default` 默认
    - `JDUI.type.SwiperSlider.withBtn` 带加减号
    - `JDUI.type.SwiperSlider.withPoints` 描点
- min 最小值
    - Number / \[{value: '', label: ''}\]
    - `JDUI.type.SwiperSlider.default` 和 `JDUI.type.SwiperSlider.withBtn` 必须
- max 最大值
    - Number / \[{value: '', label: ''}\]
    - `JDUI.type.SwiperSlider.default` 和 `JDUI.type.SwiperSlider.withBtn` 必须
- defaultValue 默认值，必填
    - Number / String
- step 步长，可选，默认为 `1`
- unit 单位, 可选，默认为空字符串
- map 值队列
    - \[String\] / \[{value: '', label: ''}\]
    - `JDUI.type.SwiperSlider.withPoints` 必须
- beforeUserChanged(targetValue, oldValue)
    - 用户滑动/点击操作控件后，修改控件值之前执行。可选函数
    - 返回 true，修改控件 value
    - 返回 false，不修改控件 value，恢复先前值
- afteruserChanged(value, label)
    - 用户滑动/点击操作控件后，修改控件值之后执行。可选函数
    - value 当前控件修改后的值
    - label 当前控件修改后的值对应的标签

## 使用举例

```JavaScript
    var swiper = new JDUI.instance.SwiperSlide({
        title: '滑动组件零',
        hook: '.swiper-wrap-normal',
        type: JDUI.type.SwiperSlide.withPoints,
        showTip: true,
        map: [
            {
                value: '0',
                label: '零'
            },
            {
                value: '1',
                label: '壹'
            },
            {
                value: '2',
                label: '贰'
            },
            {
                value: '3',
                label: '叁'
            },
        ],
        defaultValue: '0',
        beforeUserChanged: function(newVal, oldVal) {
            console.log('beforeUserChanged', newVal, oldVal);
            return newVal != 3 ;
        },
        afterUserChanged: function (val, label) {
            console.log('afterUserChanged', val, label);
        }
    });

    var swiper2 = new JDUI.instance.SwiperSlide({
        title: '滑动组件壹',
        hook: '.swiper-wrap-hasbar',
        type: JDUI.type.SwiperSlide.withBtn,
        showTip: true,
        min: 0,
        max: 100,
        defaultValue: 20,
        step: 1,
        afterUserChanged: function (val, label) {
            console.log('afterUserChanged', val, label);
        },
        //onPlus and onMinus function only support at type 2;
        onPlus: function(value) {
            console.log(value);
        },
        onMinus: function(value) {
            console.log(value);
        }
    });

```