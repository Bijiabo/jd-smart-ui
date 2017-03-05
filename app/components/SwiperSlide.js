import UI from '../core/UI';
var $ = require('jquery');

/**
 * 
 * @class SwiperSlide
 * @extends {UI}
 */


class SwiperSlide extends UI {
    constructor(options) {
        super(options);
    }

    create() {
        this._map = this.options.map;
        this._hook = this.options.hook;
        this._title = this.options.title;
        this._type = this.options.type;
        this._showTip = this.options.showTip;

        let bar = Number(this._type);
        switch (bar) {
            case 1:
                this.sliderCommon();
                break;
            case 2:
                this.sliderCommon();
                break;
            default:
                this.sliderCommon();
                break;
        }

    }
    sliderCommon() {
        let html = '';
        let type = Number(this._type);


        html += `<div class="panel">`;
        if (this._title) {
            html += `<div class="panel-title">${this._title}</div>`;
        }

        if (type === 1) {
            html += `<div class="swiper-control">
                    <div class="inner">
                        <!-- 轨道 -->
                        <div class="swiper-track" id = "track-inner" 
                            min="${this._map.min}" max="${this._map.max}" data-now = ''></div>
                        <!-- 拇指 -->
                        <div class="swiper-thumb" data-content =''></div>
                        <!-- 数值 -->
                        <div class="swiper-num flex-left">
                            <span>${this._map.min}</span> 
                            <span>${this._map.max}</span>
                        </div>
                    </div>
                </div>`;

        } else if (type === 2) {
            html += `<div class="swiper-control">
                    <div class="inner">
                        <!-- 轨道 -->
                        <div class="swiper-track" id = "track-inner" 
                            min="${this._map.min}" max="${this._map.max}" data-now = ''></div>
                        <!-- 拇指 -->
                        <div class="swiper-thumb" data-content = ''></div>
                        <!-- 数值 -->
                        <div class="swiper-num flex-left">
                            <span>${this._map.min}</span> 
                            <span>${this._map.max}</span>
                        </div>
                    </div>
                </div>
                <!-- 控制 -->
                <div class="contorlPanel flex-left">
                    <span data-value ="plusBtn">+</span>
                    <span data-value ="minusBtn">-</span>
                </div>`;
        }

        $(this._hook).append(html);
    }

    initEventFn() {
        let type = Number(this._type);
        switch (type) {
            case 1:
                this.fnCommon();
                break;
            case 2:
                this.fnCommon();
                break;
            case 3:
                break;
            default:
                break;
        }
    }

    //不带bar和带把的
    fnCommon() {
        //一堆初始化参数
        let trigger = this._hook + ' .swiper-thumb';
        let track = this._hook + ' .swiper-track';
        let type = Number(this._type);
        let panel = this._hook + ' .panel';

        /**
         * 设置了初始位置、结束位置、gap宽度、平均宽度
         */
        this.computeFn(this._hook, this._hook + ` .inner`, this._hook + ` .panel`,
            `#track-inner`, this._hook + ` .swiper-thumb`);

        //判断是否有初始值
        if (this._map.value) {
            this.setThumbPosition(this.stepWidth * (this._map.value - this._map.min));
            $(track).attr('data-now', this.stepWidth * (this._map.value - this._map.min));
            this._value = this._map.value;
        } else {
            this.setThumbPosition('0');
            $(track).attr('data-now', '0');
            this._value = 0;
        }

        //判断是否有topTip
        if (this._showTip) {
            if (this._map.value) {
                $(trigger).attr('data-content', this._map.value);
            } else {
                $(trigger).attr('data-content', this._map.min);
            }
        }

        if (type === 2) {
            this.hasBar();
        }

        //touch
        $(document).on('touchstart', trigger, (e) => {
            this.fn1(e);
        }).on('touchmove', trigger, (e) => {
            this.fn2(e);
        }).on('touchend', trigger, (e) => {
            this.fn3(e);
        });

    }

