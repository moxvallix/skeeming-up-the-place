import { css, html, LitElement } from "lit";

class Tile extends LitElement {
  static properties = {
    name: {type: String},
    type: {type: String},
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

      width: 60%;
      height: 90%;

      box-sizing: border-box;
      padding: 0.25rem;
      padding-top: 2.5rem;
    }

    h2 {
      all: unset;
      display: block;
      line-height: 1rem;
      font-size: medium;
      font-weight: bold;
    }

    .type {
      font-size: small;
    }
  `;

  constructor(data) {
    super();

    this.name = data[0];
    this.type = data[1];
    this.description = data[2];
  }

  render() {
    return html`
      <div id="content">
        <h2>${this.name}</h2>
        <div>
          <strong class="type">${this.type}</strong>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("cardgen-tile", Tile);

export default Tile;