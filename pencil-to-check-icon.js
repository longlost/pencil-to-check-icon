/**
 * `pencil-to-check-icon`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {wait}                 from '@longlost/utils/utils.js';
import htmlString             from './pencil-to-check-icon.html';


class PencilToCheckIcon extends PolymerElement {
  static get is() { return 'pencil-to-check-icon'; }

  static get template() {
    return html([htmlString]);
  }


  async toCheck() {
    this.$.eraser.classList.add('shrink-eraser');
    this.$.pencilTip.classList.add('hide-pencil-tip');
    this.$.pencil.classList.add('pencil-to-check');
    this.$.pencilBody.classList.add('pencil-body-to-right-check');
    await wait(250);
    this.$.pencilBody.classList.add('pencil-body-to-arc');
    this.$.maskArc.classList.add('rotate-mask-arc');
    this.$.checkFlag.classList.add('arc-to-check-flag');
    await wait(100);
    this.$.pencilBody.classList.add('pencil-body-reset-for-check');
    await wait(160);
    this.$.pencilBody.classList.add('pencil-body-to-check');
  }


  async toPencil() {
    this.$.maskArc.classList.remove('rotate-mask-arc');
    this.$.checkFlag.classList.add('check-flag-hide');
    await wait(50);
    this.$.pencil.classList.remove('pencil-to-check');
    this.$.pencilBody.classList.remove('pencil-body-to-right-check');
    this.$.pencilBody.classList.remove('pencil-body-to-arc');
    this.$.pencilBody.classList.remove('pencil-body-reset-for-check');
    this.$.pencilBody.classList.remove('pencil-body-to-check');
    await wait(100);
    this.$.eraser.classList.remove('shrink-eraser');
    this.$.pencilTip.classList.remove('hide-pencil-tip');
    this.$.checkFlag.classList.remove('arc-to-check-flag');
    this.$.checkFlag.classList.remove('check-flag-hide');
  }

}

window.customElements.define(PencilToCheckIcon.is, PencilToCheckIcon);
