/*
var heading = document.getElementById('colourValue');
var buttons = document.getElementsByClassName('colourButton');
var answerMessage = document.getElementById('answer');


function setButtonColour(buttons, red, green, blue){
    buttons.setAttribute('style',
    'background-color: rgb('+ red +','+ green +','+ blue +');'
    );
}


function makeColourValue(){
    return Math.round(Math.random()*255)
}

function startGame(){
    answerMessage.innerHTML = "";

    var answerButton = Math.round(Math.random() * (buttons.length - 1));

    for (var i = 0; i < buttons.length; i++){
        answerMessage.innerHTML= "";
        var red = makeColourValue();
        var green = makeColourValue();
        var blue = makeColourValue();

        setButtonColour(buttons[i], red, green, blue);
        if (i === answerButton){
            heading.innerHTML = `(${red}, ${green}, ${blue})`;
        }
        buttons[i].addEventListener('click', function(){
            if (this === buttons[answerButton]){
                answerMessage.innerHTML = "Correct!";
            }else{
                answerMessage.innerHTML = "Worng answer! Guess again";
            }
        }
    )};   
}
startGame();
document.getElementById('resetButton').addEventListener('click', startGame)
*/

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

function startGame(){
    answerMessage.innerHTML = '';
    
    for (var i = 0; i < buttons.length; i++){
        var red = setColourValue();
        var green = setColourValue();
        var blue = setColourValue();
                            
        setColourButton(buttons[i], red, green, blue)
        
        if (i === answerButton){
            heading.innerHTML = `${red}, ${green}, ${blue}`;
            color.append = [red, green, blue]    
        }
        console.log(color)
        buttons[i].addEventListener('click', function(){
            if (this === buttons[answerButton]){
                answerMessage.innerHTML = 'Correct';
               
            }else{   
                answerMessage.innerHTML = 'Wrong answer! Try again'
                
            }   
        })
    
    }
}

startGame();
document.getElementById('resetButton').addEventListener('click',startGame)

