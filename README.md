# JACKFRUIT FULLSTACK
__Learning Vue and MongoDB__

## MAIN ALGORITHM
SECOND ATTEMPT
Engine is driven by conditions and options
We need to begin by knowing:
- The Location of the Players, including terrain
- The options of the players
   - Options are determined on load, but each will have requirements. If the requirements are not met, the action will remain, but will not be available to the player
- The turn order
- Conditions are applied before abilities. The conditions act as a filter, letting players know which options are valid. 
- Ideally, it should be built flexible enough that options can be automatically filtered by conditions, or not. 
- Abilities are just options. Options include:
   - The default options every player has.
   - The abilities provided by the player's class and build
   - The options provided by the player's kit.
- The player should be offered options. For now, we're going to assume they're filtered by conditions
   - 


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
v-for="element in array" = will create an html element for each of the elements in the array. Replace "element" with (value , key) if you're mapping over an object and want access to the keys.
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