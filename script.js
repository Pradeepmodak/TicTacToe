let boxes=document.querySelectorAll('.b');
let reset=document.querySelector('#reset-btn');
let playerchance=document.querySelector('#player-chance');
let result=document.querySelector('#result');

let turnx=true;
const wins=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
const resetGame=()=>{
    turnx=true;
    enableboxes();
    result.style.display="none";
};
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turnx){
        box.innerText='X';
        playerchance.innerText='O';
    }
    else{
        box.innerText='O';
        playerchance.innerText='X';
    }
    turnx=!turnx;
    box.disabled=true;
    checkresult();
})
})

const checkresult=()=>{
        for(let i=0;i<wins.length;i++){
            let pos1=wins[i][0];
            let pos2=wins[i][1];
            let pos3=wins[i][2];
            if(boxes[pos1].innerText!='' && boxes[pos2].innerText!='' && boxes[pos3].innerText!=''){
                if(boxes[pos1].innerText===boxes[pos2].innerText && boxes[pos2].innerText===boxes[pos3].innerText){
                     result.innerHTML=`Congratulations 👏🎉🎊 Player <i>${boxes[pos1].innerText}</i> Won !`;
                     result.style.display="block";
                     disableboxes();
                }
            }
        }
}
const disableboxes=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let fox of boxes){
        fox.disabled=false;
        fox.innerText='';
    }
}
reset.addEventListener("click",resetGame);


