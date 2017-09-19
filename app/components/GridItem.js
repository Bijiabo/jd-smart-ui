import UI from './../core/UI';
const $ = require("jquery");
const phone_type = global.PhoneType
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

const activeClass = 'active-block active-border';

class GridItem extends UI {

    constructor(options) {
        super(options);
    }

    create() {
        let html = "";
        let _map = this.options.map;
        let _gridNum = this.options.gridNum;
        let _hook = this.options.hook;

        const splitLineHTML = '<div class="list-item-split-line"></div>';

        if (this.options.value) {
            this._value = this.options.value;
        }

        if (this.options.title) {
            html += `<div class="panel-title">${this.options.title}</div>${splitLineHTML}`;
        }

        html += `<div class="panel-body ui_wrap flex-left">`;
        for (let i in _map) {
            html +=
                `<div
             class="
             unit-1-${_gridNum} 
             site-box text-center grid-item 
             ${ _map[i].value === this._value ? activeClass : '' }
             ${ i%_gridNum===(_gridNum-1) ? 'no-right-border' : '' }
             ${ _map.length - i <= _map.length%_gridNum ? 'no-bottom-border' : '' }
             " 
             data-mode-index = "${_map[i].value}"
             value = "${_map[i].value}"
             >
                <span class="iconfont">${_map[i].icon}</span>
                <span class="mode_name">${_map[i].text}</span>
            </div>`;


        }

        html = `<div class="panel">${html}</div>`;
        $(_hook).append(html);
    }

    initEventFn() {
        let selector = this.selectorDom();
        // 绑定点击事件
        $(document).on('tap', selector, (e) => {
            this.fn(e);
        });
        if (phone_type === 'ios') {
            // 绑定触摸事件
            const hoverClass = 'grid-item-hover';
            $(document).on('touchstart', selector, (e) => {
                const $this = $(e.currentTarget);
                $this.addClass(hoverClass);
            });
            $(document).on('touchend', selector, (e) => {
                const $this = $(e.currentTarget);
                $this.removeClass(hoverClass);
            });
        }
    }

    fn(e) {
        let _this = $(e.currentTarget);
        let index = _this.data('mode-index');
        let item = this.options.map[Number(index)];
        let _map = this._unclickMap || [];
        let _map2 = this._dismisclickMap || [];

        if ((_map.indexOf(index.toString()) === -1) || (_map2.indexOf(index.toString()) !==  -1 )) {
            this.selected(index, _this);
            //before
            if (this.options.beforeTap) {
                this.options.beforeTap();
            }
            //tap
            if (this.options.onTap) {
                this.options.onTap(item, index, _this);
            }
            //after
            if (this.options.afterTap) {
                this.options.afterTap();
            }
        }
    }
    selectorDom() {
        return this.options.hook + " .grid-item";
    }

    selected(index, dom) {
        let selector = this.selectorDom();
        $(selector).removeClass(activeClass);
        if (dom) {
            $(dom).addClass(activeClass);
        } else {
            let selectedItem = `${this.selectorDom()}[value=${index}]`;
            $(selectedItem).addClass(activeClass);
        }
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this.setValueFn(val);
    }

    setValueFn(val) {
        let _map = this.options.map;
        let check = this.checkVal(val, _map);
        if (check) {
            for (let i in _map) {
                if (_map[i].value === val) {
                    this._value = val;
                    this.selected(Number(val));
                }
            }
        } else {
            throw "error";
        }
    }
    checkVal(val, _map) {
        let a = false;
        for (let i of _map) {
            if (i["value"] === val) {
                a = true;
                break;
            }
        }
        return a;
    }

    setItemDisabled(map) {
        let _map = map.index;
        this._unclickMap = _map;
        let selector = this.selectorDom();

        for (let i of _map) {
            let _item = `${selector}[value=${i}]`;
            $(_item).addClass("disabled");
        }
    }

    setItemEnabled(map){
        let _map = map.index;
        this._dismisclickMap = _map;
        let selector = this.selectorDom();
        for(let i of _map){
            let _item = `${selector}[value=${i}]`;
            console.log(_item);
            $(_item).removeClass("disabled");
        }
    }

    disable() {
        super.disable();
        $(this.options.hook).addClass("disabled");
        const selector = this.selectorDom();
        $(document).off("click", selector);
    }

    enable() {
        super.enable();
        $(this.options.hook).removeClass("disabled");
        // const selector = this.selectorDom();
        // $(document).on("click", selector, (e) => {
        //     this.fn(e);
        // });
    }
};


UI.registerComponent('GridItem', GridItem);

export default GridItem;