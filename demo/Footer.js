/**
 * Created by huchunbo on 2017/2/27.
 */
(function () {
    function Footer(options) {
        this.options = options;
        this._unclickMap = [];
        this._visibility = true;
        this._enabled = true;
        this.create();
        this.initEventFn();
        return this.instance;
    }

    Footer.prototype = new JDUI.class();
    Footer.prototype.constructor = Footer;

    Footer.prototype.create = function(options) {
        this.dom.html('<div class="footer">Hello, I am footer component!</div>');
    };

    Footer.prototype.show = function() {
        this.dom.show();
    };

    Footer.prototype.hide = function() {
        this.dom.hide();
    };

    Footer.prototype.initEventFn = function () {
        $(document).on('tap', this.hook, function () {
            console.warn('tap footer!!!');
        });
    };

    Footer.prototype.beforeSetValue = function (targetValue, oldValue) {
        console.warn('run beforeSetValue');
        console.log(targetValue, oldValue);
        return true;
    };

    Footer.prototype.afterSetValue = function () {
        console.warn('run afterSetValue');
        $(this.options.hook).text(this.value);
    };

    JDUI.registerComponent('Footer', Footer);
})();