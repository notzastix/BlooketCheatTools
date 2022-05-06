
# React
Blooket is a web-app running on [React](https://reactjs.org/)<br>and it also uses react to store its values for the games, therefore we can debug/reverse engineer it <br>A very good tool for this is [React-Developer-Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), a Chrome extension a tool that is used for viewing react values, but we can use it to find where Ben stores game data, and edit it.<br>
Now, this can be extremely confusing at times, that's why i recommend learning React itself before attempting to cheat with it.<br>
the __correct__ way to edit react values is via ``` reactHandler().stateNode.setState() ```, but if you want to edit values manually make sure to call ``` reactHandler().stateNode.forceUpdate() ```, if you want some examples check out the example folder [here](https://github.com/ZasticBradyn/BlooketCheatTools/blob/main/examples/)

# Firebase

Blooket uses Firebase for backend, therefore we use it to set values, using firebase.setVal, so it is pretty important<br>unless you want to use a variant of forceUpdate();

# API

Blooket's API is quite important, it is used for things like addTokens and autoAnswer<br>Now there are two different ways to interact with the API,
1. [jQuery](https://api.jquery.com/)
2. [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)<br>
### My opinion
personally prefer jQuery, but jQuery has downsides, for example It is a new library to learn, and it is hard to stably inject it into blooket, Because blooket doesn't use jQuery and blocks unknown requests<br>We can really use it without pasting the entire code to the library, That's why for  beginners i recommend using JavaScript's vanilla [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

# Anitcheat

One thing that has been coming up a lot recently is Ben adding an Anticheat, now currently he added a detection system for editing React values and adding 500 tokens at once, also he overrode alert(), prompt() and confirm() and added a function to detect if the input had the following bits of text: 'basil', 'incompatible', 'gold', 'script is outdated' in it, if it did, it would send a request to Blooket's API to disable your account. A while back ben also added encryption to his API requests, dont worry, i have a bypass ready [here](https://github.com/ZasticBradyn/BlooketCheatTools/blob/main/bypasses/requestEncoder.js)

# Bypassing?

We can bypass these patches to an extent there are already bypasses for the alert(), prompt() and confirm() patch [here](https://github.com/ZasticBradyn/BlooketCheatTools/blob/main/bypasses/bypass.js) and there is a known fix for the tokens problem, just add 250 tokens twice and it won't detect (maby add some delay aswell, or different increments of tokens), but there is no public bypass for the React problem, so how i would go about it is looking through Ben's code and attempting to find how he is patching it and then coding a bypass.

<p>- zastix</p>
