import UI from '../core/UI';
var $ = require('jquery');


/**
 * 
 * 升级版的SwiperSlide (升级思路，滑动条按照百分比滑动);
 * @class SwiperSlideE
 * @extends {UI}
 */
class SwiperSlideE extends UI{
    constructor(options){
        super(options)
    }

    create(){
        this._map       = this.options.map;
        this._hook      = this.options.hook;
        this._title     = this.options.title;
        this._type      = this.options.type;
        this._showTip   = this.options.showTip;
        
        switch (Number(this._type)) {
            case 1:
                this.swiperE();
                break;
            case 2:
                this.swiperE();
                break;
            case 3:
                break;

            default:
                break;
        }        
    }
    
    initEventFn(){

    }

    swiperE(){
        //console.log(this._title);
        
    }
}


UI.registerComponent('SwiperSlideE', SwiperSlideE);

export default SwiperSlideE