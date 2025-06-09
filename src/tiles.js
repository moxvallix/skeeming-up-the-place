import HeistTile from "./cards/heist_tile";
import Tile from "./cards/tile";
import HEISTS from "./data/heists";
import TILES from "./data/tiles";
import "./tiles.css";

const app = document.getElementById("app");

TILES.forEach(data => {
  const count = data[0];
  
  for (let i = 0; i < count; i++) {
    const tile = new Tile(data.slice(1));
    app.appendChild(tile);
  }
})

HEISTS.forEach(data => {
  const tile = new HeistTile(data);
  app.appendChild(tile);
})