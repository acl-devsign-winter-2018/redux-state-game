Objective
===

Create a state-based game that runs in the browser utilizing react / redux.
* Use reducers to track needed state
* Use action creators to apply game logic
* Bring in data from a 3rd party api
* Test your reducers and actions

Steps Taken
===

Start with a wireframe sketch of the desired page, and box the components necessary ( image, letters, word, replay, app, error, loading). Then draw out a diagram that shows the flow of state / data through components. Start with one component and build its presentation in the browser. We started with the letters. After they successfully rendered in the browser, create actions and reducers along with testing using jest that will capture a letter button click and pass it into the letters guessed array in state. Rinse and repeat in a similar fashion for every following component. Then bring in PokeApi to get a pokemon image and pokedex entry. Create functionality that will show a piece the image for each incorrect guess (up to 6 incorrect guesses). Create functionality that will unrender the letters and word once the game is over, show the replay component, tell the user their pokemon name they were guessing, and allow the player to play again (reset the game).


Reflection / Changes
===

This was a fun exercise in creating a small game that depended on 3rd party api calls. It was great to start with sketches / planning of how the app was going to form. We had an interesting time deciding what components would need to know what data, and what data could be easily derived from what was already in the store.