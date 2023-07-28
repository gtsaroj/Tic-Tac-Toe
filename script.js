// function called wheneaver user tap any box



function myFunc_01() {
    var name;
    name = document.getElementById('name');
    let name1 = prompt("what is your name ?")


}


function myfunc() {
    // setting DOM to all boxes
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;

    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    b3 = document.getElementById('b3').value;
    b4 = document.getElementById('b4').value;
    b5 = document.getElementById('b5').value;
    b6 = document.getElementById('b6').value;
    b7 = document.getElementById('b7').value;
    b8 = document.getElementById('b8').value;
    b9 = document.getElementById('b9').value;

    var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
    b1btn = document.getElementById('b1')
    b2btn = document.getElementById('b2')
    b3btn = document.getElementById('b3')
    b4btn = document.getElementById('b4')
    b5btn = document.getElementById('b5')
    b6btn = document.getElementById('b6')
    b7btn = document.getElementById('b7')
    b8btn = document.getElementById('b8')
    b9btn = document.getElementById('b9')

    //  checking if player x won or not and after disabled all fields
    if ((b1 == 'x' || b1 == "X") && (b2 == 'x' || b2 == "X") && (b3 == 'x' || b3 == "X")) {
        document.getElementById('print').innerHTML = "Player X won";
        b4btn.disabled = true
        b5btn.disabled = true
        b6btn.disabled = true
        b7btn.disabled = true
        b8btn.disabled = true
        b9btn.disabled = true

        b1btn.style.color = "red"
        b2btn.style.color = "red"
        b3btn.style.color = "red"
    }
    else if ((b4 == 'x' || b4 == "X") && (b5 == 'x' || b5 == "X") && (b6 == 'x' || b6 == "X")) {
        document.getElementById('print').innerHTML = "Player X won";
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        b7btn.disabled = true
        b8btn.disabled = true
        b9btn.disabled = true

        b4btn.style.color = "red"
        b5btn.style.color = "red"
        b6btn.style.color = "red"
    }
    else if ((b7 == 'x' || b7 == "X") && (b8 == 'x' || b8 == "X") && (b9 == 'x' || b9 == "X")) {
        document.getElementById('print').innerHTML = "Player X won";
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        b4btn.disabled = true
        b5btn.disabled = true
        b6btn.disabled = true

        b7btn.style.color = "red"
        b8btn.style.color = "red"
        b9btn.style.color = "red"
    }
    else if ((b1 == 'x' || b1 == "X") && (b4 == 'x' || b4 == "X") && (b7 == 'x' || b7 == "X")) {
        document.getElementById('print').innerHTML = "Player X won";
        b2btn.disabled = true
        b3btn.disabled = true
        b5btn.disabled = true
        b6btn.disabled = true
        b8btn.disabled = true
        b9btn.disabled = true

        b1btn.style.color = "red"
        b4btn.style.color = "red"
        b7btn.style.color = "red"
    }
    else if ((b2 == 'x' || b2 == "X") && (b5 == 'x' || b5 == "X") && (b8 == 'x' || b8 == "X")) {
        document.getElementById('print').innerHTML = "Player X won";
        b1btn.disabled = true
        b3btn.disabled = true
        b4btn.disabled = true
        b6btn.disabled = true
        b7btn.disabled = true
        b9btn.disabled = true

        b2btn.style.color = "red"
        b5btn.style.color = "red"
        b8btn.style.color = "red"
    }
    else if ((b3 == 'x' || b3 == "X") && (b6 == 'x' || b6 == "X") && (b9 == 'x' || b9 == "X")) {
        document.getElementById('print').innerHTML = "Player X won";
        b1btn.disabled = true
        b2btn.disabled = true
        b4btn.disabled = true
        b5btn.disabled = true
        b7btn.disabled = true
        b8btn.disabled = true

        b3btn.style.color = "red"
        b6btn.style.color = "red"
        b9btn.style.color = "red"
    }
    else if ((b1 == 'x' || b1 == "X") && (b5 == 'x' || b5 == "X") && (b9 == 'x' || b9 == "X")) {
        document.getElementById('print').innerHTML = "Player X won ";
        b2btn.disabled = true
        b3btn.disabled = true
        b4btn.disabled = true
        b6btn.disabled = true
        b7btn.disabled = true
        b8btn.disabled = true

        b1btn.style.color = "red"
        b5btn.style.color = "red"
        b9btn.style.color = "red"
    }

    else if ((b3 == 'x' || b3 == "X") && (b5 == 'x' || b5 == "X") && (b7 == 'x' || b7 == "X")) {
        document.getElementById('print').innerHTML = "Player X won";
        b1btn.disabled = true
        b2btn.disabled = true
        b4btn.disabled = true
        b6btn.disabled = true
        b8btn.disabled = true
        b9btn.disabled = true

        b3btn.style.color = "red"
        b5btn.style.color = "red"
        b7btn.style.color = "red"
    }

    // checking player x already
    // checking player 0 won or not
    else if ((b1 == '0' || b1 == "0") && (b2 == '0' || b2 == "0") && (b3 == '0' || b3 == "0")) {
        document.getElementById('print').innerHTML = "Player 0 won";
        b4btn.disabled = true
        b5btn.disabled = true
        b6btn.disabled = true
        b7btn.disabled = true
        b8btn.disabled = true
        b9btn.disabled = true

        b1btn.style.color = "red"
        b2btn.style.color = "red"
        b3btn.style.color = "red"
    }
    else if ((b4 == '0' || b4 == "0") && (b5 == '0' || b5 == "0") && (b6 == '0' || b6 == "0")) {
        document.getElementById('print').innerHTML = "Player 0 won";
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        b7btn.disabled = true
        b8btn.disabled = true
        b9btn.disabled = true

        b4btn.style.color = "red"
        b5btn.style.color = "red"
        b6btn.style.color = "red"
    }
    else if ((b7 == '0' || b7 == "0") && (b8 == '0' || b8 == "0") && (b9 == '0' || b9 == "0")) {
        document.getElementById('print').innerHTML = "Player 0 won";
        b1btn.disabled = true
        b2btn.disabled = true
        b3btn.disabled = true
        b4btn.disabled = true
        b5btn.disabled = true
        b6btn.disabled = true

        b7btn.style.color = "red"
        b8btn.style.color = "red"
        b9btn.style.color = "red"
    }
    else if ((b1 == '0' || b1 == "0") && (b4 == '0' || b4 == "0") && (b7 == '0' || b7 == "0")) {
        document.getElementById('print').innerHTML = "Player 0 won";
        b2btn.disabled = true
        b3btn.disabled = true
        b5btn.disabled = true
        b6btn.disabled = true
        b8btn.disabled = true
        b9btn.disabled = true

        b1btn.style.color = "red"
        b4btn.style.color = "red"
        b7btn.style.color = "red"
    }
    else if ((b2 == '0' || b2 == "0") && (b5 == '0' || b5 == "0") && (b8 == '0' || b8 == "0")) {
        document.getElementById('print').innerHTML = "Player 0 won";
        b1btn.disabled = true
        b3btn.disabled = true
        b4btn.disabled = true
        b6btn.disabled = true
        b7btn.disabled = true
        b9btn.disabled = true

        b2btn.style.color = "red"
        b5btn.style.color = "red"
        b8btn.style.color = "red"
    }
    else if ((b3 == '0' || b3 == "0") && (b6 == '0' || b6 == "0") && (b9 == '0' || b9 == "0")) {
        document.getElementById('print').innerHTML = "Player 0 won";
        b4btn.disabled = true
        b5btn.disabled = true
        b6btn.disabled = true
        b7btn.disabled = true
        b8btn.disabled = true
        b9btn.disabled = true

        b1btn.style.color = "red"
        b2btn.style.color = "red"
        b3btn.style.color = "red"
    }
    else if ((b1 == '0' || b1 == "0") && (b5 == '0' || b5 == "0") && (b9 == '0' || b9 == "0")) {
        document.getElementById('print').innerHTML = "Player 0 won";
        b2btn.disabled = true
        b3btn.disabled = true
        b4btn.disabled = true
        b6btn.disabled = true
        b7btn.disabled = true
        b8btn.disabled = true

        b1btn.style.color = "red"
        b5btn.style.color = "red"
        b9btn.style.color = "red"
    }

    else if ((b3 == '0' || b3 == "0") && (b5 == '0' || b5 == "0") && (b7 == '0' || b7 == "0")) {
        document.getElementById('print').innerHTML = "Player 0 won";
        b1btn.disabled = true
        b2btn.disabled = true
        b4btn.disabled = true
        b6btn.disabled = true
        b8btn.disabled = true
        b9btn.disabled = true

        b3btn.style.color = "red"
        b5btn.style.color = "red"
        b7btn.style.color = "red"
    }

    // checking for tie
    else if ((b1 == 'x' || b1 == "0") && (b2 == 'x' || b2 == "0") && (b3 == 'x' || b3 == "0") &&
        (b4 == 'x' || b4 == "0") && (b5 == 'x' || b5 == "0") && (b6 == 'x' || b6 == "0") &&
        (b7 == 'x' || b7 == "0") && (b8 == 'x' || b8 == "0") && (b9 == 'x' || b9 == "0")) {
        document.getElementById('print').innerHTML = "Match Tie";

    }
    else {
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn"
        }
        else {
            document.getElementById('print').innerHTML = "Player 0 Turn"
        }
    }

}




