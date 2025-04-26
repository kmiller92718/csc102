
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
// function validates that all infor entered is entered in the correct format
function userInfoVerify(){
        
    let firstNameField = document.getElementById("firstName");

    let lastNameField = document.getElementById("lastName");

    let zipCodeField = document.getElementById("zipCode");

    let firstNameValue = firstNameField.value;

    let lastNameValue = lastNameField.value;

    let zipCodeValue = zipCodeField.value;

    let results = document.getElementById("userInfoResults");

    results.innerHTML = "";
//replace(/[^0-9]/g, "") returns only number characters
    let zipNumber = zipCodeValue.replace(/[^0-9]/g, "");

    let fullName = firstNameValue + " " + lastNameValue;

    console.log(fullName);

    console.log(zipCodeValue);

    console.log(zipNumber);
//makes sure that the full name is not greater than 20 characters
    if (fullName.length > 20) {
        results.innerHTML = "Entered to many Characters."

        return;
    }
    
//makes sure that the zip code entered is 5 characters long
    if (zipCodeValue.length !== 5){
        results.innerHTML = "Invalid Zip Code!"
        return;
    }
//checks to make sure only numbers are entered and is 5 characters long
    if (zipNumber.length !== 5){
        results.innerHTML = "Invalid Zip Code!"

        return;
    }

    results.innerHTML = fullName + '<br>' + "You have been verified."

    console.log("Input Validated!");
}
//plays audio when check user info button is clicked
function play(){
    let x = document.getElementById("myAudio");

    x.play();


}





