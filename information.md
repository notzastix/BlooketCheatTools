# React <!--- fuck react -->
Blooket is a web-app running on [React](https://reactjs.org/)<br>and it also uses react to store its values for the games, therefore we can debug/reverse engineer it <br>A very good tool for this is [React-Developer-Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), a chrome extension a tool that is used for viewing react values, but we can use it to find where ben stores game data, and edit it.<br>
Now this can be extremly confusing at times, thats why i recommend learing react itself before attempting to cheat with it.

# Firebase
Blooket uses Firebase for backend, therefore we use it to set values, using firebase.setVal, so it is pretty important<br>unless you want to use a variant of forceUpdate();

# API
Blooket's api is quite important, it is used for things like addTokens and autoAnswer<br>Now there is two diffrent ways to interact with the API,<br>1. [jQuery](https://api.jquery.com/)<br>2. [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)<br>I personly prefer jQuery but jQuery has downsides for example, It is a new library to learn and it is hard to stably inject it into blooket, Because blooket doesnt use jquery and blocks unknown requests<br>We can really use it without pasting the entire code to the libray, Thats why for beginners i reccomomend using javascript's vannile [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

# Anitcheat
One thing that has been coming up alot recently is ben adding a Anticheat, now currently he added a detection system for editing React values and adding 500 tokens at once, also he overrided alert(), prompt() and confirm() and added a function to detect if the input had the following bits of text: 'basil', 'incompatible', 'gold', 'script is outdated' in it, if it did it would send a request to Blooket's API to disable your account.
### Bypassing?
We can bypass these patches to a extent there are already bypasses for the alert(), prompt() and confirm() patch [here]() and there is a known fix for the tokens problem, just add 250 tokens twice and it wont detect (maby add some delay aswell, or diffrent increments of tokens), but there is no public bypass for the React problem, so how i would go about it is looking through bens code and attemping to find how he is patching it and then coding a bypass.
