

//after submit buuton has been clicked the disable is removed from the radio buttons yes and no 
function removeDisabled(){
    yes.removeAttribute("disabled")
    no.removeAttribute("disabled")
    return false;
}

function check(){    
       // assigns the word entered into the variable userWord
     var userWord = document.getElementById("myWord").value;
     
    console.log(userWord);
    let reversed = "";
    if  (userWord.length < 2){
        document.getElementById("nextWord").innerHTML = "You did not enter a valid word."
        //return;
    }else{
    
//rewrites the entered word reversed
    for (let c of userWord){
        reversed = c + reversed;
        console.log(reversed);
        document.getElementById("reverse").innerHTML = reversed;      
    }
//checks is the entered word is the same as the reversed word and displays wheather it is a palindrome or not in <p id = demo>
    if (userWord == reversed){
       document.getElementById("result").innerHTML = "Your Word is a Palindromes!"
    }else{
        document.getElementById("result").innerHTML = "Your Word is not a Palindromes."
    }
//After the submit button has been click the following is displayed
    do {
        document.getElementById("question").innerHTML = "Do you want to enter another word? "
        
    }
    while (onclick);
   
}}
//when no is clicked You Quit is displayed above the input field
function quit(){
   document.getElementById("first").innerHTML = "You Quit!"
}
function tryAgain(){
    document.getElementById("nextWord").innerHTML = "Enter New Word"
}






