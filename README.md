# JACKFRUIT FULLSTACK
__Learning Vue and MongoDB__

## MAIN ALGORITHM
- TURN START
   - Parse Terrain
   - Parse Abilities
   - Determine Conditions
   - Reset Player
   - Apply Conditions
- PICK TARGET
   - Parse Target Terrain
   - Apply Target Conditions
   - Parse Target into Conditions
   - Add Conditions
- BUILD ACTION
   - Determine Requirements
      - Action Type (action, reaction, bonus action, flourish, movement, costless)
      - Subtype (melee , magic, ranged, dash, check, ready, dodge, help, secondAttack, bonusAttack, use)
      - Equipment (weapon, focus, components, et cetera)
      - Range
      - Advantage/Disadvantage
   - Determine Legality
      - Check requirements against player conditions
   - Determine Conditions
      - Conditions that will be applied to target
      - Conditions that will be applied to player
   - IF ATTACK:
      - Determine AC / DC
         - base 10
         - Add armor bonuses
         - Add ability modifier(s)
         - Add terrain bonuses
      - Determine Advantage
      - Roll against AC/DC
      - Return success/failure
   - IF SAVING THROW:
      - Determine DC
         - base 8
         - Add proficiency
         - Add spellcasting mod
      - Determine advantage
      - Roll against DC
      - Return success/failure
         
   


## NOTES:
### Vue Objects
A new Vue takes an object as an argument with three properties:
el: "the id of the element",
data: {an object containing the referenced state},
methods: {an object/module containing useful functions}

### Directives
v-bind:title="foo" = keep title up-to-date w/ foo. This is a way of dynamically binding attributes
v-if="foo" = Renders element if the referenced foo is true(thy?)
v-on:event="foo" = in this case, "foo" should be a method that runs in the case of the trigger event
v-for="element in array" = will create an html element for each of the elements in the array.
v-bind:propkey="propvalue" = assigns a prop value to the prop key. NOTE: use for assigning keys, much as in a react map.
v-model="message" = two-way binding of a var. One changes, the other changes.

### Component

First Level: A distinct block of code that can be re-used, often with variables or as a template.

Second Level: A new Vue becomes the class. All following components become extentsions of that (?). 
Create a new component with Vue.component, passing in the name (a string) and it's properties (an object)
Properties include:
- Data
- template
- Props?
- Methods?

Lots of black magic on this one.
BLACK MAGIC:
- A .vue file compiles into an object
- Whatever the hell is happening in main.js


Terms:
 - Roll:
    An object