// Reference Element
let maintitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjInput = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let container = document.querySelector("form");
let paragraph = document.getElementById("story_result");

 function mytitle () {
    //WHILE typing in the `#title_input` field, the `#main_title` is updated
    // Need to fix 
    let newTitle = titleInput.value;
    maintitle.innerHTML =  newTitle;
    console.log("test")
    
}
// addEventListener(event name as string, function to run when this event occurs)
titleInput.addEventListener("input", mytitle);



submitButton.onclick = function(event) {
    //Prevent button from reloading 
    event.preventDefault();
    let userInput = titleInput.value;
    let nounPut = nounInput.value;
    let verbPut = verbInput.value;
    let adjectivePut = adjInput.value;
   
    // If the user has any field left blank, send an `alert()` informing the user to “Please fill in all fields”
    if( userInput == ""|| nounPut == "" || verbPut == "" || adjectivePut == ""){
        alert("Please fill in all fields")
    }
    else {
        // Parse the inputs into the following “Ad Lib” text
        paragraph.innerText = "Last night I ate a " + nounPut + ", and today I just had to " + verbPut + ". What a " + adjectivePut + " day!";
        //Hide the `.form_container`
        //Extra Credit - Create a fade out effect
        container.style.transitionDuration = "0.5s";
        container.style.color = "red";
        container.style.opacity = "0";
        // Populate #story_result with the finalized text
        paragraph.innerText = "Last night I ate a " + nounPut + ", and today I just had to " + verbPut + ". What a " + adjectivePut + " day!";
        
    }
  
}

