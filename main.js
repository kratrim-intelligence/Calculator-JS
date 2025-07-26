"use strict";

var display = document.getElementById("display");
display.innerText = "";

var buttons = document.getElementsByClassName('btn-class');

var lastButton = "etc";

//Operation Buttons
buttons[0].addEventListener('click', function(){
    display.innerText = "";
});

buttons[1].addEventListener('click', function(){
    display.innerText = ""; //sign
});

buttons[2].addEventListener('click', function(){
    display.textContent += "%"; //Review
});

buttons[3].addEventListener('click', function(){
    display.textContent += "/";
});

buttons[7].addEventListener('click', function(){
    display.textContent += "*";
});

buttons[11].addEventListener('click', function(){
    display.textContent += "-";
});

buttons[15].addEventListener('click', function(){
    display.textContent += "+";
});
buttons[18].addEventListener('click', ans);

//Digit Buttons
// if(lastButton == "ans") {
//     display.innerText = "";
// }

    lastButton = "etc";
    buttons[4].addEventListener('click', function(){
        display.textContent += "7";
    });
    buttons[5].addEventListener('click', function(){
        display.textContent += "8";
    });
    buttons[6].addEventListener('click', function(){
        display.textContent += "9";
    });
    buttons[8].addEventListener('click', function(){
        display.textContent += "4";
    });
    buttons[9].addEventListener('click', function(){
        display.textContent += "5";
    });
    buttons[10].addEventListener('click', function(){
        display.textContent += "6";
    });
    buttons[12].addEventListener('click', function(){
        display.textContent += "1";
    });
    buttons[13].addEventListener('click', function(){
        display.textContent += "2";
    });
    buttons[14].addEventListener('click', function(){
        display.textContent += "3";
    });
    buttons[16].addEventListener('click', zero);
    buttons[17].addEventListener('click', function(){
        display.textContent += ".";
    });
    
    function zero(){
        if(display.innerText == ""){
            return;
        }
        else{
            display.textContent += "0";
        }
    }


function ans(){
    lastButton = "ans";
    var result = eval(display.innerText);

    if(result == Infinity){
        display.innerText = "ERROR";
    }
    else{
        display.innerText = result;
    }
}
