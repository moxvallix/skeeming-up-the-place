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

    #keywords, #rules, #recipe {
      margin: 0.5rem 0px;
    }

    #description {
      font-style: italic;
      font-size: small;
    }

    #info {
      display: grid;
      grid-template-columns: 3fr 1fr;
      border-top: 1px black solid;
      border-bottom: 1px black solid;
    }

    #image {
      aspect-ratio: 1.33333;
      border-right: 1px solid black;
    }

    #keywords {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      gap: 0.25rem;
    }

    #keywords .icon {
      aspect-ratio: 1;
      width: 100%;
      border: 1px black solid;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: xx-large;
      /* filter: grayscale(100%); */
    }

    #keywords .score {
      font-size: xx-large;
      font-weight: bold;
    }

    .separator {
      border: 1px black solid;
    }
  `;

  // Name, Keyword, Level, Description, Acquisition, Rules, Sticks, Stones, String, Scrap, Supplies
  // 💡 💪 🥸 🥷 ⛹️‍♂️
  constructor(data) {
    super();

    this.name = data[0];
    this.keywords = data[1];
    this.score = data[2];
    this.description = data[3];
    this.acquisition = data[4];
    this.rules = data[5];

    this.materials = [...data.slice(6)];
  }

  render() {
    return html`
      <div id="main">
        <div id="data">
          <div class="p-4">
            <h2>${this.name}</h2>
          </div>
          <div id="info">
            <div id="image" class="p-4">
              Image goes here
            </div>
            <div id="keywords" class="p-2">
              <div class="icon">
                ${this._renderKeywordIcon()}
              </div>
              <p class="score">${this.score || "0"}</p>
            </div>
          </div>
          ${this._renderRules()}
        </div>
        <div>
          ${this._renderDescription()}
        </div>
      </div>
    `;
  }

  _renderRules() {
    if (this.materials.every(m => { return m === "0" })) { return; };

    if (!this.rules) {
      return html`<p id="rules" class="p-2" style="color: #636363">Crafted Item</p>`;
    }

    return html`<p id="rules" class="p-2">${this.rules}</p>`;
  }

    // 💡 💪 🥸 🥷 ⛹️‍♂️
  _renderKeywordIcon() {
    switch (this.keywords) {
      case "Might": return "💪";
      case "Wit": return "💡";
      case "Deception": return "🥸";
      case "Sneak": return "🥷";
      case "Manoeuvre": return "⛹️‍♂️";
    }
  }

  _renderRecipe() {
    if (this.acquisition === "Crafted") {
      const names = ["Sticks", "Stones", "String", "Scrap", "Supplies"];
      
      let recipe = [];
      this.materials.forEach((material, idx) => {
        if (material < 1) { return; }

        recipe.push(`${material} ${names[idx]}`);
      });

      return html`<p id="recipe">Craft: ${recipe.join(", ")}</p>`;
    } else {
      return html`<p id="recipe">Obtain: ${this.acquisition}</p>`;
    }
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

customElements.define("cardgen-card", Card);
export default Card;