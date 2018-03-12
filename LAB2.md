redux-state-game: Players and Game History
===

Track player(s) and keep a history of game results

* Use React Router to create separate pages as needed
  * Home page for player(s) "registration" info before starting
  * Game page to play the game
  * Game History that shows scores/results
  
* For today, create additional reducers to hold need information about:
  * player(s)
    * list of players
    * current player
  * game results
    * Array of game results from each played game
    
Use localStorage to store game data:
* Use `LOAD_GAME` and `LOAD_PLAYER` actions, but those actions can:
    * make them async via `Promise.resolve`
    * load from window.localStorage
    ```js
    export function loadPlayers() {
      const payload = localStorage.players ? JSON.parse(localStorage.players) : [];
      
      return {
        type: LOAD_PLAYERS,
        payload
      }
    }
* In your `store.js`, add the following:
    ```js
   
    window.onbeforeunload = () => {
      // whatever state you want to store
      const { players, games } = store.getState();
      window.localStorage.players = players;
      window.localStorage.games = games;
    }
    ```
    
# Rubric **10pts**
* Add Routes **3pts**
* Player Registration **3pts**
* Game History/Scoreboard **3pts**
* Idomatic React/Redux **1pts**

