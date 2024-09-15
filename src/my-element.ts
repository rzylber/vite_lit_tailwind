import { css, LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

import install from '@twind/with-web-components'
import config from '../twind.config'

const withTwind = install(config)

@customElement('my-element')
@withTwind
export class MyElement extends LitElement {

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
    <div class="text-center p-2 my-0 mx-auto max-w-xl">
      <div class="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="image"  alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="image" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="p-2">
        <button @click=${this._onClick} part="button" class="b-button">
          count is ${this.count}
        </button>
      </div>
      <p class="mt-5 font-bold text(primary) uppercase">Testando 123!</p>
    </div>
    `
  }

  /* TODO: não consegui estilizar por tailwind */
  static styles = css`
  :host {
    width: 100%;
  }
  `

  private _onClick() {
    this.count++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
