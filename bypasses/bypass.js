/* credit to zastix for this insane bypass */
window.alert = function(str) {
    bypass = document.body.appendChild(document.createElement("iframe")).contentWindow.alert;
    document.getElementsByTagName("iframe")[1].remove();
}
window.prompt = function(str, s) {
    bypass = document.body.appendChild(document.createElement("iframe")).contentWindow.prompt;
    res = bypass(str, s)
    return res;
    document.getElementsByTagName("iframe")[1].remove();
}
window.confirm = function(str) {
    bypass = document.body.appendChild(document.createElement("iframe")).contentWindow.confirm;
    res = bypass(str)
    return res;
    document.getElementsByTagName("iframe")[1].remove();
}
