import { css, html, LitElement } from "lit";

class Card extends LitElement {
  static properties = {
    name: {type: String},
    keywords: {type: String},
    score: {type: String},
    description: {type: String},
    recipe: {type: String},
    rules: {type: String},
  }

  static styles = css`
    :host {
      display: block;
      width: 250px;
      border: 2px solid black;
      padding: 0.5rem;
      aspect-ratio: 0.75;
    }

    h2 {
      all: unset;
      font-size: large;
      font-weight: bold;
    }

    p {
      margin: 0px;
    }

    #main {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    #keywords, #rules, #recipe {
      margin: 0.5rem 0px;
    }

    #description {
      font-style: italic;
    }
  `;

  constructor(data) {
    super();

    this.name = data[0];
    this.keywords = data[1];
    this.score = data[2];
    this.description = data[3];
    this.recipe = data[4];
    this.rules = data[5];
  }

  render() {
    return html`
      <div id="main">
        <div id="data">
          <h2>${this.name}</h2>
          <div id="keywords">
            <p>Keyword: <strong>${this.keywords || "N/A"}</strong></p>
            <p>Score: <strong>${this.score || "N/A"}</strong></p>
          </div>
          ${this._renderRules()}
        </div>
        <div>
          <p id="recipe">Obtain: ${this.recipe}</p>
          ${this._renderDescription()}
        </div>
      </div>
    `;
  }

  _renderRules() {
    if (!this.rules) { return; }

    return html`<p id="rules">Special Rules: ${this.rules}</p>`
  }

  _renderDescription() {
    if (!this.description) { return; }

    return html`
      <hr>
      <p id="description">${this.description}</p>
    `
  }
}

customElements.define("cardgen-card", Card);
export default Card;