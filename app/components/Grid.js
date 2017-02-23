/**
 * Created by huchunbo on 2017/2/20.
 */
import JDUI from './JDUI';
var $ = require("jquery");

class Grid extends JDUI {
    constructor(id, options) {
        super(id, options);
    }

    create() {
        super.create();
    }
}

JDUI.register('grid', Grid);

export default Grid;