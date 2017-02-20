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

        super.create();

        const hook = this.options.hook;

        const gridNum = this.options.gridNum;
        let _map = this.options.map;
        const remainder = _map.length % gridNum;
        if (remainder !== 0) {
            const additionalArrayForMap = new Array(gridNum - remainder).fill(false);
            _map = _map.concat(additionalArrayForMap);
            console.log(_map);
        }

        let html = '';

        if (this.options.title) {
            html += `<div class="list-item-title">${this.options.title}</div>`;
        }

        for(let i in _map){
            const index = Number(i);
            const map = this.options.map;
            const item = _map[index];

            // 设定默认值
            if (this.value === undefined) {
                this.value = item.value;
            }

            // 新的一行开始
            if (index % gridNum === 0) {
                html += '<div class="flex-left units-gap">';
            }

            if (item === false) {
                html += `
                <div class="unit site-box flex-center flex-vertical" data-map-index="${index}"></div>
                `;
            } else {
                html += `
                <div class="unit site-box flex-center flex-vertical list-item-subitem" 
                data-map-index="${index}" 
                value="${item.value}"
                >
                    <span class="iconfont site-box"> ${item.icon} </span>
                    <span class="mode_name site-box"> ${item.text} </span>
                </div>
            `;
            }

            // 新的一行结束
            if ((index + 1) % gridNum === 0 || index + 1 === _map.length) {
                html += '</div>';
            }

        }
        $(hook).append(html);
        //bindEvent(hook,this.options.change);
    }

    _initInteraction() {
        super._initInteraction();

        $(document).on(
            'click',
            this._itemSelector,
            (event, childSelector, data, func, map) =>
            {
                const $this = $(event.currentTarget);
                const mapIndex = $this.data('map-index');
                const currentItemData = this.options.map[mapIndex];
                if (this.options.onClick) {
                    this.options.onClick(currentItemData, mapIndex, this);
                }
            }
        );
    }

    get _itemSelector() {
        return this.options.hook + ' .list-item-subitem';
    }

    beforeSetValue(targetValue) {
        let hasValue = false;
        const map = this.options.map;
        for (let i in map) {
            const index = Number(i);
            const item = map[index];
            if (item.value === targetValue) {
                hasValue = true;
                break;
            }
        }

        return hasValue;
    }

    afterSetValue() {
        this.updateActiveIndex(this.value);
    }

    updateActiveIndex(currentValue) {
        const selector = `${this._itemSelector}[value=${currentValue}]`;
        const activeClassName = 'active';
        $(this._itemSelector).removeClass(activeClassName);
        $(selector).addClass(activeClassName);
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