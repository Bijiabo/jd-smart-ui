import UI from '../core/UI';

class Toast extends UI {
    constructor(options) {
        super(options);
    }
    create() {
        this.initParam();
        this.initDom();
    }

    initParam() {
        this._hook = this.options.hook;
        this._type = this.options.type;
        this._teplMap = this.options.teplMap;
    }

    initDom() {
        let html = ``;

        let btnWrap = ``;

        if (this._type === 'one') {
            btnWrap = `<span class = "toast_confirmBtn">知道了</span>`;
        } else if (this._type === 'two') {
            btnWrap = `<span class = "toast_okBtn">确定</span>
                        <span class = "toast_cancelbtn">取消</span>`;
        }

        html += `<div class="confirmHover">
                    <div class="confirmWrap">
                        <div class="cfm_main">
                            <div class="cfm_title">${this._teplMap.title}</div>
                            <div class="cfm_content">${this._teplMap.content}</div>
                        </div>
                        <div class="cfm_btnWrap flex-left">
                            ${btnWrap}
                        </div>
                    </div>
                </div>`;
        $(this._hook).append(html);
        $(this.getBtnDom().dom).css({
            "opacity": '0',
            "display": 'none'
        })
    }

    initEventFn() {
        let hovers = 'list-item-hover';
        $(document).on('click', this.getBtnDom().spanWrap, (e) => {
            e.stopPropagation()
            let $this = $(e.currentTarget);
            if (e.target.classList[0] === 'toast_okBtn') {
                this.options.letBtnFn(e);
            } else if (e.target.classList[0] === 'toast_cancelbtn') {
                this.options.rightBtnFn(e);
            } else {
                this.options.confirmBtn(e);
            }
        });
        $(document).on('touchstart', this.getBtnDom().spanWrap, (e) => {
            let $this = $(e.currentTarget);
            $this.addClass('hovers');

        });
        $(document).on('touchend', this.getBtnDom().spanWrap, (e) => {
            let $this = $(e.currentTarget);
            $this.removeClass('hovers');
        });
    }

    getBtnDom() {
        return {
            spanWrap: this._hook + ` .cfm_btnWrap span`,
            dom: this._hook + ` .confirmHover`
        }
    }

    openConfirm() {
        $(this.getBtnDom().dom).css({
            "opacity": '1',
            "display": 'block'
        });
        document.body.classList.add('bg_hover');
    }

    closeConfirm() {
        $(this.getBtnDom().dom).css({
            "opacity": '0',
            "display": 'none'
        });
        document.body.classList.remove('bg_hover');
    }

    updateUI(config) {
        if (config) {
            this._teplMap = config.teplMap;
            $(this._hook).empty();
            this.initDom();
        }
    }
}
UI.registerComponent('Toast', Toast);
export default Toast