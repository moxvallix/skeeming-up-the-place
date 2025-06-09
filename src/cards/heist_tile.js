import { css, html, LitElement } from "lit";

class HeistTile extends LitElement {
  static properties = {
    name: {type: String},
    type: {type: String},
    keywords: {type: String},
    level: {type: String},
    rules: {type: String}, 
    description: {type: String},
  }

  static styles = css`
    :host {
      aspect-ratio: 1;
      background-color: black;
      width: 1fr;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
      z-index: 1;
    }

    :host::after {
      content: "";
      position: absolute;
      z-index: 1;

      inset: 2px;
      clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);

      background-color: white;
    }

    #content {
      position: relative;
      z-index: 2;

      width: 65%;
      height: 90%;

      box-sizing: border-box;
      padding: 0.25rem;
      padding-top: 2.5rem;

      font-size: small;
    }

    h2 {
      all: unset;
      display: block;
      line-height: 1rem;
      font-weight: bold;
    }

    p {
      font-size: x-small;
    }

    #info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #keywords {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.125rem;
      font-size: x-large;
    }

    #info .type {
      justify-self: flex-start;
      font-size: small;
    }

    #keywords .score {
      margin-right: 0.5rem;
    }

    #keywords .icon {
      margin: 0px;
      aspect-ratio: 1;
      width: 32px;
      height: 32px;
      box-sizing: border-box;
      border: 1px black solid;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: large;
    }
  `;

  constructor(data) {
    super();

    this.name = data[0];
    this.type = data[1];
    this.keywords = data[2];
    this.level = data[3];
    this.rules = data[4];
    this.description = data[5];
  }

  render() {
    return html`
      <div id="content">
        <h2>${this.name}</h2>
        <div>
          <div id="info">
            <strong class="type">${this.type}</strong>
            <div id="keywords">
              <strong class="score">${this.level}</strong>
              ${this._renderKeywords()}
            </div>
          </div>
          <p>${this.rules}</p>
        </div>
        <div>
          <p><em>${this.description}</em></p>
        </div>
      </div>
    `;
  }

  _renderKeywords() {
    const icons = [];

    this.keywords.toString().split(/[ ,]/).forEach(word => {
      if (word === "") { return; }

      const icon = this._renderKeywordIcon(word.toLowerCase());

      const p = document.createElement("p");
      p.textContent = icon || word;
      p.classList.add(icon ? "icon" : "keyword");

      icons.push(p)
    });

    return icons;
  }

    // 💡 💪 🥸 🥷 ⛹️‍♂️
  _renderKeywordIcon(keyword) {
    switch (keyword) {
      case "might": return "💪";
      case "wit": return "💡";
      case "deception": return "🥸";
      case "sneak": return "🥷";
      case "manoeuvre": return "⛹️‍♂️";
    }

    return undefined;
  }
}

customElements.define("cardgen-heist-tile", HeistTile);

export default HeistTile;