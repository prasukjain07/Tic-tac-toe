

btn1.onclick= () =>{
    data = "O";
    btn1.disabled = true;
}
btn2.onclick= () =>{
    data = "X";
    btn2.disabled = true;
}
let togl = () => {
    if(data == "O"){
        data = "X";
    }
    else{
        data = "O";
    }
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                return true;
            }
        }
    };
};

let btns = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let display = document.querySelector("#winner");

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]
];
btns.forEach((box) => {
    box.addEventListener("click", ()=>{
        box.innerText = data;
        box.disabled = true;
        togl();
        if(checkWinner() == true){
            btns.forEach((box) => {
                box.disabled = true;
            })
            togl();
            display.innerText = data+" is winner";
        }
    })
 })
 const resetgame= () => {
    btns.forEach((box)=>{
        box.disabled= false;
        box.innerText="";
        display.innerText="O/X";
        data="";
        btn1.disabled=false;
        btn2.disabled= false;

    })
 }
 reset.addEventListener("click", resetgame);

