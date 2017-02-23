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
 *              val => 对应的下发的值
 *          }
 *     
 */
class GridItem extends UI{

    constructor(options){
        super(options);
    }

    create(){
        let html = "";
        let _map = this.options.map;
        let _gridNum = this.options.gridNum;
        let _hook = this.options.hook;
        
        if(this.options.value){
            this.value = this.options.value;
        }
        
        if(this.options.title){
           html += `<div class="wrap_title">`+this.options.title+`</div>`; 
        }
        html += `<div class="ui_wrap flex-left">`;
        for(let i in _map){
            if(_map[i].value === this.value){
                html += 
                `<div class="unit-1-${_gridNum} site-box text-center list-item on" 
                                                    data-mode-index = "${_map[i].value}"
                                                    value = "${_map[i].value}"
                                                    >
                    <span class="iconfont">${_map[i].icon}</span>
                    <span class="mode_name">${_map[i].text}</span>
                </div>`;    
            }else{
                html += 
                `<div class="unit-1-${_gridNum} site-box text-center list-item" 
                                                    data-mode-index = "${_map[i].value}"
                                                    value = "${_map[i].value}"
                                                    >
                    <span class="iconfont">${_map[i].icon}</span>
                    <span class="mode_name">${_map[i].text}</span>
                </div>`;     
            }
            
        }
        $(_hook).append(html);
    }

    initEventFn(){
        let selector = this.selectorDom();
        $(document).on("click",selector,(e)=>{
            let _this = $(e.currentTarget);
            let index = _this.data('mode-index');
            let item = this.options.map[Number(index)];
            this.selected(index,_this);
            //before
            if(this.options.beforeTap){
                this.options.beforeTap();
            }
            //tap
            if(this.options.onTap){
                this.options.onTap(item,index,_this);
            }
            //after
            if(this.options.afterTap){
                this.options.afterTap();
            }
        });
    }

    selectorDom(){
        return this.options.hook + " .list-item";
    }

    selected(index,dom){
        let selector = this.selectorDom();
        $(selector).removeClass("on");
        if(dom){
            $(dom).addClass("on");
        }else{
            let selectedItem = `${this.selectorDom()}[value=${index}]`;
            $(selectedItem).addClass("on");
        }
    }
    
    set setValue(val){
        this.setValueFn(val);
    }

    setValueFn(val){
        let _map = this.options.map;
        let check = this.checkVal(val,_map);
        
        if(check){
            for(let i in _map){
                if(_map[i].value === val){
                    this.value = val;
                    this.selected(i);
                }
            }
        }else{
            throw "error";
        }
    }

    checkVal(val,_map){
        let a = false;
        for(let i of _map){
            if(i["value"] === val){
                a = true;
                break;
            }
        }
        return a;
    }

};




export default GridItem;