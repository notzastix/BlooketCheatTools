# React
Blooket is a web-app running on [React](https://reactjs.org/)<br>and it also uses react to store its values for the games, therefore we can debug/reverse engineer it <br>A very good tool for this is [React-Developer-Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), a chrome extension a tool that is used for viewing react values, but we can use it to find where ben stores game data, and edit it.<br>
Now this can be extremly confusing at times, thats why i recommend learing react itself before attempting to cheat with it.

# Firebase
Blooket uses Firebase for backend, therefore we use it to set values, using firebase.setVal, so it is pretty important<br>unless you want to use a variant of forceUpdate();

# API
Blooket's api is quite important, it is used for things like addTokens and autoAnswer<br>Now there is two diffrent ways to interact with the API,<br>1. [jQuery](https://api.jquery.com/)<br>2. [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)<br>I personly prefer jQuery but jQuery has downsides for example, It is a new library to learn and it is hard to stably inject it into blooket, Because blooket doesnt use jquery and blocks unknown requests<br>We can really use it without pasting the entire code to the libray, Thats why for beginners i reccomomend using javascript's vannile [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
