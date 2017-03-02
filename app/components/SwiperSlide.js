import UI from '../core/UI';
var $ = require('jquery');


/*<div class="swiper-wrap-normal">
    <div class="panel">
        <div class="panel-title">滑动组件</div>
        <div class="swiper-control">
            <!-- 轨道 -->
            <div class="swiper-track" min="20" max="30"></div>
            <!-- 拇指 -->
            <div class="swiper-thumb"></div>
            <!-- 数值 -->
            <div class="swiper-num flex-left">
                <span>20℃</span> 
                <span>30℃</span>
            </div>
        </div>
    </div>
</div>*/

class SwiperSlide extends UI {
    constructor(options) {
        super(options);
    }

    create() {
        let bar = Number(this.options.type);
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
        let _map = this.options.map;
        let html = '';
        let type = Number(this.options.type);
        let _hook = this.hookDom();

        html += `<div class="panel">`;
        if (this.options.title) {
            html += `<div class="panel-title">${this.options.title}</div>`;
        }

        if (type === 1) {
            html += `<div class="swiper-control">
                    <!-- 轨道 -->
                    <div class="swiper-track" min="${_map.min}" max="${_map.max}" data-now = ''></div>
                    <!-- 拇指 -->
                    <div class="swiper-thumb" data-content =''></div>
                    <!-- 数值 -->
                    <div class="swiper-num flex-left">
                        <span>${_map.min}</span> 
                        <span>${_map.max}</span>
                    </div>
                </div>`;

        } else if (type === 2) {
            html += `<div class="swiper-control">
                    <!-- 轨道 -->
                    <div class="swiper-track" min="${_map.min}" max="${_map.max}" data-now = ''></div>
                    <!-- 拇指 -->
                    <div class="swiper-thumb" data-content = ''></div>
                    <!-- 数值 -->
                    <div class="swiper-num flex-left">
                        <span>${_map.min}</span> 
                        <span>${_map.max}</span>
                    </div>
                </div>
                <!-- 控制 -->
                <div class="contorlPanel flex-left">
                    <span data-value ="plusBtn">+</span>
                    <span data-value ="minusBtn">-</span>
                </div>`;
        }

        $(_hook).append(html);
    }

