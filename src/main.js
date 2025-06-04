import "./style.css";
import Card from "./card";
import EventCard from "./event_card";
import { CRAFTED_SCHEMES, SPECIAL_SCHEMES, REWARD_SCHEMES, SCHEMES, EVENTS } from "./constants";

const app = document.getElementById("app");

const ALL = [...CRAFTED_SCHEMES, ...CRAFTED_SCHEMES, ...CRAFTED_SCHEMES,...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES];


EVENTS.forEach(data => {
  // if (data.length < 11) { throw `Error with card: ${data[0]}`; }
  const card = new EventCard(data);
  app.appendChild(card);
})

CRAFTED_SCHEMES.forEach(data => {
  // if (data.length < 11) { throw `Error with card: ${data[0]}`; }
  const card = new Card(data);
  app.appendChild(card);
})