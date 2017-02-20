var $ = require('jquery');

export default class UI {
    constructor(options) {
        this.options = options;
    }
    show() {
        $(this.options.hook).show();
    };
    hide() {
        $(this.options.hook).hide();
    };
    enable() {
        $(this.options.hook).find(".meng").hide();
    };
    disabled() {
        $(this.options.hook).find(".meng").show();
    };
    get isEnabled() {
        
    };
    get isDisabled() {

    };
    get dom(){
        return $(this.options.hook);
    };
    get getself(){
        return this;
    };
}