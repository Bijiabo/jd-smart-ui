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
            default:
                this.sliderCommon();
                break;
        }

    }
    sliderCommon() {
        let _map = this.options.map;
        let html = '';
        let _hook = this.hookDom();

        html += `<div class="panel">`;
        if (this.options.title) {
            html += `<div class="panel-title">${this.options.title}</div>`;
        }

        html += `<div class="swiper-control">
                    <!-- 轨道 -->
                    <div class="swiper-track" min="${_map.min}" max="${_map.max}"></div>
                    <!-- 拇指 -->
                    <div class="swiper-thumb"></div>
                    <!-- 数值 -->
                    <div class="swiper-num flex-left">
                        <span>${_map.min}</span> 
                        <span>${_map.max}</span>
                    </div>
                </div>`;
        $(_hook).append(html);
    }

    initEventFn() {
        let _map = this.options.map;
        let _hook = this.hookDom();
        let trigger = _hook + ' .swiper-thumb';
        let track = _hook + ' .swiper-track';
        let ScreenWidth = $(window).width();            //获取屏幕宽度
        let SlideWidth = $(track).width();              //获取轨道宽度
        let ThumbWidth = $(trigger).width();            //获取滑块宽度 
        let INIT_START = Math.floor((ScreenWidth - SlideWidth) / 2) + Math.floor((ThumbWidth / 2));//拧一下，酸爽的得到滑块初试起始位置（这里为了精确，减去了滑块的一半宽度）
        let INIT_END  = Math.floor((ScreenWidth - SlideWidth) / 2) + 
                        Math.floor(SlideWidth) - Math.floor((ThumbWidth / 2)); //再拧一下，酸爽的得到滑块初试结束位置（这里为了精确，减去了滑块的一半宽度）
        let TRACK_LENGTH_AVG = Math.round((SlideWidth - ThumbWidth)/(_map.max - _map.min)); //轨道可用宽度
                                    
        console.log(TRACK_LENGTH_AVG);
        if(_map.value){
            //判断是否有初始值
           this.setThumbPosition(TRACK_LENGTH_AVG * (_map.value - _map.min));
        }
        $(document).on('touchstart', trigger, (e)=>{
            let START_X = e.originalEvent.changedTouches[0].clientX;
            if (START_X < INIT_START) {
                console.log('0')
            } else {
                console.log('touchstart', START_X);
            }

        });
        $(document).on('touchmove', trigger, (e)=>{
            let MOVE_X = e.originalEvent.changedTouches[0].clientX;
            
            let moveX = MOVE_X - INIT_START;
            this.setThumbPosition(moveX,INIT_START,INIT_END);
        });
        $(document).on('touchend', trigger, (e)=>{
            console.log('touchend', e);
            let END_X = e.originalEvent.changedTouches[0].clientX;
            let val = Math.floor((END_X - INIT_START)/TRACK_LENGTH_AVG) + _map.min;
            console.log(val);
        });
    }

    setThumbPosition(a,b,c){
        
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