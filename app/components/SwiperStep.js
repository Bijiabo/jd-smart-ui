import UI from '../core/UI';
var $ = require('jquery');

/**
 * 
 * map:{
 *     valMap:['10','20','40','50'],
 *     nameMap:['模式1','模式2','模式3','模式4']
 *      
 * }
 */
class SwiperStep extends UI {
    constructor(options) {
        super(options);
    }
    create() {
        this._hook = this.options.hook || '.swiper-step';
        this._map = this.options.map;
        this._showTip = this.options.showTip;
        this._valMap = this.options.map.valMap;
        this._nameMap = this.options.map.nameMap;
        let html = '';

        html += `<div class="panel">`;
        if (this.options.title) {
            html += `<div class="panel-title">${this.options.title}</div>`;
        }
        let innerNode = this.createInner(this._valMap);
        let bottomVal = this.createBtm(this._nameMap);
        html += `<div class="swiper-control">
                    <div class="inner">
                        <!-- 轨道 -->
                        <div class="swiper-step-track flex-left" id="track-inner" min="" max="" data-now=''>
                            ${innerNode}
                        </div>
                        <!-- 拇指 -->
                        <div class="swiper-thumb" data-content=''></div>
                        <!-- 数值 -->
                        <div class="swiper-num2 flex-left">
                            ${bottomVal}
                        </div>
                    </div>
                </div>`;
        $(this._hook).append(html);
    }
    initEventFn() {
        //计算
        this.computeFn(this._hook, this._hook + ` .inner`, this._hook + ` .panel`,
            `#track-inner`, this._valMap, this._hook + ` .swiper-thumb`);
        let trigger = this._hook + ` .swiper-thumb`;
        let valInit;
        if (this.options.val) {
            this._value = this.options.val;
            valInit = this._valMap.indexOf(this._value);
        } else {
            this._value = this._valMap[0];
            valInit = 0;
        }

        this.setThumbPosition(valInit * this.stepWidth);

        $(document).on('touchstart', trigger, (e) => {
            return false;
        }).on('touchmove', trigger, (e) => {
            this.moveFn(e)
        }).on('touchend', trigger, (e) => {
            this.moveEnd(e);
        });
    }

    moveFn(e) {
        let movex = e.originalEvent.changedTouches[0].clientX;

        if (movex < this.initStart) {
            movex = this.initStart;
        }

        if (movex > this.initEnd) {
            movex = this.initEnd;
        }

        movex = movex - this.initStart;

        let step = Math.round((movex) / this.stepWidth);

        this.setThumbPosition(step * this.stepWidth);
    }

    moveEnd(e) {
        let endx = e.originalEvent.changedTouches[0].clientX;
        if (endx < this.initStart) {
            endx = this.initStart;
        }

        if (endx > this.initEnd) {
            endx = this.initEnd;
        }

        endx = endx - this.initStart;

        let _index = Math.round(endx / this.stepWidth);
        this._value = this._valMap[_index];
        if (this.options.onChange) {
            this.options.onChange(this._value, _index);
        }
    }

    createInner(arr) {
        let html = "";
        arr.forEach((x, index) => {
            if (index + 1 === arr.length) {
                return false;
            } else {
                html += `<li></li>`;
            }

        });
        return html;
    }

    createBtm(arr) {
        let html = "";
        arr.forEach((x, index) => {
            if (index === arr.length) {
                return false;
            } else {
                html += `<span style = "width:${110 / arr.length}%">${x}</span>`
            }
        });

        return html
    }

    setThumbPosition(val) {
        let trigger = this._hook + ` .swiper-thumb`;
        $(trigger).css({
            left: val + `px`
        });
    }

    //计算相关的方法
    computeFn(a, b, c, d, e, f) {
        let length = e.length - 1;
        //计算可用的长度
        let fatherWidth = $(c).width();
        let childWidth = fatherWidth * (1 - 0.178);
        let screenWidth = $(window).width();

        //计算初始位置
        this.gap = (screenWidth - childWidth) / 2;
        this.initStart = this.gap;
        this.initEnd = screenWidth - this.gap;

        this.stepWidth = Math.round(childWidth / length);
        let avgWidth = Math.round((childWidth / length) / childWidth * 100);
        //设置宽度
        $(d + ' li').css({
            width: avgWidth + `%`
        });
    }

    get value() {
        return this._value;
    }

    set value(x) {
        //判断是否存在
        if (this._valMap.indexOf(x) !== -1) {
            this._value = x;
            this.setThumbPosition(this._valMap.indexOf(x) * this.stepWidth);
        } else {
            throw "check this value again";
        }
    }

    disabled() {
        super.disabled();
        let trigger = this._hook + ` .swiper-thumb`;
        $(document).off('touchstart touchmove touchend', trigger);
        $(this._hook).addClass('disabled');
    }

    enable() {
        super.enable();
        let trigger = this._hook + ` .swiper-thumb`;
        $(document).on('touchstart', trigger, (e) => {
            return false;
        }).on('touchmove', trigger, (e) => {
            this.moveFn(e);
        }).on('touchend', trigger, (e) => {
            this.moveEnd(e);
        });
        $(this._hook).removeClass('disabled');
    }
}

UI.registerComponent('SwiperStep', SwiperStep);

export default SwiperStep;