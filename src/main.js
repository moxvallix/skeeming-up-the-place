import "./style.css";
import Card from "./cards/card";
import EventCard from "./cards/event_card";
import BasicCard from "./cards/basic_card";
import CRAFTED_SCHEMES from "./data/crafted_schemes";
import REWARD_SCHEMES from "./data/reward_schemes";
import SPECIAL_SCHEMES from "./data/special_schemes";
import EVENTS from "./data/events";
import LANDMARKS from "./data/landmarks";
import WIZARDS from "./data/wizards";
import BOMB_PARTS from "./data/bomb_parts";

const app = document.getElementById("app");

LANDMARKS.forEach(data => {
  const card = new BasicCard(data);
  app.appendChild(card);
});

WIZARDS.forEach(data => {
  const card = new BasicCard(data);
  app.appendChild(card);
});

EVENTS.forEach(data => {
  const card = new EventCard(data);
  app.appendChild(card);
});

const crafted = [...CRAFTED_SCHEMES, ...CRAFTED_SCHEMES, ...CRAFTED_SCHEMES];
crafted.forEach(data => {
  const card = new Card(data);
  app.appendChild(card);
});

const rewards = [...REWARD_SCHEMES, ...REWARD_SCHEMES];
rewards.forEach(data => {
  const card = new Card(data);
  app.appendChild(card);
});

const specials = [...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES, ...SPECIAL_SCHEMES];
specials.forEach(data => {
  const card = new Card(data);
  app.appendChild(card);
});

BOMB_PARTS.forEach(data => {
  const card = new BasicCard(data);
  app.appendChild(card);
})