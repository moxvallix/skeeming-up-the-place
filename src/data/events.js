const EVENTS = [
  [
    "Big Bird",
    "Encounter",
    "A large bird is circling above, it spots you, a tiny green thing, and believes you to be food",
    "Might, Manoeuvre, Deception",
    "2",
    "1 Random Scheme",
    "Move 2 spaces in the direction you came from to arrive on this tile",
  ],
  [
    "Goblin Tied To A Tree",
    "NPC",
    "oh no, one of your brethren has been tied to this evil, evil tree. you must do something",
    "Might, Manoeuvre",
    "2",
    "1 Random Scheme",
    null,
  ],
  [
    "Sea Cucumber But It's On Land And Its Vicious",
    "Encounter",
    "Read the title",
    "Might, Deception, Sneak",
    "1",
    "1 Random Scheme",
    "You somehow failed to defeat a sea cucumber that is on land. You are ashamed, and skip your next turn due to depression.",
  ],
  [
    "Quail Jockey",
    "Encounter",
    "QUAIL JOCKEY! *throws popcorn*",
    "Might, Wit, Deception",
    "2",
    "2 Scrap",
    "Discard a random card from your collection"
  ],
  [
    "A Horny Ghost",
    "Encounter",
    "OOOOOooooohhhhh yeaaaahhhhhhh.",
    "Wit, Sneak",
    "4",
    "Cat o' Nine Tails",
    "You are ectoplasmed on, and are now very sticky. You cannot craft this turn.",
  ],
  [
    "A Gaggle Of Hired Goons",
    "Encounter",
    "Uhh boss, do I take this guy out?",
    "Wit, Deception, Sneak",
    "7",
    "2 Random Scheme",
    "The goons yeet you in to the atmosphere. Pick up your player token, and re-throw yourself on to the board. Discard a random card.",
  ],
  [
    "Strange Cult Like White Women",
    "NPC",
    "They are holding you hostage with their strange thoughts on the power of water, they dont seem to pose a threat though. maybe help them fulfil their goal",
    "Wit, Deception",
    "6",
    "You have helped the women fulfil their goal, oh, they seem to be blasting off, bye bye. Gain 2 Supplies and 1 Random Scheme.",
    null,
  ],
  [
    "Crazed Man With A Butter Knife",
    "Encounter",
    "Look, its still a knife, maybe dont kill him, you might feel bad",
    "Deception, Manoeuvre",
    "2",
    "You gain 1 Supplies",
    "He also has butter. he butters you up from head to toe, you can no longer move on your next turn",
  ],
  [
    "The Town Drunkard",
    "Encounter",
    "*hic* whha? OI! WHADDYA SAY about *hic* my MOTHA?",
    "Wit, Deception, Sneak, Manoeuvre, Might",
    "3",
    "You gain 3 Stone",
    "He hands you a beer, and you both get plastered. You lost 2 material of your choice (i swear they was just here)",
  ],
  [
    "A Witch Who Recently Stubbed Her Big Toe",
    "Encounter",
    '*deep breath* "F**k" *deep breath* "S**t"',
    "Manoeuvre, Sneak",
    "3",
    "1 Random Scheme",
    "She tries to cast a spell on you, but she misses due to the pain. You flee, but drop a scheme. Discard a scheme card at random.",
  ],
  [
    "Azathoth But Horny",
    "Encounter",
    "the trumpet players are giving him a wet dream",
    "Wit, Deception, Sneak, Manoeuvre, Might",
    "999",
    "+5 of each Material",
    "If you have the bomb on hand, it teleports to the furthest point on the map",
  ],
  [
    "Kevin The Wimpy Orc",
    "Encounter",
    "Do you play Gubshin Fimpact? ",
    "Wit, Deception, Might",
    "4",
    "Kevin runs back to his mummy (he's 35), dropping some materials. Gain 2 Supplies (its his wallet and house keys).",
    "Kevin lectures you about some random gacha game. You take psychic damage, and discard 2 materials.",
  ],
  [
    "Goblin Tax Collector",
    "Encounter",
    "\"Where's your permit, citizen?\" (he's wearing a saucepan on his head)",
    "Deception, Wit",
    "2",
    "He lets you go if you give him a shiny scrap.",
    'Lose 2 scrap ("back taxes")',
  ],
  [
    "Vengeful Bread",
    "Encounter",
    "A loaf of bread that's just TOO hard. Its yearns for revenge",
    "Might, Wit",
    "2",
    "Smash it and gain 1 supplies",
    "Breaks one of your crafted items from being too hard",
  ],
  [
    "The Worlds Saddest Jester",
    "Encounter",
    "Hes juggling rocks... Badly. Do you mock him, or help him?",
    "Wit, Deception, Might",
    "4",
    "He teaches you a trick. Gain 1 random scheme ",
    "His sadness is contagious. Skip your next turn sulking",
  ],
  [
    "A Cowboy",
    "Encounter",
    "Hand readied above his revolver... is that on theme?",
    "Might, Manoeuvre",
    "3",
    '"Darn..." gain 1 supply and 1 scrap',
    "He shoots you, but its fine other than the headache and you dropping all your scrap, discard all your scrap",
  ],
  [
    "Guy Dressed As A Dragon",
    "Encounter",
    "Is it scary? or is it hot?  or both. Either way, he might kill you",
    "Might, Wit, Manoeuvre",
    "3",
    "Gain 1 random scheme",
    "What happened is between you and them, your string and sticks have burned up though.  Discard a String or Sticks.",
  ],
  [
    "Lady Dressed As A Dragon",
    "Encounter",
    "Is it Hot? or is it scary? or both. Either way, she might kill you",
    "Might, Wit, Manoeuvre",
    "3",
    "Gain 1 random scheme",
    "What happened is between you and them, your string and sticks have burned up though. Discard a String or Sticks.",
  ],
  [
    "Actual Real Dragon",
    "Encounter",
    "For real, its an actual god damned dragon",
    "Might",
    "1",
    "gain 4 sticks",
    "I think you are being eaten and burned alive. Totally eviscerated, discard 2 Sticks.",
  ],
];

export default EVENTS;