import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-app")
export class LitApp extends LitElement {
    static override styles = css``;

    @property({ type: String })
    message = "Goodbye, world!";
 
    override render() {
        return html`
            <h1>${this.message}</h1>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-app": LitApp;
    }
}