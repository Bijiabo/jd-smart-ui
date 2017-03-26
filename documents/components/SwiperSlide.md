# SwiperSlide

# 参数配置说明

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

## 使用举例

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