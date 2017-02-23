var $ = require('jquery');

export default class JDUI {
    constructor(id, options) {
        this._id = id;
        this.options = options;

        this._visibility = true;
        this._enabled = true;

        this.create();
        this._initInteraction();
    }

    // 初始化方法
    create() {
        this._initInteraction();
    }

    // 监听交互方法
    _initInteraction() {

    }

    // 组件注册方法
    static register(name, targetClass) {
        if (!global.JDUICache) {
            global.JDUICache = {
                components: [],
            };
        }

        global.JDUICache.components.push({
            name: name,
            class: targetClass
        });
    }

    // 检测是否有对应的组件
    hasComponent(name) {
        if (global.JDUICache === undefined || global.JDUICache.components === undefined) {
            return false;
        }

        let hasTargetComponent = false;
        for (let item of global.JDUICache.components) {
            if (item.name === name) {
                hasTargetComponent = true;
                break;
            }
        }

        return hasTargetComponent;
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

    get value() {
        return this._value;
    }

    set value(x) {
        if (this.beforeSetValue(x)) {
            this._value = x;
            this.afterSetValue();
        }
    }

    beforeSetValue(targetValue) {
        return true;
    }

    afterSetValue() {

    }
}