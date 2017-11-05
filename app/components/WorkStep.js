var $ = require('jquery');
import UI from './../core/UI';
/**
 * 
 * config
 * {
 *    workstep:[{
 *      labelname:'',
 *      labelvalue:[]
 *    },{
 *      labelname:'',
 *      labelvalue:[]
 *    },{
 *      labelname:'',
 *      labelvalue:[]
 *    }]
 * }
 * 
 * 使用方法
 * 
 * var step = new JDUI.instance.WorkStep({
      hook:'.step-wrap',
      onSteplabelAfter:'中',
      workstep:[
          {
              labelname:'step1',
              labelvalue:['1','2']
          },
          {
              labelname:'step2',
              labelvalue:['3','4']
          },
          {
              labelname:'step3',
              labelvalue:['5','6']
          },
          {
              labelname:'step3',
              labelvalue:['7','8']
          } 
      ]
  });

  //每次更新，只要在update里面传入当前的WorkStatus即可
  step.update('6')
 * 
 * @class WorkStep
 */

class WorkStep extends UI {
    constructor(options) {
        super(options)
        this.config = options
        this.hook = this.config.hook
        this.createDOM()
    }

    createDOM() {
        let html = `<ul>`;
        this.workStep = this.config.workstep
        this.workStep.forEach((ele) => {
            html += `
        <li class="isWait">
          <div>
            <span class="leftIcon iconfont">&#xe673;</span>
            <span class="rightContent">${ele.labelname}</span>
          </div>
        </li>
      `
        });
        html = `<div class="panel"><div class="work-step-content">${html}</div></div>`;
        $(this.hook).append(html)
    }

    updateLabel(index, label) {
        if (index < 0) {
            return
        }
        $(this.hook).find('li').eq(index).find('.rightContent').find('.labelname').html(label)
    }

    update(workstatus) {
        $(this.hook).empty();
        if (!workstatus) {
            return;
        }
        //判断当前workstauts处于哪一阶段
        let step = this.checkStatusStep(workstatus)
        this.render(step)
    }

    checkStatusStep(workstatus) {
        let step = 0;
        this.workStep.forEach((ele, index) => {
            if (ele.labelvalue.includes(workstatus)) {
                step = index
                return
            }
        });
        return step;
    }

    render(step, newlabelname, index) {
        let html = `<ul>`;
        this.workStep.forEach((ele, index) => {
            if (index < step) {
                html += `
                  <li class="hasDone" data-index=${index}>
                    <div>
                      <span class="leftIcon iconfont">&#xe65b;</span>
                      <span class="rightContent"><em class="labelname">${ele.labelname}</em></span>
                    </div>
                  </li>
                `
            } else if (index === step) {
                html += `
                  <li class="onStep" data-index=${index}>
                    <div class="theme-text">
                      <span class="leftIcon iconfont theme-text">&#xe687;</span>
                      <span class="rightContent theme-text"><em class="labelname">${ele.labelname}</em>${this.config.onSteplabelAfter ? this.config.onSteplabelAfter : ''}</span>
                    </div>
                  </li>
                  `
            } else if (index > step) {
                html += `
                  <li class="isWait" data-index=${index}>
                    <div>
                      <span class="leftIcon iconfont">&#xe673;</span>
                      <span class="rightContent"><em class="labelname">${ele.labelname}</em></span>
                    </div>
                  </li>
                  `
            }
        })
        html = `<div class="panel"><div class="work-step-content">${html}</div></div>`;
        $(this.hook).append(html)
    }
}

UI.registerComponent('WorkStep', WorkStep);
export default WorkStep;