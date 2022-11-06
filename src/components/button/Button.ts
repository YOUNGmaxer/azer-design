import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('a-button')
export class AzerButton extends LitElement {
  static style = css`
    .a-button {
      background-color: green;
    }
  `

  @property()
  prefix = 'pre';

  render() {
    return html`
      <div class="a-button">
        ${this.prefix}<slot></slot>
      </div>
    `
  }
}
