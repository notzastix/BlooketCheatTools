# [getValues.js](https://github.com/notzastix/BlooketCheatTools/blob/main/bypasses/getValues.js)
### A function to get the blooket build and secret
# [requestEncoder.js](https://github.com/notzastix/BlooketCheatTools/blob/main/bypasses/requestEncoder.js)
### A encoder for making requests on blooket.
### Exmaple: 
```js
fetch("https://api.blooket.com/api/users", {
    credentials: "include"
}).then(x => x.json()).then(x => {
    getValues().then(async e => {
        fetch("https://api.blooket.com/api/users/add-rewards", {
            method: "put",
            credentials: "include",
            headers: {
                "content-type": "application/json",
                "X-Blooket-Build": e.blooketBuild // to get blooket build use getValues.js
            },
            body: await encodeValues({
                name: x.name,
                addedTokens: 500,
                addedXp: 300
            }, e.secret) // to get secret use getValues.js
        }).then(() => alert('Added daily rewawrds!')).catch(() => alert('There was an error when adding rewards!'));
    }).catch(() => alert('There was an error encoding requests!'));
}).catch(() => alert('There was an error getting username!'));
```
# [bypass.js](https://github.com/ZasticBradyn/BlooketCheatTools/blob/main/bypasses/bypass.js)
### A bypass to use Prompt(), Alert() and Confirm(), becuase Ben (the owner of blooket) disabled Prompt(), Alert() and Confirm() on the blooket website.
#### How to use: just add the code in at the begginging of your script and then everything will work like normal | [video](https://imgur.com/a/0IhPZyZ)
