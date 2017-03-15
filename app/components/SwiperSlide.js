import UI from '../core/UI';
var $ = require('jquery');

/**
 *
 * @class SwiperSlide
 * @extends {UI}
 */


class SwiperSlide extends UI {
    constructor(options) {
        // TODO: 添加配置检测方法
        // TODO: 预处理配置数据
        super(options);
    }

    create() {
        this._hook = this.options.hook;
        this._title = this.options.title;
        this._type = this.getIndexOfType(this.options.type);
        this._showTip = this.options.showTip || false;

        this.setDefaultValue();
        this.sliderCommon();

        // 这里dom渲染后设置值
        if (this.options.map.defaultValue && this._type !== 3) {
            this.value = this.options.map.defaultValue;
        } else if (this.options.map.defaultValue && this._type === 3) {
            this.value = this.getIndexFromPointsTypeValueMap(this.options.map.defaultValue);
        }

    }

    getIndexOfType(type) {
        const TypeArr = ['common', 'widthBtn', 'withPoints'];
        let index = TypeArr.indexOf(type);
        if (index !== -1) {
            return index + 1;
        } else {
            throw 'check the type param again';
        }

    }

    sliderCommon() {
        let html = '';
        let type = Number(this._type);

        let innerNode = this.createInner();
        let bottomVal = this.createBtm();

        html += `<div class="panel">`;
        if (this.options.title) {
            html += `<div class="panel-title">${this.options.title}</div>`;
        }

        html +=
            `<div class="swiper-control">
                    <div class="inner" id = "innerTrack">
                        <!-- 轨道 -->
                        <div class="${type === 3 ? 'swiper-step-track flex-left': 'swiper-track theme-block'}"
                            id = "track-inner"
                            min="${this.options.map.min}"
                            max="${this.options.map.max}"
                            data-now = ''>
                            ${ type === 3 ? innerNode : ""}
                        </div>
                        <!-- 拇指 -->
                        <div class="swiper-thumb theme-border" data-content =''></div>
                        <!-- 数值 -->
                        <div class="swiper-num${type === 3 ? '2' : ''} flex-left">
                            ${bottomVal}
                        </div>
                    </div>
                </div>`;

        if (type === 2) {
            html +=
                `
                    <!-- 控制 -->
                    <div class="contorlPanel flex-right">
                        <span class="plus-button" data-value ="plusBtn">+</span>
                        <span class="minus-button" data-value ="minusBtn">-</span>
                    </div>
                    `;
        }

        $(this._hook).append(html);
    }

    initEventFn() {

        this.bindEvent_touchEvent_Group();
        this.bindEvent_tapEvent_Group();
    }

    bindEvent_touchEvent_Group() {
        this.bindEvent_touchStart();
        this.bindEvent_touchMove();
        this.bindEvent_touchEnd();
    }

    bindEvent_tapEvent_Group() {
        this.bindEvent_tapPlusButton();
        this.bindEvent_tapMinusButton();
    }

    createInner() {
        let html = "";
        if (this._type === 3 && this._valMap !== undefined) {
            for (let index = 0; index < this.options.map.max; index++) {
                html += `<li></li>`;
            }
        }
        return html;
    }

    createBtm() {
        let html = "";
        if (this._type === 3 && this._nameMap !== undefined) {
            let arr = this._nameMap;
            for (let index = 0; index < this.options.map.max + 1; index++) {
                html +=
                    `<span style = "width:${110 / arr.length}%">${arr[index]}</span>`;
            }
        } else {
            html +=
                `
                <span>${this.options.map.min}</span>
                <span>${this.options.map.max}</span>
            `;
        }
        return html
    }


    setDefaultValue() {
        // 带刻度的步长
        if (this.options.map.step) {
            this._step = this.options.map.step;
        }
        if (this.options.map.valMap) {
            this._valMap = this.options.map.valMap;
        }
        if (this.options.map.nameMap) {
            this._nameMap = this.options.map.nameMap;
        }
    }


    get value() {
        return super.value;
    }


