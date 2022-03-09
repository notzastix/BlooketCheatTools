/* credit to zastix for this insane bypass */
window.alert = function(str) {
    bypass = document.body.appendChild(document.createElement("iframe")).contentWindow.alert;
    bypass(str)
}
window.prompt = function(str, s) {
    bypass = document.body.appendChild(document.createElement("iframe")).contentWindow.prompt;
    bypass(str, s)
}
window.confirm = function(str) {
    bypass = document.body.appendChild(document.createElement("iframe")).contentWindow.confirm;
    bypass(str)
}
setInterval(() => {
    if (document.getElementsByTagName("iframe")[1] != null) {
        document.getElementsByTagName("iframe")[1].remove();
    }
}, 50);
