
var boxSize;
var gameTime;
function setGameTime(lvalue){
    gameTime=lvalue;
    document.getElementById('timer').innerText = "Game Timer : "+gameTime +" Sec";
   //console.log("GameTime"+gameTime);
}
function setIntegerValue() {
    var levelSelect = document.getElementById('level');
    var selectedValue = levelSelect.value;

    // Set different integer values based on the selected option
    var lvalue;
    switch (selectedValue) {
        case 'level1':
            lvalue = 16;
            break;
        case 'level2':
            lvalue = 25;
            break;
        case 'level3':
            lvalue = 36;
            break;
        case 'level4':
            lvalue = 49;
            break;
        case 'level5':
            lvalue = 64;
            break;
        default:
            lvalue = 16; 
                        // Set a default value or handle invalid cases
    }
    boxSize = lvalue;
    console.log("Inside" + boxSize)
    var gridColRowsize = Math.sqrt(boxSize);

    var myGridElement = document.querySelector('#main-box');
    myGridElement.style.gridTemplateColumns = 'repeat(' + gridColRowsize + ', 1fr)';
    refreshValues();
    setGameTime(lvalue);


}
setIntegerValue();

function generateRandomValues() {
    let values = Array.from({ length: boxSize }, (_, index) => index + 1);
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }
    return values;
}

function refreshValues() {
    const mainBox = document.getElementById('main-box');
    mainBox.innerHTML = '';
    const randomValues = generateRandomValues();
    // console.log("outside: "+boxSize)
    for (let i = 0; i < boxSize; i++) {
        const subBox = document.createElement('div');
        subBox.className = 'sub-box';
        subBox.innerText = randomValues[i];
        mainBox.appendChild(subBox);
        
    }
    
}

let countdown;

function startTimer() {
    console.log("timer" + boxSize)
    let seconds = gameTime;
    console.log("in St"+gameTime);
    countdown = setInterval(function () {
        document.getElementById('timer').innerText = "Game Timer : "+seconds +" Sec";
        seconds--;

        if (seconds <0 ){
            clearInterval(countdown);
            document.getElementById('timer').innerText = 'Game Over';
            document.getElementById('timer').style.backgroundColor = 'red';
        }
        if (seconds >0 ){
            document.getElementById('timer').style.backgroundColor = 'white'; 
        }
       
    }, 1000);
}

// Initial load
refreshValues();


