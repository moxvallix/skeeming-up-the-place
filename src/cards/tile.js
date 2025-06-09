import { css, html, LitElement } from "lit";

import imgStick from "../assets/stick.png";
import imgStone from "../assets/stone.png";
import imgString from "../assets/string.png";
import imgScrap from "../assets/scrap.png";
import imgSupplies from "../assets/supplies.png";

class Tile extends LitElement {
  static properties = {
    name: {type: String},
    type: {type: String},
    materials: {type: String},
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

    #materials {
      display: flex;
      justify-content: center;
      gap: 0.125rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
    }

    .icon {
      aspect-ratio: 1;
      width: 48px;
      height: 48px;
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
    this.materials = data[2];
  }

  render() {
    return html`
      <div id="content">
        <h2>${this.name}</h2>
        <div>
          <strong class="type">${this.type}</strong>
          <div id="materials">
            ${this._renderMaterials()}
          </div>
        </div>
      </div>
    `;
  }

  _renderMaterials() {
    const icons = [];

    this.materials.toString().split(/[ ,]/).forEach(word => {
      if (word === "") { return; }

      const icon = this._renderMaterialIcon(word.toLowerCase());

      const img = document.createElement("img");
      img.src = icon;
      img.classList.add("icon");

      icons.push(img)
    });

    return icons;
  }

    // 💡 💪 🥸 🥷 ⛹️‍♂️
  _renderMaterialIcon(material) {
    switch (material) {
      case "stick": return imgStick;
      case "stone": return imgStone;
      case "string": return imgString;
      case "scrap": return imgScrap;
      case "supplies": return imgSupplies;
    }

    return undefined;
  }
}

customElements.define("cardgen-tile", Tile);

export default Tile;