import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../LitButton/lit-button";

@customElement("life-counter")
export class LifeCounter extends LitElement {
    static override styles? = css`
        :host {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: stretch;
            font-family: sans-serif;
            min-height: 200px;
        }
    `;

    @property({ type: Number })
    life = 20;

    decrement() {
        this.life--;
    }

    increment() {
        this.life++;
    }

    override render() {
        return html`
            <lit-button class="secondary" @click=${this.decrement}>-</lit-button>
            <h1 class="life-total-text">${this.life}</h1>
            <lit-button class="primary" @click=${this.increment}>+</lit-button>
        `;
    }
};

declare global {
    interface HTMLElementTagNameMap {
        "life-counter": LifeCounter;
    }
}