    initEventFn() {
        let type = Number(this.options.type);
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
        let _map = this.options.map;
        let _hook = this.hookDom();
        let trigger = _hook + ' .swiper-thumb';
        let track = _hook + ' .swiper-track';
        let type = Number(this.options.type);

        //这里这些属性变成私有属性，方便私有方法计算
        this.ScreenWidth = $(window).width(); //获取屏幕宽度
        this.SlideWidth = $(track).width(); //获取轨道宽度
        this.ThumbWidth = 36; //设置为固定宽度
        this.GAP = (this.ScreenWidth - this.SlideWidth) / 2; //沟儿～～～
        this.INIT_START = this.GAP + (this.ThumbWidth / 2); //拧一下，酸爽的得到滑块初试起始位置（这里为了精确，减去了滑块的一半宽度）
        this.INIT_END = this.GAP + this.SlideWidth - this.ThumbWidth / 2; //再拧一下，酸爽的得到滑块初试结束位置（这里为了精确，减去了滑块的一半宽度)
        this.TRACK_LENGTH_AVG = (this.SlideWidth - this.ThumbWidth) / (_map.max - _map.min); //轨道可用宽度

        console.log("screen:" + this.ScreenWidth,
            "\nSlideWidth:" + this.SlideWidth,
            "\nThumbWidth:" + this.ThumbWidth,
            "\nGAP:" + this.GAP,
            "\nINIT_START:" + this.INIT_START,
            "\nINIT_END:" + this.INIT_END,
            "\nAVG:" + this.TRACK_LENGTH_AVG);

        //判断是否有初始值
        if (_map.value) {
            this.setThumbPosition(this.TRACK_LENGTH_AVG * (_map.value - _map.min));
            $(track).attr('data-now', this.TRACK_LENGTH_AVG * (_map.value - _map.min));
            console.log('has');
            this._value = _map.value;
        } else {
            this.setThumbPosition('0');
            $(track).attr('data-now', '0');
            this._value = 0;
        }

        //判断是否有topTip
        if (this.options.showTip) {
            if (_map.value) {
                $(trigger).attr('data-content', _map.value);
            } else {
                $(trigger).attr('data-content', _map.min);
            }
        }

        if (type === 2) {
            this.hasBar();
        }
        //touchstart
        $(document).on('touchstart', trigger, (e) => {
            let START_X = e.originalEvent.changedTouches[0].clientX;
        });

        //touchmove
        $(document).on('touchmove', trigger, (e) => {
            let MOVE_X = e.originalEvent.changedTouches[0].clientX;
            if (MOVE_X > this.INIT_END) {
                MOVE_X = this.INIT_END;
            } else if (MOVE_X < this.INIT_START) {
                MOVE_X = this.INIT_START;
            }
            MOVE_X = MOVE_X - this.INIT_START;

            //为onsilde设置当前值
            let CUR_VAL = Math.round(MOVE_X / this.TRACK_LENGTH_AVG) + _map.min;
            //@@@数学太差，为了解决数学计算的误差，这里强制设置大于最大值为最大值
            if (CUR_VAL > _map.max) {
                CUR_VAL = _map.max;
            }
            if (this.options.onSilde) {
                this.options.onSilde(CUR_VAL, trigger);
            }
            if (this.options.showTip) {
                $(trigger).attr('data-content', CUR_VAL);
            }
            this._value = CUR_VAL;
            this.setThumbPosition(MOVE_X);
        });

        //touchend
        $(document).on('touchend', trigger, (e) => {
            let END_X = e.originalEvent.changedTouches[0].clientX;
            if (END_X > this.INIT_END) {
                END_X = this.INIT_END;
            } else if (END_X < this.INIT_START) {
                END_X = this.INIT_START;
            }
            $(track).attr('data-now', END_X);
            let val = Math.round((END_X - this.INIT_START) / this.TRACK_LENGTH_AVG) + _map.min;
            //@@@数学太差，为了解决数学计算的误差，这里强制设置大于最大值为最大值
            if (val > _map.max) {
                val = _map.max;
            }
            if (this.options.onChange) {
                this.options.onChange(val);
            }
        });


    }

    //带把儿的增加、减少按钮事件
    hasBar() {
        let tapper = this.hookDom() + ' .contorlPanel span';
        let _map = this.options.map;
        let trigger = this.hookDom() + ' .swiper-thumb';
        let type = Number(this.options.type);
        $(document).on('tap',tapper,(e)=>{
            let $this = $(e.currentTarget);
            let name = $this.data('value');
            switch (name) {
                case 'plusBtn':
                    this._value = this._value + 1;
                    this.setThumbPosition(this.TRACK_LENGTH_AVG * (this._value - _map.min));
                    $(trigger).attr('data-content', this._value);
                    if(this.options.onPlus && type === 2){
                        this.options.onPlus(this._value);
                    }else{
                        throw "we don't support this function"
                    }
                    break;
                case 'minusBtn':
                    this._value = this._value - 1;
                    this.setThumbPosition(this.TRACK_LENGTH_AVG * (this._value - _map.min));
                    $(trigger).attr('data-content', this._value);
                    if(this.options.onMinus && type === 2){
                        this.options.onMinus(this._value);
                    }else{
                        throw "we don't support this function"
                    }
                    break;
            }
        });
    }

    setThumbPosition(a) {
        let trigger = this.hookDom() + ' .swiper-thumb';
        $(trigger).css({
            left: a
        });
    }

    hookDom() {
        let _hook = this.options.hook;
        return _hook;
    }

    get value() {
        return this._value;
    }
    
    set value(x) {
        this._value = x;
        let _map = this.options.map;
        let trigger = this.hookDom() + ' .swiper-thumb';
        this.setThumbPosition(this.TRACK_LENGTH_AVG * (this._value - _map.min));
        $(trigger).attr('data-content', this._value);
    }
}

UI.registerComponent('SwiperSlide', SwiperSlide);

export default SwiperSlide;