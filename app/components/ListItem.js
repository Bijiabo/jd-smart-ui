import UI from './UI';
var $ = require("jquery");

/**
 *  options中的参数
 *      title => 要显示的标题
 *      hook  => dom的钩子
 *      gridNum => 一行的数量
 *      map => 要添加的子元素
 *          {
 *              icon => iconfont编码，
 *              text => 子元素模块名称,
 *              val => 下发的值
 *          }
 */
class ListItem extends UI{
    constructor(options){
        super(options);
        this.create();
    }
    create(){
        let hook = this.options.hook;
        let meng = `<div class="meng" 
                        style="position: absolute; 
                               width: 100%; 
                               height:`+ 6 * Math.floor(this.options.map.length / this.options.gridNum) +`rem;
                               background: #fff; 
                               opacity: 0.5; 
                               z-index: 99;display:none;">
                    </div>`;
        $(hook).append(meng);
        
        let html = "";
        let gm;
        if(this.options.gridNum === "3"){
            gm = "unit-1-3";
        }else{
            gm = "unit-1-4";
        } 
        for(var i in this.options.map){
            html += `<div class="`+gm+` site-box text-center wm`+i+`" cmd = "`+this.options.map[i].val+`">
                        <span class="iconfont">`+this.options.map[i].icon+`</span>
                        <span class="mode_name">`+this.options.map[i].text+`</span>
                    </div>`;
        }
        $(hook).append(html);
        bindEvent(hook,this.options.change);
    }
};

function bindEvent(dom,change){
    let child = $(dom).children("div");
    for(var i in child){
        $(".wm"+i).bind("click",function(e){
            change($(this).attr("cmd"));
        });
    }
}

export default ListItem;