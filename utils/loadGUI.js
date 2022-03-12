let element = document.createElement('div');
element.innerHTML = `html here`;
element.style = `css here`;
document.body.appendChild(element);
var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
element.onmousedown = ((e = window.event) => {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = (() => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        });
    )
};
