const SCHEMES = [
  [
    "Ladder",
    "Manoeuvre",
    "1",
    "climb away little goblin child",
    "2 sticks, 1 string",
    null
  ],
  [
    "Rock Flail",
    "Might",
    "2",
    "I think we've added too much rope",
    "3 sticks, 1 rock, 5 strings",
    null
  ],
  [
    "Flee",
    null,
    null,
    "run away little goblin child",
    "Free",
    "Avoid an encounters fail condition, miss out on success condition"
  ],
  [
    "Charm",
    null,
    null,
    "oolala",
    "Random Reward",
    null
  ],
  [
    "Slap",
    "Might",
    "1",
    null,
    "Free",
    null
  ],
  [
    "Well Placed Slap",
    "Might",
    "3",
    null,
    "Random Reward",
    null
  ],
  [
    "Tunnel Painted On Wall",
    "Deception",
    "2",
    null,
    "Random reward",
    null
  ],
  [
    "Disappearing Handkerchief Trick",
    "Deception",
    "2",
    "\"Where'd it go?\"",
    "3 string, 1 supplies",
    null
  ],
  [
    "Hole Covered With Leaves",
    "Deception",
    "1",
    null,
    "4 sticks",
    null
  ],
  [
    "Fake Jordans",
    "Manoeuvre",
    "2",
    null,
    "4 scrap, 3 string",
    null
  ],
  [
    "Bommy Knocker",
    "Might",
    "4",
    "\"I'll hit you with my Bommy Knocker\" - Mr Bommy Knockers Mans",
    "1 stick, 1 rock, 2 string",
    null
  ],
  [
    "Offensive Gesture",
    "Deception",
    "3",
    ">:3",
    "Random Reward",
    null
  ],
  [
    "A Rock Painted To Look Like A Grenade",
    "Deception",
    "2",
    "Look out!",
    "1 rock, 2 supplies",
    null
  ],
  [
    "Wearing Drag In An Attempt At Seduction",
    "Deception",
    "4",
    null,
    "3 string, 1 scrap, 2 supplies, 2 rocks (for boobage)",
    "If played against an Enemy with Horny in its name, the Enemy is immediately defeated."
  ],
  [
    "Hold In A Sneeze",
    "Sneak",
    "1",
    "You manage not to sneeze, but now you wish you had.",
    "Random reward",
    null
  ],
  [
    "Bite",
    "Might",
    "3",
    "\"Don't ask what happened in 87\"",
    "Random Reward",
    null
  ],
  [
    "Sturdy Axe",
    "Might",
    "2",
    null,
    "1 rock, 1 stick, 1 string",
    "If played whilst on a tile that grants sticks, you gain +1 stick"
  ],
  [
    "University Degree",
    "Wit",
    "3",
    "I finally get to use this.",
    "3 string, 2 supplies",
    null
  ],
  [
    "Doing The Worm",
    "Manoeuvre",
    "2",
    null,
    "Random Reward",
    null
  ],
  [
    "Makeshift Clown Disguise",
    "Sneak",
    "3",
    "I will blend in by sticking out.",
    "1 rock, 2 string, 1 supplies",
    null
  ],
  [
    "The Thingamabob™",
    "Might",
    "5",
    null,
    "3 rocks, 3 string, 3 sticks, 3 supplies, 3 scrap",
    "+1 Sneak +1 Wit +1 Manoeuvre while in Collection"
  ],
  [
    "Rusty Nails",
    "Wit",
    "1",
    null,
    "5 scrap",
    null
  ],
  [
    "Leg-Powered Car",
    "Manoeuvre",
    "3",
    null,
    "3 scrap, 2 string",
    null
  ],
  [
    "Glitter Bomb",
    "Wit",
    "2",
    null,
    "2 supplies, 1 scrap",
    "Enemy becomes disoriented, allowing them to become susceptible to Might"
  ],
  [
    "Frying Pan",
    "Might",
    "2",
    "*loud metal banging noise*",
    "Random Reward",
    null
  ],
  [
    "Bow",
    "Might",
    "1",
    null,
    "1 Stick, 1 String",
    "Can be used on another players encounter. Consumed on use"
  ],
  [
    "Acme-Branded Anvil",
    "Might",
    "3",
    null,
    "3 scrap, 1 string",
    null
  ],
  [
    "Megaphone",
    "Wit",
    "2",
    "\"Call an enemy a slur\"",
    "1 scrap 2 string",
    "draws selected enemies towards you"
  ],
  [
    "Stone Shield",
    null,
    null,
    null,
    "Random Reward",
    "halves loss penalty"
  ],
  [
    "Special Key",
    null,
    null,
    null,
    "2 Scrap",
    "does nothing"
  ],
  [
    "Cat O' Nine Tails Whip",
    "Might",
    "3",
    null,
    "Reward",
    null
  ],
  [
    "Farting So Hard That You Blast Off",
    "Manoeuvre",
    "4",
    null,
    "Random Reward",
    "Blast off"
  ],
  [
    "Avoiding Eye Contact",
    "Sneak",
    "2",
    null,
    "Random Reward",
    null
  ],
  [
    "Diamond Armour, Full Set",
    null,
    null,
    "origin: the stash",
    "3 supplies, 5 scrap",
    "prevents loss encounter/event status. one time use"
  ],
  [
    "Filthy Glasses",
    "Deception",
    "3",
    "Makes anyone around you feel... uncomfortable.",
    "Reward",
    null
  ],
  [
    "Duct Taped Wings",
    "Manoeuvre",
    "2",
    "\"Im basically flying now.\"",
    "3 scrap, 2 string",
    null
  ],
  [
    "Overcomplicated Contraption",
    "Might",
    "5",
    "\"Its held together with hopes and curses\"",
    "5 of any recources",
    "Gain +1 to all future rolls until failed encounter. Then destroy this card."
  ],
  [
    "Decoy Goblin",
    "Deception",
    "3",
    "It's just a pile of rags with googly eyes…",
    "2 scrap, 1 string, 1 supplies",
    "Prevent an encounter from targeting you."
  ],
  [
    "Shiny Distraction",
    "Sneak",
    "2",
    "No one can resist the shiny",
    "3 supplies",
    "Skip one enemy action during an encounter."
  ],
  [
    "Goblin Legal Threat ",
    "Wit",
    "3",
    "My cousin is a lawyer!",
    "Reward",
    null
  ]
];

export {SCHEMES};