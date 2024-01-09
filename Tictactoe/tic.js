
let boxes = document.querySelectorAll(".box");//always use  . befor the class decleard in js
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X, playerO


// // example of array
// // 1d array
// let arr = ["apple","banana","litchi"];
// //2d array
// let arr2 = [["apple","litchi"],["potato","mushroom"],["pants","shirts"]];
// //ex... arr2=[1][1] = "mushroom"

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [3,4,5],
    [2,5,8],
    [6,7,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = ()=> {
    let turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
 
    if(turnO){
        box.innerText="O";
        turnO = false;
    }
    else{
        box.innerText="X";
        turnO = true;
    }
    box.disabled = true;
    cheakWinner();
});
});

const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner = (winner) =>{
    msg.innerText = `congratutions, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const cheakWinner = () =>{
    for(let pattern of winPatterns){
        
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            
        if(pos1val !=""&&pos2val !="" &&pos3val !=""){

            if(pos1val === pos2val && pos2val === pos3val){
               
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.newGameBtn.addEventListener("click",resetGame);
