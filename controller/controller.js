/*
This JS file controls the function of the program.
*/

let underscore=[];
let randIndex;
let theWord;
let guessright = 0;
let btnValue;
let guesslift = 7;
let wrongLetter=[];
let winscore=0;
let nameFlag = 0;
var storeList = [];
//random pull word from an array.
function createWord(){
     randIndex = Math.floor(Math.random()*List.length);
    theWord= List[randIndex].split("");
}

//start the program
function onloading(){
    guesslift = 7;
    document.getElementById("lives").innerHTML="7";
    $("#win").empty();
    createWord();
    underline();
    defAndWord();
    generateBtn();
   
}

//connect word and its defenination
function defAndWord(){

    document.getElementById('wordDef').innerHTML=def[randIndex];
}

//create under line based on the length of the word
function underline(){
   
    underscore = [];
    for(let i=0;i<theWord.length;i++){
        underscore.push('_');
    }
    document.getElementById('wordToGuess').textContent= underscore.join(" ");

    document.getElementById('lives').textContent=guesslift;
}

//generate buttons
function generateBtn(){
    $("#btnContainer").empty();
    var keyBtn = document.getElementById("btnContainer");
    for(let i =65;i<91;i++){
    let letter = String.fromCharCode(i).toUpperCase();
    var node = document.createElement("input");
    node.setAttribute("value",letter);
    node.setAttribute("id",letter);
    node.setAttribute("type","button");
    node.setAttribute("class","btn btn-warning hide");
    node.setAttribute("onclick","getBtnValue(this.value)");
    keyBtn.appendChild(node);
    }
}



/*
It gets every button's value when the button is clicked.
Compare the word and the guess.
Decrease the guess chances if user input not correct.
Show win if the user guess correct.
Show lose if the user guess not correct.
*/
function getBtnValue(x){
   
    btnValue =  document.getElementById(x).value;
    btnValue = btnValue.toLowerCase();
    if(nameFlag==0){
        alert('Enter a name on the left first');
        return;
    }
    if(theWord.indexOf(btnValue)>-1){
        for(let i =0;i< theWord.length;i++){
            if(theWord[i]== btnValue){
                underscore[i]=btnValue;
                document.getElementById('wordToGuess').textContent= underscore.join(" ");
                guessright++;
                winscore++;
                document.getElementById("userScore").innerHTML=winscore;
                document.getElementById(x).disabled="true";
                document.getElementById(x).style.background="blue";
                document.getElementById(x).style.color="white";
                theWord[i] = "0";
            }
        }   
    }else{
                
        guesslift--;
        winscore--;
        document.getElementById("userScore").innerHTML=winscore;
        document.getElementById('lives').textContent=guesslift;
        document.getElementById(x).disabled="true";
        document.getElementById(x).style.background="red";
        document.getElementById(x).style.color="white";
    }
    
    var z = document.getElementsByClassName("hide");

    
    if(guessright==theWord.length){
        saveToDB();
        document.getElementById("win").innerHTML="you Win";
        for(let i =0;i<z.length;i++){
            z[i].style.display='none';
        }
        guessright=0;   
    }

    if(guesslift==0){
        saveToDB();
        document.getElementById("win").innerHTML="you Lost";
        for(let i =0;i<z.length;i++){
            z[i].style.display='none';
        }
        
    }

}

function submitName(){
  
    let str = document.getElementById('userName').value;
 
    
        if(str===""){
            alert('Name must not be empty');
        }else{
            nameFlag = nameFlag+1;
            document.getElementById('userName').readOnly = true;
            
        }

    
}


function saveUserScore(){
    let uScore;
    let uName; 
    uScore = winscore;
    uName = document.getElementById('userName').value;
    storeList.push({"name":uName,"score":uScore});
    console.log(storeList);
    console.log(uName);
    console.log(uScore);
}


//active the program
onload();

