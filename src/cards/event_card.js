import { css, html, LitElement, nothing } from "lit";

class EventCard extends LitElement {
  static properties = {
    name: {type: String},
    type: {type: String},
    description: {type: String},
    keywords: {type: String},
    score: {type: String},
    success: {type: String},
    failure: {type: String},
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

    #rules, #recipe {
      margin: 0.5rem 0px;
    }

    #rules-enemy {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      /* border-bottom: 1px solid black; */
    }

    #rules-enemy div {
      flex-grow: 1;
      flex-basis: 0;
    }

    #rules-enemy .success {
      border-bottom: 1px solid black;
    }

    #description {
      font-style: italic;
      font-size: small;
    }

    #info {
      display: flex;
      align-items: flex-end;
      border-top: 1px black solid;
      border-bottom: 1px black solid;
    }

    #image {
      aspect-ratio: 1.33333;
      border-right: 1px solid black;
    }

    #keywords {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.25rem;
    }

    #keywords .icon {
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
      /* filter: grayscale(100%); */
    }

    #keywords .icon {
      font-weight: bold;
    }

    #info .score {
      font-size: large;
      font-weight: bold;
      line-height: 1.25rem;
    }

    #type {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
    }

    #type .name {
      font-size: small;
    }

    #icons {
      display: flex;
      gap: 0.25rem;
      text-align: center;
    }

    .separator {
      border: 1px black solid;
    }
  `;

  // 💡 💪 🥸 🥷 ⛹️‍♂️
  constructor(data) {
    super();

    this.name = data[0];
    this.type = data[1];
    this.description = data[2];
    this.keywords = data[3];
    this.score = data[4];
    this.success = data[5];
    this.failure = data[6];
  }

  render() {
    return html`
      <div id="main">
        <div id="data">
          <div class="p-4">
            <h2>${this.name}</h2>
          </div>
          <div id="info" class="p-4">
            <div id="type">
              <strong class="name">${this.type}</strong>
              <p class="score">Level ${this.score || "0"}</p>
            </div>
            <div id="keywords">
              ${this._renderKeywords()}
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
    const failure = html`
      <div class="p-4">
        <strong>Failure:</strong>
        ${this.failure}
      </div>
    `;

    return html`
      <div id="rules-enemy">
        <div class="success p-4">
          <strong>Success:</strong>
          ${this.success}
        </div>
        ${this.failure ? failure : nothing}
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

  _renderDescription() {
    if (!this.description) { return; }

    return html`
      <div class="p-4">
        <p id="description">${this.description}</p>
      </div>
    `
  }
}

customElements.define("cardgen-event-card", EventCard);
export default EventCard;