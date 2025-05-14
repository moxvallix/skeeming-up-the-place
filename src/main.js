import "./style.css";
import Card from "./card";
import { SCHEMES } from "./constants";

const app = document.getElementById("app");

SCHEMES.forEach(scheme => {
  const card = new Card(scheme);
  app.appendChild(card);
})