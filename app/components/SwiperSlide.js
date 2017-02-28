import UI from '../core/UI';
var $ = require('jquery');


class SwiperSlide extends UI{
    constructor(options){
        super(options);
    }
    
    create(){
        console.log("create");
    }
    initEventFn(){
        console.log('initEventFn');
    }
}

UI.registerComponent('SwiperSlide', SwiperSlide);

export default SwiperSlide;