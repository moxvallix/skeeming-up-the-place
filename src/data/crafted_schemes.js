// Name, Keyword, Level, Description, Acquisition, Rules, Sticks, Stones, String, Scrap, Supplies

const CRAFTED_SCHEMES = [
  // Might
  ["Bow", "Might", "1", null, "Crafted", null, 1, 0, 1, 0, 0],
  ["Rock Flail", "Might", "2", "I think we've added too much rope", "Crafted", null, 1, 1, 1, 0, 0],
  ["Sturdy Axe", "Might", "3", null, "Crafted", null, 1, 2, 2, 0, 0],
  ["Bommy Knocker", "Might", "4", '"I\'ll hit you with my Bommy Knocker" - Mr Bommy Knockers Mans', "Crafted", null, 1, 3, 3, 0, 0],
  ["ACME-Branded Anvil", "Might", "5", null, "Crafted", null, 0, 0, 0, 4, 0],
  ["Overcomplicated Contraption", "Might", "6", "Its held together with hopes and curses", "Crafted", "Encounters you face have -1 score until you fail an encounter, at which point, destroy this scheme.", 1, 0, 1, 0, 0],

  // Manoeuvre
  ["Ladder", "Manoeuvre", "1", "Climb away little goblin child!", "Crafted", null, 2, 0, 1, 0, 0],
  ["Pole Vault", "Manoeuvre", "2", null, "Crafted", null, 2, 0, 0, 1, 0],
  ["Fake Jordans", "Manoeuvre", "3", null, "Crafted", null, 3, 0, 2, 0, 0],
  ["Duct Tape Wings", "Manoeuvre", "4", null, "Crafted", null, 0, 0, 2, 2, 0],
  ["Leg Powered Car", "Manoeuvre", "5", null, "Crafted", null, 0, 0, 2, 3, 0],
  ["Elytra with Rockets", "Manoeuvre", "6", null, "Crafted", "While in Collection, you can move up to two more spaces.", 0, 0, 6, 3, 3],

  // Sneak
  ["Cardboard Box", "Sneak", "1", null, "Crafted", null, 3, 0, 0, 0, 0],
  ["Cape and Cowl", "Sneak", "2", null, "Crafted", null, 1, 0, 2, 0, 0],
  ["Makeshift Clown Disguise", "Sneak", "3", "I will blend in by sticking out.", "Crafted", null, 0, 1, 2, 0, 1],
  ["Fluffy Bunny Slippers", "Sneak", "4", null, "Crafted", null, 0, 0, 4, 0, 0],
  ["Shiny Distraction", "Sneak", "5", "No one can resist the shiny.", "Crafted", null, 0, 0, 0, 2, 1],
  ["Having an Eyepatch and Robot Arm", "Sneak", "6", null, "Crafted", "While in your Collection, the Cardboard Box scheme is not discarded after use and its score is increased to 4.", 0, 0, 3, 7, 2],

  // Wit
  ["Rusty Nails", "Wit", "1", null, "Crafted", null, 0, 0, 0, 1, 0],
  ["Glitter Bomb", "Wit", "2", null, "Crafted", null, 0, 0, 1, 1, 0],
  ["University Degree", "Wit", "3", null, "Crafted", null, 0, 0, 1, 0, 1],
  ["Smart Juice", "Wit", "4", null, "Crafted", null, 3, 0, 0, 0, 1],
  ["Printed Copy of Wikipedia", "Wit", "5", null, "Crafted", null, 0, 0, 2, 0, 2],
  ["The Thingamabob™", "Wit", "6", null, "Crafted", "+1 to Sneak, Wit and Manoeuvre while in Collection.", 3, 3, 3, 3, 3],

  // Deception
  ["Hole Covered With Leaves", "Deception", "1", null, "Crafted", null, 3, 0, 0, 0, 0],
  ["Disappearing Handkerchief Trick", "Deception", "2", "Where'd it go?", "Crafted", null, 0, 0, 3, 0, 0],
  ["Rock Painted to Look Like a Grenade", "Deception", "3", "Look out!", "Crafted", null, 0, 1, 0, 0, 1],
  ["Dressing in Drag in an Attempt at Seduction", "Deception", "4", null, "Crafted", null, 0, 2, 1, 0, 1],
  ["Decoy Goblin", "Deception", "5", "It's just a pile of rags with googly eyes…", "Crafted", null, 0, 0, 1, 2, 1],
  ["Cap, Sunglasses and a Coat", "Deception", "6", null, "Crafted", "While in Collection, any encounter requiring deception can be avoided as if using Flee.", 2, 0, 7, 2, 3],
]

export default CRAFTED_SCHEMES;