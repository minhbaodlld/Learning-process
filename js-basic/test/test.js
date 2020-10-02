var heading = document.getElementById('colourValue');
var buttons = document.getElementsByClassName('colourButton');
var answerMessage = document.getElementById('answer');
var bodyColor = document.getElementsByTagName('body');
var answerButton = Math.round(Math.random() * (buttons.length -1))

function setColourValue(){
    return Math.round(Math.random()*255)
}

function setColourButton(buttons, red, green, blue,){
    buttons.setAttribute('style', 
    'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
//background-color: rgb() no space between rgb and parentheses (), color nor colour
}

var red = setColourValue();
var green = setColourValue();
var blue = setColourValue();
setColourValue();
function startGame(){
    answerMessage.innerHTML = '';
    for (var i = 0; i < buttons.length; i++){
        
        var red = setColourValue();
        var green = setColourValue();
        var blue = setColourValue();

        setColourButton(buttons[i], red, green, blue)

        if (i === answerButton){
            heading.innerHTML = `${red}, ${green}, ${blue}`;
        }
        buttons[i].addEventListener('click', function(){
            if (this === buttons[answerButton]){
                answerMessage.innerHTML = 'Correct';
                
            }else {
                answerMessage.innerHTML = 'Wrong answer! Try again'
            }
        })
    
    }
}

startGame();
document.getElementById('resetButton').addEventListener('click',startGame)

console.log(buttons[answerButton])


var a='rgb(' + red + ',' + green +','+ blue +');'  
console.log(a)