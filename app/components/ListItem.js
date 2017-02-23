import UI from './UI';
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

        if (this.options.title) {
            html += `<div class="wrap_title">` + this.options.title + `</div>`;
        }

        //first line
        html += `<div class="flex-vertical site-box wrap">`;

        for (let i in _map) {

            html += `<div class="unit-0 site-box flex-left list_item" data-index = ${i}>
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
        }
        $(_hook).append(html);

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

                if (this.options.afterClick) {
                    this.options.afterClick(currentItemData, mapIndex, this);
                }
            }
        );
    }

    initEventFn() {
        let item = this.selector();

        $(document).on('click', item, (e) => {
            let $this = $(e.currentTarget);
            let index = $this.data('index');
            let selected = this.options.map[index];
            if (this.options.beforeTap) {
                this.options.beforeTap();
            }
            if (this.options.onTap) {
                this.options.onTap(selected, $this);
            }
            if (this.options.afterTap) {
                this.options.afterTap();
            }
        });
    }

    selector() {
        return this.options.hook + ' .list_item';
    }

    setItemDisabled(arr){
        
    }

}

export default ListItem;