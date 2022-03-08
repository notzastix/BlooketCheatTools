prompt = function(string, num) {
    let by = document.createElement('div');
    by.innerHTML = `<div id="bypass"><style>details>summary{cursor:pointer;transition:1s;list-style:circle}.hack{border:none;background:#333;padding:7px;margin:5px;width:70%;color:#fff;transition:.1s;border-radius:15px;cursor:text}.btn{border:none;background:#504f4f;padding:7px;margin:5px;width:35%;color:#fff;transition:.1s;border-radius:5px;cursor:pointer}</style><div id="text" style="padding-top:2px;font-size:1.5rem;text-align:center">question here</div><input class="hack" id="input" size="35"> <button id="sub" class="btn">Submit</button><div style="font-size:1rem">bypass by <a href="https://github.com/ZasticBradyn">zastix</a></div></div>`;
    by.style = `width: 350px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; top: 10%; left: 35%;`;
    document.body.appendChild(by);
    let text = document.getElementById('text')
    let input = document.getElementById('input')
    let sub = document.getElementById('sub')

    text.innerText = string;
    window.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            var dataa = document.getElementById('input').value
            var data = Number(dataa)
            var x = document.getElementById('bypass')
            x.remove();
            if (num == true) {
                console.log(data) //or do whatever with the data you u could a use return statement or sum else.
            } else {
                console.log(dataa) //or do whatever with the data you u could a use return statement or sum else.
            }
        }
    }, false)

    sub.addEventListener('click', () => {
        var dataa = document.getElementById('input').value
        var data = Number(dataa)
        var x = document.getElementById('bypass')
        x.remove();
        if (num == true) {
            console.log(data) //or do whatever with the data you u could a use return statement or sum else.
        } else {
            console.log(dataa) //or do whatever with the data you u could a use return statement or sum else.
        }
    })
}
