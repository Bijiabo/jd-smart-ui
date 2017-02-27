const $ = require('jquery');
const jqueryFinger = require('jquery.finger');
import styleManager from './StyleManager';

class UI {
    constructor(options) {
        this.options = options;
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
    };
    //设置不可用
    disabled() {
        this._enabled = false;
    };
    //是否可用
    get isEnabled() {
        return this._enabled;

    };
    //是否不可用
    get isDisabled() {
        return !this._enabled;
    };
    
    get dom(){
        return $(this.options.hook);
    };
    get getself(){
        return this;
    };
    get value(){
        return true;
    };
    set value(val) {
        
    };
   
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
    instance: {}, // new JDUI.instance.componentName
    _themeColor: '#FF8650',
    style: styleManager,
};
global.JDUI = JDUI;

export default UI;