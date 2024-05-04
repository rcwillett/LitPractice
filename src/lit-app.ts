import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./components/LifeCounter/life-counter";

@customElement("lit-app")
export class LitApp extends LitElement {
    @property({ type: String })
    message = "Goodbye, world!";
 
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