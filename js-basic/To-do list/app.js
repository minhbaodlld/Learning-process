/*
var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}

function createListElement(){
    var li = document.createElement('li'); //create "li" element
    li.appendChild(document.createTextNode(input.value)); //makes text from input field to li text
    ul.appendChild(li); //add li to ul
    input.value = ""; //Reset text input field



    //START STRIKETHROUGH
    //because it's in a function, it only adds it for new items
    function crossOut(){
        li.classList.toggle('done')
    }
    
    li.addEventListener('click', crossOut);
    //END STRIKETHROUGH

    //START ADD DEvarE BUTTON
    var  dlBtn = document.createElement('button');
    dlBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dlBtn);
    dlBtn.addEventListener('click', deleteListItem);
    //END ADD DELETE BUTTON


    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        li.classList.add('delete')
    }
    //END CLASS DELETE
}
//Make sure empty string doesn't create li
function addListAfterClick(){
    if (inputLength() >0){
        createListElement();
    }
}

//looks for pressing enter
function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keycode === 13){   ////this now looks to see if you hit "enter"/"return"
//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
        createListElement();
    }
}


enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
*/

let enterButton = document.getElementById('enter');
let input = document.getElementById('userInput');
let ul = document.querySelector('ul');
let item = document.getElementsByTagName('li');


function inputLength(){
    return input.value.length;
    }

function listLength(){
    return item.length;
    }

function makeListElement(){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";

    //START STRIKETHROUGH
    function crossOut(){
        li.classList.toggle('done')     //add / remove class when not in/ or in a class
    }
    li.addEventListener("click",crossOut)
    
    //START ADD DELETE BUTTON
    let dlbtn = document.createElement('button')
    dlbtn.appendChild(document.createTextNode('X'))     //text node - a special container for text inside HTML using JS
    li.appendChild(dlbtn)
    dlbtn.addEventListener("click", deleteListItem)
    
    //ADD CLASS LIST DELETE
    function deleteListItem(){
        li.classList.add('delete')
    }
}    

//MAKE SURE EMPTY STRING DOESN'T CREATE LI
function addListAfterClick(){
    if (inputLength() > 0){
        makeListElement();
    }
}

//Looks for enter
function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keycode === 13){ //13 keycode for enter
        makeListElement();
    } 
}

enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress',addListAfterKeypress);



