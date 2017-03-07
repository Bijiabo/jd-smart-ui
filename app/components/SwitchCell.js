import UI from '../core/UI';
var $ = require('jquery');

class SwitchCell extends UI {

    constructor(options) {
        super(options);
        this._value = '0';
    }

    create() {
        this._hook = this.options.hook;
        this._title = this.options.title || '电源开关';
        this._icon = this.options.icon || '&#xe6c5;';
        this._type = this.options.type;

        this._map = this.options.map;
        let html = '';
        if (this._type === '1') {
            html = `<div class="panel">
                    <div class="switch-control flex-left">
                        <div class="switch-title">${this._title}</div>
                        <div class="switch-btn ${this._value === '1' ? 'on' : ''}" data-cell-value = "${this._value}">
                            <i class="iconfont">${this._icon}</i>
                        </div>
                    </div>
                </div>`;
        }
        $(this._hook).append(html);
    }

    initEventFn() {
        if (this._type === '1') {
            this.JDRuleFn();
        } else {
            this.AliRuleFn();
        }
    }

    JDRuleFn() {
        let trigger = this.selectDom();
        $(document).on('tap', trigger, (e) => {
            let $this = $(e.currentTarget);
            let value = $this.data('cell-value').toString();
            this.selectFn(value, $this);
            if (this.options.onTapBefore) {
                this.options.onTapBefore();
            }
            this.options.onTap(this._value);
            if (this.options.onTapAfter) {
                this.options.onTapAfter();
            }
        });
    }

    AliRuleFn() {
        console.log('coming soon~~@@@');
    }

    selectFn(value, $this) {
        if (value === "1") {
            this._value = '0';
            $this.data('cell-value', this._value);
            $this.removeClass('on');
        } else {
            this._value = '1';
            $this.data('cell-value', this._value);
            $this.addClass('on');
        }
    }

    selectDom() {
        return this._hook + ' .switch-btn';
    }

    set value(val) {
        let checkBool = this.checkFn(val);
        if (checkBool) {
            this._value = val;
            console.log(this._value);
            $(this._hook).empty();
            this.create();
        }
    }
    value() {
        return this._value;
    }

    disabled() {
        super.disabled();
        $(this._hook).addClass('disabled');
        let trigger = this.selectDom();
        $(document).off('tap', trigger);
    }

    enable() {
        super.enable();
        $(this._hook).removeClass('disabled');
        if (this._type === '1') {
            this.JDRuleFn();
        }
    }
    checkFn(val) {
        for (let i in this._map) {
            if (this._map[i] === val) {
                return true;
            }
        }
        return false;
    }

}

UI.registerComponent('SwitchCell', SwitchCell);
export default SwitchCell;