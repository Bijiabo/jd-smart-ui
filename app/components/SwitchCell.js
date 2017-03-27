import UI from '../core/UI';
var $ = require('jquery');

class SwitchCell extends UI {

    constructor(options) {
        const defaultOptions = {
            title: '电源开关',
            type: 'JD', //JD、jd标准样式、 Ali、阿里标准样式
            value: '0', //和正常一样，开1，关0
            hook: false,
            map: {
                on: '1',
                off: '0'
            },
            onTap: function(index) {

            }
        };
        const _options = $.extend(defaultOptions, options);
        super(_options);
    }

    create() {
        this._hook = this.options.hook;

        const html = `<div class="panel ${this.options.type === SwitchCell.type.power ? 'no-margin no-border-radius' : ''}">
                    <div class="switch-control flex-left">
                        <div class="switch-title">${this.title}</div>
                        <div class="switch-btn-main">
                            <input type="checkbox" name= "switch-cell-${this.options.type === SwitchCell.type.power ? 'jd' : 'ali'}">
                            <label for="switch-cell-${this.options.type === SwitchCell.type.power ? 'jd' : 'ali'}"
                                class="tapbtn iconfont">${this.options.type === SwitchCell.type.power ? '&#xe6c5;':''}</label>
                        </div>

                    </div>
                </div>`;

        $(this._hook).append(html);

        this.value = '0';
    }

    get title() {
        if (_.isFunction(this.options.title)) {
            return this.options.title(this.value);
        } else {
            return this.options.title;
        }
    }

    getCheckBox() {
        if (this.options.type === SwitchCell.type.power) {
            return this._hook + ` :checkbox`;
        } else {
            return this._hook + ` :checkbox`;
        }
    }

    get tapElementSelector() {
        const domSelector = this._hook + ` .tapbtn`;
        return domSelector;
    }

    bindSwitch_tap() {
        $(document).on('tap', this.tapElementSelector, (e) => {
            if (this.isChecked) {
                this.value = "1";
            } else {
                this.value = "0";
            }

            if (this.options.onTap) {
                this.options.onTap(this.value);
            }
        });
    }

    unbindSwitch_tap() {
        $(document).off('tap', this.tapElementSelector);
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
        // console.warn($(this.getCheckBox()));
        const labelElement = $(`${this._hook} label`);
        if (nowValue === "1") {
            $(this.getCheckBox()).attr('checked', 'checked');
            labelElement.addClass('checked')
            if (this.options.type === SwitchCell.type.power) {
                labelElement.removeClass('active-block');
            } else {
                labelElement.addClass('active-block')
            }

        } else {
            $(this.getCheckBox()).attr('checked', false);
            labelElement.removeClass('checked');
            if (this.options.type === SwitchCell.type.power) {
                labelElement.addClass('active-block');
            } else {
                labelElement.removeClass('active-block')
            }
        }
        this._value = nowValue;

        const titleElement = $(this._hook + ' .switch-title');
        titleElement.text(this.title);
        if (nowValue === '1' && this.options.type === SwitchCell.type.power) {
            titleElement.addClass('theme-text');
        } else {
            titleElement.removeClass('theme-text');
        }
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

SwitchCell.type = {
    power: Symbol(), // 电源开关
    switch: Symbol(), // 切换按钮
};

UI.registerComponent('SwitchCell', SwitchCell);
export default SwitchCell;