const $ = require('jquery');
const jqueryFinger = require('jquery.finger');
import styleManager from './StyleManager';
const _ = require('underscore');
global._ = _;

class UI {
    constructor(options) {
        // options
        const defaultOptions = {
            hook: false,
            defaultValue: 0,
            afterEnabled: function() {},
            afterDisabled: function() {},
            afterShow: function() {},
            afterHide: function() {}
        };
        const _options = $.extend(defaultOptions, options);
        this.options = _options;

        this._unclickMap = [];
        this._visibility = true;
        this._enabled = true;
        this.create();
        this.initEventFn();
    }

    // 初始化方法
    create() {

    }

    // 监听交互方法
    initEventFn() {

        }
        //显示
    show() {
        $(this.options.hook).show();
        this._visibility = true;
    };
    //隐藏
    hide() {
        $(this.options.hook).hide();
        this._visibility = false;
    };
    //可见性
    get visibility() {
            return this._visibility;
        }
        //设置可用
    enable() {
        this._enabled = true;
        this.afterEnabled();
    };
    afterEnabled() {
            this.options.afterEnabled();
        }
        //设置不可用
    disable() {
        this._enabled = false;
        this.afterDisabled();
    };
    afterDisabled() {
            this.options.afterDisabled();
        }
        //是否可用
    get isEnabled() {
        return this._enabled;

    };
    //是否不可用
    get isDisabled() {
        return !this._enabled;
    };

    get dom() {
        return $(this.options.hook);
    };

    get getself() {
        return this;
    };

    // value
    get value() {
        return this._value;
    };

    beforeSetValue(targetValue, oldValue) {
        return true;
    }

    afterSetValue() {

    }

    set value(val) {
        // console.warn(this.afterSetValue());
        if (!this.beforeSetValue(val, this._value)) { return; }
        this._value = val;
        this.afterSetValue(val);
        this.viewValue = this.value;
    };

    // viewValue
    get viewValue() {
        return this._viewValue;
    };

    beforeSetViewValue(targetValue, oldValue) {
        return true;
    }

    afterSetViewValue() {

    }

    set viewValue(val) {
        // console.warn(this.afterSetValue());
        if (!this.beforeSetViewValue(val, this._viewValue)) { return; }
        this._viewValue = val;
        this.afterSetViewValue(val);
    };

    syncValueFromViewValue() {
        this._value = this._viewValue;
    }

    syncViewValueFromValue() {
        this._viewValue = this._value;
    }


    get el() {
        return $(this.options.hook);
    }

    // 检测是否有对应的组件
    static hasComponent(name) {
        return !!global.JDUI.instance[name];
    }

    // 检测是否有对应的组件类型
    static hasTypeForComponent(name) {
        return !!global.JDUI.type[name];
    }

    // 注册组件方法
    static registerComponent(componentName, componentClass) {
        /*
         * componentName, // 组件名称，开发者使用时使用 new JDUI.instance.componentName() 即可使用
         * componentClass, // 组件类
         * types, // 组件内的类型注册，用于方便开发者传参使用
         * */
        const result = {
            success: false,
            error: 'unknow'
        };

        if (this.hasComponent(componentName)) {
            result.success = false;
            result.error = `the component '${componentName}' has been registerted before`;
            return result;
        }

        if (global.JDUI) {
            global.JDUI.instance[componentName] = componentClass;
        }

        // 注册类型
        if (!componentClass.type) { return; }
        if (this.hasTypeForComponent(componentName)) {
            result.success = false;
            result.error = `the component '${componentName}' has been registerted type before`;
            return result;
        }

        global.JDUI.type[componentName] = componentClass.type;
    }

    // 注册类型方法
}

const JDUI = {
    findComponent: UI.findComponent,
    hasComponent: UI.hasComponent,
    registerComponent: UI.registerComponent,
    instance: {}, // new JDUI.instance.componentName
    type: {}, // 组件类型注册 JDUI.type.组件名.类型
    _themeColor: '#FF8650',
    style: styleManager,
    class: UI,
};
global.JDUI = JDUI;

export default UI;