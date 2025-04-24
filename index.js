
let startButton;

    //function called with the start button
function moveMeme() {
        //Declares picture as the memeImage
    picture = document.getElementById("memeImage");
        //screen height/width minus the picture height/width used later for image location
    spaceW = screen.height - picture.height;

    spaceH = screen.width - picture.width;
        //disables start button after start button clicked
    startButton = document.getElementById("start");
        
    startButton.disabled = true;
        //enables stop button after start button is clicked
    let stopButton = document.getElementById("stop");

    stopButton.disabled = false;
        
    animationLoop();

}
    //function called by stop button click
function stopMeme(){
        //enables start button after stop button clicked
    let startButton = document.getElementById("start");
        
    startButton.disabled = false;
       //disables stop button after stop button clicked
    let stopButton = document.getElementById("stop");
        
    stopButton.disabled = true;  
    
    
  
}


    //function that is used to move and halt image
function animationLoop(){
    
    
        //Halts image moving after stop is clicked
    if (startButton.disabled === false){
       
        return;
    }
   
        //Randon location of image
    picture.style.top = Math.round(Math.random() * spaceW) + "px";
    picture.style.left = Math.round(Math.random() * spaceH) + "px";    
        //Interval of the image moves
    setInterval(animationLoop, 2000);

    
}





