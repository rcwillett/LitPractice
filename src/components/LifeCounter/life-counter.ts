import { consume } from "@lit/context";
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../LitButton/lit-button";
import { CountContext, IncrementCountContext, DecrementCountContext } from "../../contexts/CounterContext";

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

        h1 {
            align-items: center;
        }
    `;

    @consume({ context: CountContext, subscribe: true })
    count?: number;

    @consume({ context: IncrementCountContext })
    increment?: () => void;

    @consume({ context: DecrementCountContext })
    decrement?: () => void;

    override render() {
        if (this.count != undefined) {
            return html`
                <lit-button class="secondary" @click=${this.decrement}>-</lit-button>
                <h1>${this.count}</h1>
                <lit-button class="primary" @click=${this.increment}>+</lit-button>
            `;
        }

        return html`<div>ERROR</div>`;
    }
};

declare global {
    interface HTMLElementTagNameMap {
        "life-counter": LifeCounter;
    }
}