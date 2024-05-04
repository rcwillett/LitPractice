import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-button")
export class LitButton extends LitElement {

    @property({ type: String })
    color = "primary";

    static override styles? = css`
        button {
            display: inline-block;
            height: 100%;
            width: 100%;
            appearance: none;
            box-shadow: none;
            outline: none;
            color: black;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            filter: brightness(90%);
        }

        :host(.primary) button {
            background-color: var(--color-primary, #000);
            color: white;
        }

        :host(.secondary) button {
            background-color: var(--color-secondary, #000);
            color: white;
        }
    `;

    override render() {
        return html`
            <button><slot></slot></button>
        `;
    }
};

declare global {
    interface HTMLElementTagNameMap {
        "lit-button": LitButton;
    }
}