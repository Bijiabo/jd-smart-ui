import UI from "../core/UI";
var $ = require('jquery');

class TimeScroll extends UI {
    constructor(options) {
        super(options);
    }

    create() {
        let html = ``;
        let _hook = this.getHook();
        html += `<div class="panel">
                    <div class="scrollLine">
                        <div class="topMask"></div>
                        <div class="bottomMask"></div>
                        <ul></ul>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>1时</li>
                            <li>2时</li>
                            <li class="active">3时</li>
                            <li>4时</li>
                            <li>5时</li>
                            <li>1时</li>
                            <li>2时</li>
                            <li>3时</li>
                            <li>4时</li>
                            <li>5时</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>1分</li>
                            <li>2分</li>
                            <li class="active">3分</li>
                            <li>4分</li>
                            <li>5分</li>
                            <li>1分</li>
                            <li>2分</li>
                            <li>3分</li>
                            <li>4分</li>
                            <li>5分</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <ul></ul>
                    </div>
                </div>`;
        $(_hook).append(html);
    }

    getHook() {
        return this.options.hook;
    }
}

UI.registerComponent('TimeScroll', TimeScroll);
export default TimeScroll;