    set value(targetValue) {
        const min = this.options.map.min;
        const max = this.options.map.max;
        const slideElement = $(this._hook + ' .inner');
        const innerTrack = document.getElementById('innerTrack').clientLeft;

        if (targetValue < min || targetValue > max) {
            return;
        }
        if (targetValue == this.value) {
            return;
        }

        if (this._type === 3 || !this._showTip) {
            const handleElementLeftPercentage = (targetValue - min) / (max -
                min) * 100;

            this.handlePoint.element
                .css('left', `${handleElementLeftPercentage}%`);
            // this.handlePoint.element
            //     .css({
            //         'transform': `translate3d(${handleElementLeftPercentage}px,0,0)`,
            //         '-webkit-transform': `translate3d(${handleElementLeftPercentage}px,0,0)`
            //     });
        } else {
            const handleElementLeftPercentage = (targetValue - min) / (max -
                min) * 100;
            // this.handlePoint.element
            //     .css({
            //         'transform': `translate3d(${handleElementLeftPercentage}px,0,0)`,
            //         '-webkit-transform': `translate3d(${handleElementLeftPercentage}px,0,0)`
            //     })
            this.handlePoint.element
                .css('left', `${handleElementLeftPercentage}%`)
                .attr('data-content', targetValue);
        }
        super.value = targetValue;
    }

    getIndexFromPointsTypeValueMap(value) {
        if (this._type === 3 && this._valMap.indexOf(value) !== -1) {
            return this._valMap.indexOf(value);
        } else {
            throw "please check your input value in valMap of options map";
        }
    }

    get handlePoint() {
        // 用户给用户滑动操控的圆点
        return {
            element: $(this._hook + ' .swiper-thumb'),
            selector: this._hook + ' .swiper-thumb',
        };

    }

    get onSliding() {
        return this._onSliding || false;
    }
    set onSliding(v) {
        console.log(v);
        this._onSliding = !!v;
    }

    bindEvent_touchStart() {
        $(document).on('touchstart', this.handlePoint.selector, () => {
            this.onSliding = true;
        });
    }

    bindEvent_touchMove() {
        const self = this;
        $(document).on('touchmove', this.handlePoint.selector, function(
            event) {
            if (!self.onSliding) {
                return;
            }
            if (event.cancelable) {
                if (!event.defaultPrevented) {
                    event.preventDefault();
                }
            }
            // TODO: 判断手指与控件的垂直距离，若太远，则设定 self.onSliding = false;
            console.log(`[${new Date()}] touchmoving...`);
            const handleElementPersentage = self.percentageForHandlePoint(
                event.touches[0].pageX);
            const targetValue = Math.round(handleElementPersentage *
                self.options.map.max);
            self.value = targetValue;
        });
    }

    bindEvent_touchEnd() {
        $(document).on('touchend', this.handlePoint.selector, () => {
            this.onSliding = false;
            if (this.options.onChange) {
                if (this._type === 3) {
                    let targetIndex = this.options.map.valMap[this.value];
                    let targetName = this.options.map.nameMap[this.value];
                    this.options.onChange(this.value, targetIndex,
                        targetName);
                } else {
                    this.options.onChange(this.value);
                }

            }
        });
    }

    get handleButton() {
        return {
            plus: {
                selector: this._hook + ' .plus-button'
            },
            minus: {
                selector: this._hook + ' .minus-button'
            },
        }
    }

    bindEvent_tapPlusButton() {
        $(document).on('tap', this.handleButton.plus.selector, () => {
            this.value += 1;
            if (this.options.onPlus) {
                this.options.onPlus(this.value);
            }
        });
    }

    bindEvent_tapMinusButton() {
        $(document).on('tap', this.handleButton.minus.selector, () => {
            this.value -= 1;
            if (this.options.onMinus) {
                this.options.onMinus(this.value);
            }
        });
    }


    percentageForHandlePoint(currentX) {
        // 根据传入的手指触摸点的 X 坐标，返回对应的控制点百分比
        const slideElement = $(this._hook + ' .inner');
        console.log(slideElement.width(), slideElement.offset().left);
        return (currentX - slideElement.offset().left) / slideElement.width();
    }

    unbindEvent_touchFunction() {
        let trigger = this.handlePoint.selector;
        $(document).off('touchstart touchmove touchend', trigger);
    }

    unbindEvent_tapFunction() {
        let trigger1 = this.handleButton.plus.selector;
        let trigger2 = this.handleButton.minus.selector;
        $(document).off('tap', trigger1);
        $(document).off('tap', trigger2);
    }


    disabled() {
        super.disabled();
        $(this._hook).addClass('disabled');
        this.unbindEvent_touchFunction();
        this.unbindEvent_tapFunction();
    }

    enable() {
        super.enable();
        $(this._hook).removeClass('disabled');
        this.bindEvent_touchEvent_Group();
        this.bindEvent_tapEvent_Group();
    }
}

UI.registerComponent('SwiperSlide', SwiperSlide);

export default SwiperSlide;