/**
 * Created by huchunbo on 2017/2/27.
 */
(function () {
    function Footer(options) {
        this.init(options);

        return this.instance;
    }

    Footer.prototype.init = function(options) {
        this.instance = new JDUI.class(options);
        this.create(options);
    };

    Footer.prototype.create = function(options) {
        this.instance.dom.html('<div class="footer">Hello, I am footer component!</div>');
    };

    Footer.prototype.show = function() {
        this.instance.dom.show();
    };

    Footer.prototype.hide = function() {
        this.instance.dom.hide();
    };

    JDUI.registerComponent('Footer', Footer);
})();