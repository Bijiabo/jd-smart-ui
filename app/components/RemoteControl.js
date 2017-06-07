import UI from "../core/UI";
var $ = require('jquery');

/**
 * 方向盘什么的
 * 
 * @class RemoteControl
 * @extends {UI}
 */
class RemoteControl extends UI {
    constructor(options) {
        const defaultOpt = {
            hook: '',
            title: '方向盘',
            opt: {
                "top": {
                    name: "向上",
                    icon: "",
                    tapTop(content) {

                    }
                },
                "left": {
                    name: "向左",
                    icon: "",
                    tapLeft(content) {

                    }
                },
                "bottom": {
                    name: "向下",
                    icon: "",
                    tapBottom(content) {

                    }
                },
                "right": {
                    name: "向右",
                    icon: "",
                    tapRight(content) {

                    }
                }
            }
        }
        const opts = $.extend(defaultOpt, options);
        super(opts);
    }
    create() {
        this.initParam();
    }

    initParam() {
        let hook = this.options.hook;
    }


    initEventFn() {

    }
}

export default RemoteControl;