###SwiperSlide

```JavaScript
const swiper = new JDUI.instance.SwiperSlide({
    title: '滑动组件',
    hook: '.swiper-wrap-normal',
    type: 'common', // 1、正常的 2、带+-的 3、刻度的
    showTip: false,
    map: {
        min: 0,
        max: 39,
        defaultValue: 30
    },
    onChange: function (index) {
        console.log(index);
    }
});

const swiper2 = new JDUI.instance.SwiperSlide({
    title: '滑动组件',
    hook: '.swiper-wrap-hasbar',
    type: 'widthBtn',
    showTip: true,
    map: {
        min: 0,
        max: 100,
        defaultValue: 20
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

const swiperStep = new JDUI.instance.SwiperSlide({
    title: '带刻度的滑动条',
    hook: '.swiper-step',
    showTip: false,
    val: '20',
    type: 'withPoints',
    map: {
        min: 0,
        max: 6,
        valMap: ['10', '20', '40', '50', '70', '80', '90'],
        nameMap: ['模式1', '模式2', '模式3', '模式4', '模式5', '模式6', '模式7'],
        defaultValue: '10'
    },
    onChange: function (value, targetIndex, targetName) {
        console.log(value, targetIndex, targetName);
    }
});

```