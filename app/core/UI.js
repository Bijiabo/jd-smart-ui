var $ = require('jquery');

class UI {
    constructor(options) {
        this.options = options;

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

    show() {
        $(this.options.hook).show();
        this._visibility = true;
    };
    hide() {
        $(this.options.hook).hide();
        this._visibility = false;
    };

    get visibility() {
        return this._visibility;
    }

    enable() {
        this._enabled = true;
    };
    disabled() {
        this._enabled = false;
    };
    get isEnabled() {
        return this._enabled;

    };
    get isDisabled() {
        return !this._enabled;
    };

    get dom(){
        return $(this.options.hook);
    };
    get getself(){
        return this;
    };

    updateValue(x) {
        this.value = x;
    }

    get value(){
        return true;
    }

    set value(val) {
        
    }

    beforeSetValue(targetValue) {
        return true;
    }

    afterSetValue() {

    }

    // 检测是否有对应的组件
    static hasComponent(name) {
        if (global.__JDUICache === undefined || global.__JDUICache.components === undefined) {
            return false;
        }

        let hasTargetComponent = !!global.__JDUICache.components[name];

        return hasTargetComponent;
    }

    // 注册组件方法
    static registerComponent(componentName, componentClass) {
        let result = {
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
    }
}

const JDUI = {
    findComponent: UI.findComponent,
    hasComponent: UI.hasComponent,
    registerComponent: UI.registerComponent,
    instance: {} // new JDUI.instance.componentName
};
global.JDUI = JDUI;

export default UI;