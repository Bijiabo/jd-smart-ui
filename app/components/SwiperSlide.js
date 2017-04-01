import UI from '../core/UI';
var $ = require('jquery');

/**
 *
 * @class SwiperSlide
 * @extends {UI}
 */


class SwiperSlide extends UI {

    constructor(options) {
        const defaultOptions = {
            title: 'Swiper Slider Title',
            hook: false,
            type: SwiperSlide.type.default,
            min: 0,
            max: 100,
            step: 1,
            defaultValue: 0,
            unit: '',
            beforeUserChanged: function(newVal, oldVal) {
                return true;
            },
            afterUserChanged: function(val, label) {}
        };
        const _options = $.extend(defaultOptions, options);
        super(_options);
    }

    create() {
        this._hook = this.options.hook;
        this._title = this.options.title;
        this._showTip = this.options.showTip || false;

        this.insertHtml();

        this.setDefaultValue();

    }

    insertHtml() {
        let html = '';
        let type = Number(this._type);

        html += `<div class="panel">`;

        // 添加标题
        if (this.options.title) {
            html += `<div class="panel-title">${this.options.title}<span class="value theme-text"></span></div>`;
        }

        html +=
            `<div class="swiper-control">
                    <div class="inner" id = "innerTrack">
                        <!-- 轨道 -->
                        <div class="${type === SwiperSlide.type.withPoints ? 'swiper-step-track flex-left theme-block': 'swiper-track theme-block'}"
                            id = "track-inner"
                            min="${this.options.min}"
                            max="${this.options.max}"
                            data-now = ''>
                            ${this.pointsHTML}
                        </div>
                        <!-- 拇指 -->
                        <div class="swiper-thumb theme-border" data-content =''></div>
                    </div>
                </div>`;

        if (this.options.type === SwiperSlide.type.withBtn) {
            html +=
                `   <!-- 控制 -->
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
        this.bindEvent_tapPoint();
    }

    get pointsHTML() {
        let html = '';
        let pointsCount = this.options.type === SwiperSlide.type.withPoints ? this.options.map.length : 2;

        // 生成圆点
        const pointArray = Array.from({ length: pointsCount });
        const percentageForOnePart = 100 / (pointsCount - 1);
        const pointsHTML = pointArray.map((x, i) => {
            let mapItem;
            if (this.options.type === SwiperSlide.type.withPoints) {
                mapItem = this.options.map[i];
            } else {
                mapItem = i === 0 ? this.options.min : this.options.max;
            }
            const currentItem = _.isObject(mapItem) ? mapItem : { value: mapItem, label: mapItem.toString() };
            const displayUnit = pointsCount === 2 ? this.options.unit : '';
            return `
            <div class="point-container" 
            style="left: ${percentageForOnePart * i}%;" 
            label="${currentItem.label}${displayUnit}" 
            value="${currentItem.value}">
            <div class="point theme-block"></div>
            </div>`;
        }).join('');

        // 判断是否有圆点可见
        switch (this.options.type) {
            case SwiperSlide.type.withPoints:
                html += `<div class="with-points">${pointsHTML}</div>`;
                break;
            default:
                html += `<div class="no-points">${pointsHTML}</div>`;
                break;
        }

        return html;
    }


    setDefaultValue() {
        this.value = this.options.defaultValue;
    }

    beforeSetValue(targetValue, oldValue) {
        switch (this.options.type) {
            case SwiperSlide.type.withPoints:
                let targetMapIndex = -1;
                this.options.map.forEach((item, index) => {
                    if (targetValue === (_.isObject(item) ? item.value : item)) {
                        targetMapIndex = index;
                        return;
                    }
                });
                return targetMapIndex >= 0;
                break;
            default:
                const targetLeftPersentage = 1 / ((this.options.max - this.options.min) / this.options.step) * ((targetValue - this.options.min) / this.options.step);
                return 0 <= targetLeftPersentage && targetLeftPersentage <= 1;
                break;
        }
    }

    beforeSetViewValue(targetValue, oldValue) {
        switch (this.options.type) {
            case SwiperSlide.type.withPoints:
                let targetMapIndex = -1;
                this.options.map.forEach((item, index) => {
                    if (targetValue === (_.isObject(item) ? item.value : item)) {
                        targetMapIndex = index;
                        return;
                    }
                });
                return targetMapIndex >= 0;
                break;
            default:
                const targetLeftPersentage = 1 / ((this.options.max - this.options.min) / this.options.step) * ((targetValue - this.options.min) / this.options.step);
                return 0 <= targetLeftPersentage && targetLeftPersentage <= 1;
                break;
        }
    }

    renderForValue(targetRenderValue) {
        if (this.options.type === SwiperSlide.type.withBtn || this.options.type === SwiperSlide.type.default) {
            $(this._hook + ' .panel-title .value').text(targetRenderValue + this.options.unit);
        }

        let targetLeftPersentage;
        switch (this.options.type) {
            case SwiperSlide.type.withPoints:
                let targetMapIndex = 0;
                this.options.map.forEach((item, index) => {
                    if (targetRenderValue === (_.isObject(item) ? item.value : item)) {
                        targetMapIndex = index;
                        return;
                    }
                });
                targetLeftPersentage = 1 / (this.options.map.length - 1) * targetMapIndex;
                break;
            default:
                targetLeftPersentage = 1 / ((this.options.max - this.options.min) / this.options.step) * ((targetRenderValue - this.options.min) / this.options.step);
                break;
        }

        this.handlePoint.element
            .css('left', `${targetLeftPersentage * 100}%`)
            .attr('data-content', this.viewValue);
    }

    afterSetViewValue() {
        this.renderForValue(this.viewValue);

        if (this.onSliding) { return; }

        if (this.options.beforeUserChanged) {
            if (this.options.beforeUserChanged(this.viewValue, this.value)) {
                this.syncValueFromViewValue();
                if (this.options.afterUserChanged) {
                    const label = this.labelForValue(this.value);
                    this.options.afterUserChanged(this.value, label);
                }
            } else {
                this.syncViewValueFromValue();
                this.renderForValue(this.viewValue); // 恢复原数值
            }
        } else {
            this.syncValueFromViewValue();

            if (this.options.afterUserChanged) {
                this.options.afterUserChanged(this.value, this.labelForValue(this.value));
            }
        }
    }

    labelForValue(targetValue) {
        switch (this.options.type) {
            case SwiperSlide.type.withPoints:
                let result = '';
                this.options.map.forEach((item, index) => {
                    if (targetValue === (_.isObject(item) ? item.value : item)) {
                        result = _.isObject(item) ? item.label : item.toString();
                    }
                });
                return result;
            default:
                return targetValue.toString();
        }
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
        this._onSliding = !!v;
    }

    bindEvent_touchStart() {
        $(document).on('touchstart', this.handlePoint.selector, () => {
            this.onSliding = true;
        });
    }

    bindEvent_touchMove() {
        const self = this;
        $(document).on('touchmove', this.handlePoint.selector, function(event) {
            if (!self.onSliding) {
                return;
            }
            if (!event.originalEvent.touches) {
                return;
            }
            if (event.cancelable) {
                if (!event.defaultPrevented) {
                    event.preventDefault();
                }
            }
            // TODO: 判断手指与控件的垂直距离，若太远，则设定 self.onSliding = false;
            console.log(`[${new Date()}] touchmoving...`);

            const handleElementPersentage = self.percentageForHandlePoint(event.originalEvent.touches[0].pageX);

            let targetValue;
            switch (self.options.type) {
                case SwiperSlide.type.withPoints:
                    const targetMapItemIndex = Math.round(handleElementPersentage / (1 / (self.options.map.length - 1)));
                    const targetMapItem = self.options.map[targetMapItemIndex];
                    targetValue = _.isObject(targetMapItem) ? targetMapItem.value : targetMapItem;
                    break;
                default:
                    targetValue = Math.round(handleElementPersentage * (self.options.max - self.options.min) + self.options.min);
                    break;
            }

            self.viewValue = targetValue;
        });
    }

    bindEvent_touchEnd() {
        $(document).on('touchend', this.handlePoint.selector, () => {
            this.onSliding = false;
            this.viewValue = this.viewValue;

            if (this.options.onChange) {
                if (this._type === 3) {
                    let targetIndex = this.options.map.valMap[this.value];
                    let targetName = this.options.map.nameMap[this.value];
                    this.options.onChange(this.value, targetIndex, targetName);
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
            point: {
                selector: this._hook + ' .point-container'
            },
        };
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

    bindEvent_tapPoint() {
        var self = this;
        $(document).on('tap', this.handleButton.point.selector, function() {
            const targetPoint = $(this);
            console.log(targetPoint.attr('value'));
            self.viewValue = targetPoint.attr('value');
        });
    }


    percentageForHandlePoint(currentX) {
        // 根据传入的手指触摸点的 X 坐标，返回对应的控制点百分比
        const slideElement = $(this._hook + ' .inner');
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


    disable() {
        super.disable();
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

// 添加类型
SwiperSlide.type = {
    default: Symbol(), // 默认类型
    withBtn: Symbol(), // 带+和-按钮
    withPoints: Symbol(), // 带刻度
};

UI.registerComponent('SwiperSlide', SwiperSlide);

export default SwiperSlide;