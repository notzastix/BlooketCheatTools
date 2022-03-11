/* credit to zastix for this bypass */
window.alert = document.body.appendChild(document.createElement("iframe")).contentWindow.alert;
window.prompt = document.body.appendChild(document.createElement("iframe")).contentWindow.prompt;
window.confirm = document.body.appendChild(document.createElement("iframe")).contentWindow.confirm;
setInterval(() => {
    if (document.getElementsByTagName("iframe")[1] != null) {
        document.getElementsByTagName("iframe")[1].remove();
    }
}, 10);
