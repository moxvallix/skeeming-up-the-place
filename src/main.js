import "./style.css";
import Card from "./card";
import { CRAFTED_SCHEMES, SPECIAL_SCHEMES, REWARD_SCHEMES, SCHEMES } from "./constants";

const app = document.getElementById("app");

const ALL = [...CRAFTED_SCHEMES, ...CRAFTED_SCHEMES, ...CRAFTED_SCHEMES,...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES];


CRAFTED_SCHEMES.forEach(scheme => {
  if (scheme.length < 11) { throw `Error with scheme: ${scheme[0]}`; }
  const card = new Card(scheme);
  app.appendChild(card);
})