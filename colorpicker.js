let nums = "0123456789abcdef";   
let e = document.getElementById("hexcode");
let correctcolor;
let chosencolors = [];
let winningplays = 
chooserandomcolors();
choosecorrectcolor();
correctclick();

function choosecorrectcolor() {
    let correctval = ~~(6*Math.random());
    correctcolor = chosencolors[correctval];

    hexcode.textContent = correctcolor;
}


function chooserandomcolors() {     
    for (let i = 0; i < 6; i++) {
        chosencolors[i] = randomcolor();
    }
}

function randomcolor() {
    let result = "#";
    for (let i = 0; i < 6; i++) {
        let val = ~~(16*Math.random());  // random, 0 <= x < 16
        result += nums[val];

        
    }
    return result;

}

function colorchanger() {
this.style.backgroundColor = randomcolor(); 

}

let elements = document.querySelectorAll(".square");


for (let i = 0; i < elements.length; i++) {

elements[i].style.backgroundColor = chosencolors[i]; 
elements[i].setAttribute("data-color", chosencolors[i]);


}

    


function correctclick() {
    let elements = document.querySelectorAll(".square");

    for (let i = 0; i < elements.length; i++) {
        
         elements[i].addEventListener("click",stupid);

    }

}
function stupid() {
            
            if (this.getAttribute("data-color") == correctcolor) {
                hexcode.textContent = "Your right!";    
            }
            
    
        }
    



