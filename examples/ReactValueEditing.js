/*
So this first example is the "correct" way to edit react values, their are other way(s).
*/
function reactHandler() {
    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
};
reactHandler().stateNode.setState({
    round: Number(prompt('What round would you like to go to?'));
}).catch(() => alert('An error has occured.'));

/*
So this is the "incorrect" or wrong way to do it, this is actually how i first editing react values.
*/
function reactHandler() {
    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
};
reactHandler().stateNode.state.round = Number(prompt('What round would you like to go to?'))
reactHandler().stateNode.forceUpdate().catch(() => alert('An error has occured.')); // if you didnt do forceUpdate() it wouldnt update the value automaticly.
