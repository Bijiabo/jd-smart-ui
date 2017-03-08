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
        this._type = this.options.type;
        this._showTip = this.options.showTip;
        
        let bar = Number(this._type);
        this.sliderCommon();

        this.setDefaultValue();
    }
    sliderCommon() {
        let html = '';
        let type = Number(this._type);


        html += `<div class="panel">`;
        if (this.options.title) {
            html += `<div class="panel-title">${this.options.title}</div>`;
        }

        html += `<div class="swiper-control">
                    <div class="inner">
                        <!-- 轨道 -->
                        <div class="swiper-track theme-block" id = "track-inner" 
                            min="${this.options.map.min}" max="${this.options.map.max}" data-now = ''></div>
                        <!-- 拇指 -->
                        <div class="swiper-thumb theme-border" data-content =''></div>
                        <!-- 数值 -->
                        <div class="swiper-num flex-left">
                            <span>${this.options.map.min}</span> 
                            <span>${this.options.map.max}</span>
                        </div>
                    </div>
                </div>`;

        if (type === 2) {
            html += `<!-- 控制 -->
                <div class="contorlPanel flex-right">
                    <span class="plus-button" data-value ="plusBtn">+</span>
                    <span class="minus-button" data-value ="minusBtn">-</span>
                </div>`;
        }

        $(this._hook).append(html);
    }

    initEventFn() {
        this.bindEvent_touchStart();
        this.bindEvent_touchMove();
        this.bindEvent_touchEnd();
        this.bindEvent_tapPlusButton();
        this.bindEvent_tapMinusButton();
    }

    setDefaultValue() {
        if (this.options.map.defaultValue) {
            this.value = this.options.map.defaultValue;
        }
    }

    get value() {
        return super.value;
    }

    set value(targetValue) {
        const min = this.options.map.min;
        const max = this.options.map.max;
        if (targetValue < min || targetValue > max) { return; }
        if (targetValue == this.value) { return; }
        const handleElementLeftPercentage = (targetValue - min) / (max - min) * 100;
        this.handlePoint.element
            .css('left', `${handleElementLeftPercentage}%`)
            .attr('data-content', targetValue);

        super.value = targetValue;
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
        $(document).on('touchmove', this.handlePoint.selector, function(event) {
            if (!self.onSliding) {return;}
            if (event.cancelable) {
                if (!event.defaultPrevented) {
                    event.preventDefault();
                }
            }
            // TODO: 判断手指与控件的垂直距离，若太远，则设定 self.onSliding = false;
            console.log(`[${new Date()}] touchmoving...`);
            const handleElementPersentage = self.percentageForHandlePoint(event.touches[0].pageX);
            const targetValue = Math.round( handleElementPersentage * self.options.map.max );
            self.value = targetValue;
        });
    }

    bindEvent_touchEnd() {
        $(document).on('touchend', this.handlePoint.selector, () => {
            this.onSliding = false;
        });
    }

    get handleButton() {
        return {
            plus: {selector: this._hook + ' .plus-button'},
            minus: {selector: this._hook + ' .minus-button'},
        }
    }

    bindEvent_tapPlusButton() {
        $(document).on('tap', this.handleButton.plus.selector, () => {
            this.value += 1;
        });
    }

    bindEvent_tapMinusButton() {
        $(document).on('tap', this.handleButton.minus.selector, () => {
            this.value -= 1;
        });
    }

    percentageForHandlePoint(currentX) {
        // 根据传入的手指触摸点的 X 坐标，返回对应的控制点百分比
        const slideElement = $(this._hook + ' .inner');
        return (currentX-slideElement.offset().left) / slideElement.width();
    }

    disabled() {
        super.disabled();
        $(this._hook).addClass('disabled');
        let trigger = this._hook + ' .swiper-thumb';
        $(document).off('touchmove touchstart touchend', trigger);
    }

    enable() {
        super.enable();
        $(this._hook).removeClass('disabled');
        let trigger = this._hook + ' .swiper-thumb';
        $(document).on('touchstart', trigger, (e) => {
            this.fn1(e);
        }).on('touchmove', trigger, (e) => {
            this.fn2(e);
        }).on('touchend', trigger, (e) => {
            this.fn3(e);
        });
    }
}

UI.registerComponent('SwiperSlide', SwiperSlide);

export default SwiperSlide;