const qvai = document.getElementById('rock')
const qagaldii = document.getElementById('paper')
const makratelii = document.getElementById('scissors')
let demo1 = document.getElementById('demo1')
let demo2 = document.getElementById('demo2')
let resetbtn  = document.getElementById('memes')
var PlayerMove 



var frea = new Audio()
frea.src = 'frea.mp3'

var moige = new Audio()
moige.src = 'moige.mp3'

var tsaage = new Audio()
tsaage.src = 'tsaagebabu.mp3'



resetbtn.onclick = ()=>{
    window.location = 'unwamemes.html'
}

var myarr = ['qva','qagaldi', 'makrateli']
var random_index = Math.floor(Math.random() * myarr.length)
// var ComputerMove = myarr[random_index]



function win() {
    moige.play()
    alert("kampiuterma airchia: " + ComputerMove + " moige beberr")
    
}
function tie() {
    frea.play()
    alert("kampiuterma airchia: " +ComputerMove + " frea babuu")
    
    
}
function lose() {

    tsaage.play()
    alert("kampiuterma airchia: " +ComputerMove + " waage babuu")
    

}




function Rock() {
    random_index = Math.floor(Math.random() * myarr.length)
    ComputerMove = myarr[random_index]


    PlayerMove = 'qva'
    if (ComputerMove == "qva") {

        tie()
    } else if(ComputerMove == "qagaldi") {

        lose()
    } else if(ComputerMove == "makrateli"){

        win()
    }
}

function Paper() {
    random_index = Math.floor(Math.random() * myarr.length)
    ComputerMove = myarr[random_index]


    PlayerMove = 'qagaldi'

    if (ComputerMove == "qva") {

        win()
    }
    else if(ComputerMove == "qagaldi"){

        tie()
    }
    else if(ComputerMove == "makrateli"){

        lose()
    }
}
function Scissors() {
    random_index = Math.floor(Math.random() * myarr.length)
    ComputerMove = myarr[random_index]


    PlayerMove = 'makrateli'

    if (ComputerMove == "qva") {

        lose()
    }
    else if(ComputerMove = "qagaldi"){

        win()
    }
    else if(ComputerMove = "makrateli"){

        tie()
    }
}

qvai.onclick =() => {
    Rock()
}
qagaldii.onclick =() => {
    Paper()
}
makratelii.onclick =() => {
    Scissors()
}