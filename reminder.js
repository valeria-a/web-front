function btnClickHandler() {
    console.log("button clicked")
}

function btn2ClickHandler() {
    console.log("button 2 clicked")
}

function btn2ClickHandler2() {
    console.log("hello")
}


function loadCompeteHandler() {
    document.getElementById('btn2').addEventListener("click", btn2ClickHandler)
    document.getElementById('btn2').addEventListener("click", btn2ClickHandler2)
    document.getElementById('btn1').setAttribute("disabled", true)

    document.getElementById('btn2').onclick = () => {
        console.log("bla")
        date = new Date()
        document.getElementById('my-p').innerHTML = date.toLocaleDateString('default')
        // document.getElementById('my-p').innerHTML = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
        // document.getElementById('my-p').innerHTML = date.getDate() + "-" + date.getMonth()+1 + '-' + date.getFullYear()
    }
}

window.addEventListener("load", loadCompeteHandler)