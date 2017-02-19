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
 *               text => 子元素模块名称
 *          }
 *     
 */
class ListItem extends UI{
    constructor(options){
        super(options);
    }
    create(){
        let hook = this.options.hook;
        let html = "";
        let gm;
        if(this.options.gridNum === "3"){
            gm = "unit-1-3";
        }else{
            gm = "unit-1-4";
        } 
        for(var i in this.options.map){
            html += `<div class="`+gm+` site-box text-center">
                        <span class="iconfont">`+this.options.map[i].icon+`</span>
                        <span class="mode_name">`+this.options.map[i].text+`</span>
                    </div>`;
        }
        $(hook).append(html);
    }
};




export default ListItem;