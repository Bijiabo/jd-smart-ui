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

    Footer.prototype = JDUI.class.prototype;
    Footer.prototype.constructor = JDUI.class;

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

    Footer.prototype.beforeSetValue = function () {
        console.warn('run beforeSetValue');
        return true;
    };

    Footer.prototype.didSetValue = function (value) {
        console.warn('run afterSetValue');
        $(this.options.hook).text(this.value);
    };

    JDUI.registerComponent('Footer', Footer);
})();