// make the reset button
function myFunc_2() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b6 = b7 = b8 = b9 = " ";
}

var flag = 1
// change the turn
function myFunc_3() {
    if (flag == 1) {
        document.getElementById('b1').value = 'x'
        document.getElementById('b1').disabled = true;
        flag = 0
    }
    else {
        document.getElementById('b1').value = '0'
        document.getElementById('b1').disabled = true;
        flag = 1
    }
}
function myFunc_4() {
    if (flag == 1) {
        document.getElementById('b2').value = 'x'
        document.getElementById('b2').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b2').value = '0'
        document.getElementById('b2').disabled = true;
        flag = 1
    }
}
function myFunc_5() {
    if (flag == 1) {
        document.getElementById('b3').value = 'x'
        document.getElementById('b3').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b3').value = '0'
        document.getElementById('b3').disabled = true;
        flag = 1
    }
}
function myFunc_6() {
    if (flag == 1) {
        document.getElementById('b4').value = 'x'
        document.getElementById('b4').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b4').value = '0'
        document.getElementById('b4').disabled = true;
        flag = 1
    }
}
function myFunc_7() {
    if (flag == 1) {
        document.getElementById('b5').value = 'x'
        document.getElementById('b5').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b5').value = '0'
        document.getElementById('b5').disabled = true;
        flag = 1
    }
}
function myFunc_8() {
    if (flag == 1) {
        document.getElementById('b6').value = 'x'
        document.getElementById('b6').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b6').value = '0'
        document.getElementById('b6').disabled = true;
        flag = 1
    }
}
function myFunc_9() {
    if (flag == 1) {
        document.getElementById('b7').value = 'x'
        document.getElementById('b7').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b7').value = '0'
        document.getElementById('b7').disabled = true;
        flag = 1
    }
}
function myFunc_10() {
    if (flag == 1) {
        document.getElementById('b8').value = 'x'
        document.getElementById('b8').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b8').value = '0'
        document.getElementById('b8').disabled = true;
        flag = 1
    }
}
function myFunc_11() {
    if (flag == 1) {
        document.getElementById('b9').value = 'x'
        document.getElementById('b9').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b9').value = '0'
        document.getElementById('b9').disabled = true;
        flag = 1
    }
}