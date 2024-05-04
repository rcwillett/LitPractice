import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { provide } from "@lit/context";
import { CountContext, IncrementCountContext, DecrementCountContext } from "./contexts/CounterContext";

import "./components/LifeCounter/life-counter";

@customElement("lit-app")
export class LitApp extends LitElement {
    @provide({ context: CountContext })
    counter = 20;

    @provide({ context: IncrementCountContext })
    increment = () => {
        this.counter += 1;
    }

    @provide({ context: DecrementCountContext })
    decrement = () => {
        this.counter -= 1;
    }

    override render() {
        return html`
            <h1>Life Counter</h1>
            <life-counter></life-counter>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-app": LitApp;
    }
}