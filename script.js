function loadpage() {
    document.getElementById('operations').hidden = true;
    document.getElementById('game').hidden = false;
    let num1 = Math.floor(Math.random() * 10)
    let num2 = Math.floor(Math.random() * 10)
    document.getElementById('num1').innerHTML = num1
    document.getElementById('num2').innerHTML = num2
    switch (travelsign) {
        case 'plus':
            document.getElementById('operator').src = 'https://www.pngkey.com/png/full/19-193347_red-plus-png.png'
            break;
        case 'minus':
            document.getElementById('operator').src = 'https://pngimg.com/d/minus_PNG64.png'
            break;
        case 'times':
            document.getElementById('operator').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Orange_x.svg/600px-Orange_x.svg.png'
            break;
        case 'divide':
            document.getElementById('operator').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Emblem-divide.svg/1024px-Emblem-divide.svg.png'
            break;
    }
}
var travelsign = ''
function saveoperation(sign2){
  travelsign = sign2;
  document.getElementById('go').hidden = false;
  console.log('hi')
}


function checkanswer() {
    let answerbox = document.getElementById('answerbox').value
    let num1 = document.getElementById('num1').innerHTML
    let num2 = document.getElementById('num2').innerHTML
    switch (travelsign) {
        case 'plus':
            var result = 1 * num1 + 1 * num2;
        break;
        case 'minus':
            var result = num1 - num2;
        break;
        case 'times':
            var result = num1 * num2;
        break;
        case 'divide':
            var result = num1 / num2;
        break;
    }
    score = document.getElementById('score-num').innerHTML
    if (result == answerbox) {
        document.getElementById('score-num').innerHTML = score * 1 + 1
    } else {
        document.getElementById('score-num').innerHTML = score * 1 - 1
    }
    playagain()
    document.getElementById('answerbox').value = "";
}
function changeoperation() {
    document.getElementById('operations').hidden = false;
    document.getElementById('game').hidden = true;
}

function playagain() {
    let num1 = Math.floor(Math.random() * 10)
    let num2 = Math.floor(Math.random() * 10)
    document.getElementById('num1').innerHTML = num1
    document.getElementById('num2').innerHTML = num2
}