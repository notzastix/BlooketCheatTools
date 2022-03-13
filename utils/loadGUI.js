let element = document.createElement('div');
element.innerHTML = `html here`;
element.style = `postion: absolute;`; //you need position: absolute; so dont remove it
document.body.appendChild(element);
var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	element.onmousedown = ((e = window.event) => {
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = (() => {
			document.onmouseup = null;
			document.onmousemove = null;
		});
		document.onmousemove = ((e) => {
			e = e || window.event;
			e.preventDefault();
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
			let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
			element.style.top = top + "px";
			element.style.left = left + "px";
		});
	});
