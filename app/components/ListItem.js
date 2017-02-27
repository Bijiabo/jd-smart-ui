import UI from './../core/UI';
var $ = require('jquery');

/**
 * 
 * 
 * @class ListItem
 * @extends {UI}
 */
class ListItem extends UI {
    constructor(options) {
        super(options);
    }

    create() {
        let html = "";
        let _map = this.options.map;
        let _hook = this.options.hook;

        const splitLineHTML = '<div class="list-item-split-line"></div>';

        if (this.options.title) {

            html += `<div class="panel-title">${this.options.title}</div>${splitLineHTML}`;

        }

        //first line
        html += `<div class="panel-body flex-vertical site-box wrap">`;

        for (let i in _map) {

            html += `<div class="unit-0 site-box flex-left list-item" data-index = ${i} value = ${i}>
                        <span class="iconfont">${_map[i].icon}</span>
                        <div class="title">
                            <span class="${_map[i].subTitle ? `maint` : `maint_nosub`}">${_map[i].title}</span>
                            <span class="sub">${_map[i].subTitle}</span>
                        </div>
                        <div class="rightPart flex-right">
                            <span class="rightw">${_map[i].rightTitle}</span>
                            <span class="iconfont rightarrow">&#xe655;</span>
                        </div>
                    </div>`;

            if (i + 1 < this.options.map.length) {
                html += splitLineHTML;
            }
        }

        html = `<div class="panel">${html}</div>`;

        $(_hook).append(html);
    }

    initEventFn() {
        let item = this.selector();
        $(document).on('click', item, (e) => {
            this.fn(e);
        });
        // 绑定触摸事件
        const hoverClass = 'list-item-hover';
        $(document).on('touchstart', item, (e) => {
            const $this = $(e.currentTarget);
            $this.addClass(hoverClass);
        });
        $(document).on('touchend', item, (e) => {
            const $this = $(e.currentTarget);
            $this.removeClass(hoverClass);
        });
    }

    fn(e) {
        let $this = $(e.currentTarget);
        let index = $this.data('index');
        let selected = this.options.map[index];
        let _map = this._unclickMap;
        if ( _map.indexOf(index.toString()) === -1) {
            if (this.options.beforeTap) {
                this.options.beforeTap();
            }
            if (this.options.onTap) {
                this.options.onTap(selected, $this);
            }
            if (this.options.afterTap) {
                this.options.afterTap();
            }
        }
    }

    selector() {
        return this.options.hook + ' .list-item';
    }

    setItemDisabled(arr) {
        this._unclickMap = arr.index;
        let _map = arr.index;
        let _selector = this.selector();
        for(let i of _map){
            let _item = `${_selector}[value=${i}]`;
            $(_item).addClass("disabled");
        }

    }

    updateItem(updateOption){
        let _index = Number(updateOption.index);
        let _upMap = updateOption.map;
        let _curMap = this.options.map;
        //判断是否含有这个item
        let has = this.check(_index);
        if(has){
            _curMap[_index].icon = _upMap.icon;
            _curMap[_index].title = _upMap.title;
            _curMap[_index].subTitle = _upMap.subTitle;
            _curMap[_index].rightTitle = _upMap.rightTitle;
            this.refresh();
        }else{
            throw `do not has this item ${_index}`;
        }
    }

    check(index){
        let length = this.options.map.length;
        if(index + 1 > length){
            return false;
        }else{
            return true;
        }
    }

    refresh(){
        let _hook = this.options.hook;
        $(_hook).empty();
        this.create();
    }

    disabled(){
        super.disabled();
        let selector = this.selector();
        $(selector).addClass("disabled");
        $(document).off("click",selector);
    }

    enable(){
        super.enable();
        let selector = this.selector();
        $(selector).removeClass("disabled");
        $(document).on("click",selector,(e)=>{
            this.fn(e);
        });
    }
}

UI.registerComponent('ListItem', ListItem);

export default ListItem;