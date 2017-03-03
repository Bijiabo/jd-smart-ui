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
         * 这里这些属性变成私有属性，方便私有方法计算
         */

        //获取屏幕宽度
        this.ScreenWidth = $(window).width();

        this.PanelWidth = $(panel).width();

        //获取轨道宽度
        this.SlideWidth = $('#track-inner').width();

        /**
         * jquery获取track的宽度时，高频率出现获取父容器宽度，这里强制转换 #############注意样式改的时候，这里也要改##############
         */
        if (this.SlideWidth === this.PanelWidth) {
            this.SlideWidth = this.PanelWidth - 40;
        }
        //设置为固定宽度
        this.ThumbWidth = 24;

        this.GAP = (this.ScreenWidth - this.SlideWidth) / 2;

        //滑块初试起始位置（这里为了精确，减去了滑块的一半宽度）
        this.INIT_START = this.GAP + (this.ThumbWidth / 2);

        //滑块初试结束位置（这里为了精确，减去了滑块的一半宽度)
        this.INIT_END = this.GAP + this.SlideWidth - this.ThumbWidth / 2;

        //轨道可用宽度
        this.TRACK_LENGTH_AVG = (this.SlideWidth - this.ThumbWidth) / (this._map.max - this._map.min);

        //判断是否有初始值
        if (this._map.value) {
            this.setThumbPosition(this.TRACK_LENGTH_AVG * (this._map.value - this._map.min));
            $(track).attr('data-now', this.TRACK_LENGTH_AVG * (this._map.value - this._map.min));
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
        //touchstart
        $(document).on('touchstart', trigger, (e) => {
            this.fn1(e);
        });

        //touchmove
        $(document).on('touchmove', trigger, (e) => {
            this.fn2(e);
        });

        //touchend
        $(document).on('touchend', trigger, (e) => {
            this.fn3(e);
        });
    }

    //touchstart
    fn1(e) {
        let START_X = e.originalEvent.changedTouches[0].clientX;
    }

    //touchmove
    fn2(e) {
        let trigger = this._hook + ' .swiper-thumb';
        let track = this._hook + ' .swiper-track';
        let MOVE_X = e.originalEvent.changedTouches[0].clientX;
        if (MOVE_X > this.INIT_END) {
            MOVE_X = this.INIT_END;
        } else if (MOVE_X < this.INIT_START) {
            MOVE_X = this.INIT_START;
        }
        MOVE_X = MOVE_X - this.INIT_START;

        //为onsilde设置当前值
        let CUR_VAL = Math.round(MOVE_X / this.TRACK_LENGTH_AVG) + this._map.min;
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
        this.setThumbPosition(MOVE_X);
    }

    //touchend
    fn3(e) {
        let trigger = this._hook + ' .swiper-thumb';
        let track = this._hook + ' .swiper-track';
        let END_X = e.originalEvent.changedTouches[0].clientX;
        if (END_X > this.INIT_END) {
            END_X = this.INIT_END;
        } else if (END_X < this.INIT_START) {
            END_X = this.INIT_START;
        }
        $(track).attr('data-now', END_X);
        let val = Math.round((END_X - this.INIT_START) / this.TRACK_LENGTH_AVG) + this._map.min;
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
                    this.setThumbPosition(this.TRACK_LENGTH_AVG * (this._value - this._map.min));
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
                    this.setThumbPosition(this.TRACK_LENGTH_AVG * (this._value - this._map.min));
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
        this.setThumbPosition(this.TRACK_LENGTH_AVG * (this._value - this._map.min));
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
        });
        $(document).on('touchmove', trigger, (e) => {
            this.fn2(e);
        });
        $(document).on('touchend', trigger, (e) => {
            this.fn3(e);
        });
    }
}

UI.registerComponent('SwiperSlide', SwiperSlide);

export default SwiperSlide;