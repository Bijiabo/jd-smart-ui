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

        if(type === 1){

            html += `<div class="swiper-control">
                    <!-- 轨道 -->
                    <div class="swiper-track" min="${_map.min}" max="${_map.max}"></div>
                    <!-- 拇指 -->
                    <div class="swiper-thumb" data-content =''></div>
                    <!-- 数值 -->
                    <div class="swiper-num flex-left">
                        <span>${_map.min}</span> 
                        <span>${_map.max}</span>
                    </div>
                </div>`;
            
        }else if(type === 2){

            html += `<div class="swiper-control">
                    <!-- 轨道 -->
                    <div class="swiper-track" min="${_map.min}" max="${_map.max}"></div>
                    <!-- 拇指 -->
                    <div class="swiper-thumb" data-content = '0'></div>
                    <!-- 数值 -->
                    <div class="swiper-num flex-left">
                        <span>${_map.min}</span> 
                        <span>${_map.max}</span>
                    </div>
                </div>
                <!-- 控制 -->
                <div class="contorlPanel flex-left">
                    <span>+</span>
                    <span>-</span>
                </div>`;
        }

        $(_hook).append(html);
    }

    initEventFn() {
        //一堆初始化参数
        let _map = this.options.map;
        let _hook = this.hookDom();
        let trigger = _hook + ' .swiper-thumb';
        let track = _hook + ' .swiper-track';
        let ScreenWidth = $(window).width();            //获取屏幕宽度
        let SlideWidth = $(track).width();              //获取轨道宽度
        let ThumbWidth = $(trigger).width();            //获取滑块宽度 
        let GAP = (ScreenWidth - SlideWidth)/2;         //沟儿～～～
        let INIT_START = GAP + (ThumbWidth / 2);         //拧一下，酸爽的得到滑块初试起始位置（这里为了精确，减去了滑块的一半宽度）
        let INIT_END  = GAP + SlideWidth - ThumbWidth/2; //再拧一下，酸爽的得到滑块初试结束位置（这里为了精确，减去了滑块的一半宽度)
        let TRACK_LENGTH_AVG = (SlideWidth - ThumbWidth)/(_map.max - _map.min); //轨道可用宽度

        console.log("screen:"+ScreenWidth,
                    "\nSlideWidth:"+SlideWidth,
                    "\nThumbWidth:"+ThumbWidth,
                    "\nGAP:"+GAP, 
                    "\nINIT_START:"+INIT_START,
                    "\nINIT_END:"+INIT_END,
                    "\nAVG:"+TRACK_LENGTH_AVG);

        //判断是否有初始值
        if(_map.value){
           this.setThumbPosition(TRACK_LENGTH_AVG * (_map.value-_map.min));
            $(trigger).attr('data-content',_map.value);
        }else{
            $(trigger).attr('data-content',_map.min);
        }

        //touchstart
        $(document).on('touchstart', trigger, (e)=>{
            let START_X = e.originalEvent.changedTouches[0].clientX;
        });

        //touchmove
        $(document).on('touchmove', trigger, (e)=>{
            let MOVE_X = e.originalEvent.changedTouches[0].clientX;
            if(MOVE_X > INIT_END){
                MOVE_X = INIT_END;
            }else if(MOVE_X < INIT_START){
                MOVE_X = INIT_START;
            }
            MOVE_X = MOVE_X - INIT_START;
            
            //为onsilde设置当前值
            let CUR_VAL = Math.round(MOVE_X/TRACK_LENGTH_AVG) + _map.min;
            //@@@数学太差，为了解决数学计算的误差，这里强制设置大于最大值为最大值
            if(CUR_VAL > _map.max){
                CUR_VAL = _map.max;
            }
            if(this.options.onSilde){
                this.options.onSilde(CUR_VAL,trigger);
            }
            this.setThumbPosition(MOVE_X);
        });
        
        //touchend
        $(document).on('touchend', trigger, (e)=>{
            let END_X = e.originalEvent.changedTouches[0].clientX;
            if(END_X > INIT_END){
                END_X = INIT_END;
            }else if(END_X < INIT_START){
                END_X = INIT_START;
            }
            let val = Math.round((END_X - INIT_START)/TRACK_LENGTH_AVG) + _map.min;
            //@@@数学太差，为了解决数学计算的误差，这里强制设置大于最大值为最大值
            if(val > _map.max){
                val = _map.max;
            }
            if(this.options.onChange){
                this.options.onChange(val);
            }
        });
    }

    setThumbPosition(a){
        let trigger = this.hookDom() + ' .swiper-thumb';
        $(trigger).css({
            left:a
        });
    }

    hookDom() {
        let _hook = this.options.hook;
        return _hook;
    }
}

UI.registerComponent('SwiperSlide', SwiperSlide);

export default SwiperSlide;