import UI from '../core/UI';
var $ = require('jquery');

class SwitchCell extends UI {

    constructor(options) {
        super(options);
    }

    create() {
        this._hook = this.options.hook;
        this._title = this.options.title || '电源开关';
        this._type = this.getTypeIndexFn(this.options.type);

        this._map = this.options.map;
        let html = '';

        html = `<div class="panel">
                    <div class="switch-control flex-left">
                        <div class="switch-title">${this._title}</div>
                        <div class="switch-btn-main">
                            <input type="checkbox" id = "switch-cell-${this._type === 1 ? 'jd' : 'ali'}">
                            <label for="switch-cell-${this._type === 1 ? 'jd' : 'ali'}"
                                class="tapbtn iconfont">${this._type === 1 ? '&#xe6c5;':''}</label>
                        </div>

                    </div>
                </div>`;

        $(this._hook).append(html);
    }

    getTypeIndexFn(type) {
        let typeArr = ['JD', 'Ali'];
        if (typeArr.indexOf(type) !== -1) {
            return typeArr.indexOf(type) + 1;
        } else {
            throw 'please check the type param again!';
        }
    }

    getCheckBox() {
        if (this._type === 1) {
            return '#switch-cell-jd';
        } else {
            return '#switch-cell-ali'
        }
    }

    getTapDom() {
        return this._hook + ` .tapbtn`;
    }

    bindSwitch_tap() {
        let trigger = this.getTapDom();
        let that = this;
        $(document).on('tap', trigger, (e) => {
            if (that.isChecked) {
                this._value = "1";
            } else {
                this._value = "0";
            }

            if (this.options.onTap) {
                this.options.onTap(this.value);
            }

        })
    }

    unbindSwitch_tap() {
        let trigger = this.getTapDom();
        $(document).off('tap', trigger);
    }

    initEventFn() {
        this.bindSwitch_tap();
    }

    get isChecked() {
        return !$(this.getCheckBox()).is(':checked');
    }

    get value() {
        return this._value;
    }

    set value(nowValue) {
        if (nowValue === "1") {
            $(this.getCheckBox()).attr('checked', 'checked');
        }
        this._value = nowValue;
    }

    disabled() {
        super.disabled();
        $(this._hook).addClass('disabled');
        this.unbindSwitch_tap();
        $(this.getCheckBox()).attr('disabled', 'disabled');
    }

    enable() {
        super.enable();
        $(this._hook).removeClass('disabled');
        this.bindSwitch_tap();
        $(this.getCheckBox()).removeAttr('disabled');
    }
}

UI.registerComponent('SwitchCell', SwitchCell);
export default SwitchCell;