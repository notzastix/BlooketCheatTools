/* credit to zastix for this bypass */
window.alert = function(str) {
    bypass = document.body.appendChild(document.createElement("iframe")).contentWindow.alert;
    bypass(str)
}
window.prompt = function(str, s) {
    bypass = document.body.appendChild(document.createElement("iframe")).contentWindow.prompt;
    res = bypass(str, s)
    return res;
}
window.confirm = function(str) {
    bypass = document.body.appendChild(document.createElement("iframe")).contentWindow.confirm;
    res = bypass(str)
    return res;
}
setInterval(() => {
    if (document.getElementsByTagName("iframe")[1] != null) {
        document.getElementsByTagName("iframe")[1].remove();
    }
}, 10);
