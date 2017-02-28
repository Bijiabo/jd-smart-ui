/**
 * Created by huchunbo on 2017/2/26.
 */
const rules = {
    themeColor(value) {
        return [
            `.active-block { background-color: ${value}}`,
            `.active-text { color: ${value}}`,
            `.active-border { border-color: ${value}}`,
        ];
    }
};

// 用于缓存已经设定的值
const styleValue = {
    themeColor: '#FF8650',
};

let ruleCount = 0;

// 更新样式方法
function updateStyle() {
    // alert('update style!');
    // 检测是否已创建 stylesheets，若没有，则创建
    const id = 'jd-ui-style';
    var styleElement = $(`#${id}`);
    if (styleElement.length === 0) {
        $('body').append(`<style id="${id}"></style>`);
    }
    const styleSheet = $(`#${id}`)[0].sheet;

    // 清除已有 stylesheets 内容
    for (let i=0; i<ruleCount; i++) {
        console.log(`i=${i} ruleCount=${ruleCount}`);

        //这里firefox报错
        styleSheet.removeRule(0);
    }

    // 添加 rules 到 stylesheets
    ruleCount = 0;

    for (let key in rules) {
        if (styleValue[key]) {
            const result = rules[key](styleValue[key]);
            for (let resultItem of result) {
                console.log(`ruleCount = ${ruleCount}`);
                styleSheet.insertRule(resultItem, ruleCount);
                ruleCount++;
            }
        }
    }
};

// 对外开放接口，用于更新样式
const styleManager = {
    update: updateStyle
};
for (let key in rules) {
    Object.defineProperty(
        styleManager,
        key,
        {
            set: function(targetValue) {
                styleValue[key] = targetValue;
                updateStyle();
            }
        }
    );
}

export default styleManager;