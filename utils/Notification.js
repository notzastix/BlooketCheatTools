function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function move() {
        var elem = document.getElementById("myTimer");
        var width = 1;
        var id = setInterval(frame, 30);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function Noti(text, name) {
        let element = document.createElement('div');
        element.innerHTML = `<div id="notification"><link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap" rel="stylesheet"><style>.rectangle{color: black; height:100px;width:300px;background-color:rgba(128,128,128,.5);bottom:0;right:0;position:absolute}.w3-hover-light-gray:hover,.w3-hover-light-grey:hover,.w3-light-gray,.w3-light-grey{color:#000!important;background-color:#f1f1f1!important}.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#7F7F7F!important}</style><div class="rectangle"><div id="title" style="color:#000;text-align:center;font-size:1.6rem;font-family:'Comic Neue'"></div><div id="message" style="color:#000;font-family:'Comic Neue'"></div><div class="w3-light-grey"><div id="myTimer" class="w3-green" style="height:5px;width:0;bottom:0;right:0;position:absolute"></div></div></div></div>`
        document.body.appendChild(element);
        setInterval((()=> {
            if (document.getElementById("myTimer") != null) {
                if (document.getElementById("myTimer").style.width == '100%') {
                    document.getElementById("notification").remove();
                }
            }
        }), 100);
        document.getElementById("message").innerText = text
        document.getElementById("title").innerText = name
        move();
    }
