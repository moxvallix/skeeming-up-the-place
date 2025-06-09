import { css, html, LitElement, nothing } from "lit";

class BasicCard extends LitElement {
  static properties = {
    name: {type: String},
    type: {type: String},
    description: {type: String},
    rules: {type: String},
  }

  static styles = css`
    :host {
      display: block;
      width: 266px;
      border: 2px solid black;
      aspect-ratio: 0.75;
    }

    h2 {
      all: unset;
      display: block;
      line-height: 1rem;
      font-size: medium;
      font-weight: bold;
      height: 32px;
    }

    p {
      margin: 0px;
    }

    .p-4 {
      padding: 0.5rem;
    }
    
    .p-2 {
      padding: 0.25rem;
    }

    #main {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    #data {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    #details {
      border-top: 1px solid black;
    }

    #details .type {
      font-size: small;
    }

    #description {
      font-style: italic;
      font-size: small;
    }
  `;

  // 💡 💪 🥸 🥷 ⛹️‍♂️
  constructor(data) {
    super();

    this.name = data[0];
    this.type = data[1];
    this.description = data[2];
    this.rules = data[3];
  }

  render() {
    return html`
      <div id="main">
        <div id="data">
          <div class="p-4">
            <h2>${this.name}</h2>
          </div>
          <div id="details" class="p-4">
            <strong class="type">${this.type}</strong>
            ${this._renderRules()}
          </div>
        </div>
        <div>
          ${this._renderDescription()}
        </div>
      </div>
    `;
  }

  _renderRules() {
    return html`
      <div id="rules">
        ${this.rules}
      </div>
    `;
  }

  _renderDescription() {
    if (!this.description) { return; }

    return html`
      <div class="p-4">
        <p id="description">${this.description}</p>
      </div>
    `
  }
}

customElements.define("cardgen-basic-card", BasicCard);
export default BasicCard;