    //touchstart
    fn1(e) {
        return false;
    }

    //touchmove
    fn2(e) {
        let trigger = this._hook + ' .swiper-thumb';
        let movex = e.originalEvent.changedTouches[0].clientX;
        if (movex > this.initEnd) {
            movex = this.initEnd;
        } else if (movex < this.initStart) {
            movex = this.initStart;
        }
        movex = movex - this.initStart;

        //为onsilde设置当前值
        let CUR_VAL = Math.round(movex / this.stepWidth) + this._map.min;
        if (CUR_VAL > this._map.max) {
            CUR_VAL = this._map.max;
        }
        if (this.options.onSilde) {
            this.options.onSilde(CUR_VAL, trigger);
        }
        if (this._showTip) {
            $(trigger).attr('data-content', CUR_VAL);
        }
        this._value = CUR_VAL;
        this.setThumbPosition(movex);
    }

    //touchend
    fn3(e) {
        let track = this._hook + ' .swiper-track';
        let endx = e.originalEvent.changedTouches[0].clientX;
        if (endx > this.initEnd) {
            endx = this.initEnd;
        } else if (endx < this.initStart) {
            endx = this.initStart;
        }
        $(track).attr('data-now', endx);
        let val = Math.round((endx - this.initStart) / this.stepWidth) + this._map.min;
        this._value = val;

        if (val > this._map.max) {
            val = this._map.max;
        }
        if (this.options.onChange) {
            this.options.onChange(val);
        }
    }
    //带把儿的增加、减少按钮事件
    hasBar() {
        let tapper = this._hook + ' .contorlPanel span';
        let trigger = this._hook + ' .swiper-thumb';
        let type = Number(this._type);
        $(document).on('tap', tapper, (e) => {
            let $this = $(e.currentTarget);
            let name = $this.data('value');
            switch (name) {
                case 'plusBtn':
                    if (this._value < this._map.max) {
                        this._value = this._value + 1;
                    }
                    this.setThumbPosition(this.stepWidth * (this._value - this._map.min));
                    $(trigger).attr('data-content', this._value);
                    if (this.options.onPlus && type === 2) {
                        this.options.onPlus(this._value);
                    } else {
                        throw "we don't support this function"
                    }
                    break;
                case 'minusBtn':
                    if (this._value > this._map.min) {
                        this._value = this._value - 1;
                    }
                    this.setThumbPosition(this.stepWidth * (this._value - this._map.min));
                    $(trigger).attr('data-content', this._value);
                    if (this.options.onMinus && type === 2) {
                        this.options.onMinus(this._value);
                    } else {
                        throw "we don't support this function"
                    }
                    break;
            }
        });
    }

    //计算相关的方法
    computeFn(a, b, c, d, e) {
        //计算可用的长度
        let fatherWidth = $(c).width();
        let childWidth = $(b).width();
        let screenWidth = $(window).width();
        //这里强制转换下jquery获取宽度时错误  =================样式变化这里也要改=======================
        if (childWidth === fatherWidth) {
            childWidth = fatherWidth - 54;
        }

        //计算初始位置
        this.gap = (screenWidth - childWidth) / 2;
        this.initStart = this.gap;
        this.initEnd = screenWidth - this.gap;

        this.stepWidth = childWidth / (this._map.max - this._map.min);

        //let avgWidth = Math.round((childWidth / length) / childWidth * 100);
        // //设置宽度
        // $(d + ' li').css({
        //     width: avgWidth + `%`
        // });
    }

    setThumbPosition(a) {
        let trigger = this._hook + ' .swiper-thumb';
        $(trigger).css({
            left: a
        });
    }

    get value() {
        return this._value;
    }

    set value(x) {
        this._value = x;
        let trigger = this._hook + ' .swiper-thumb';
        this.setThumbPosition(this.stepWidth * (this._value - this._map.min));
        $(trigger).attr('data-content', this._value);
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