let playArea=document.querySelectorAll('.box')
let currentPlayer='X'
let newButton=document.querySelector('.buttonNew')
let infoDiv=document.querySelector('.infodiv')
let gridCheck=["","","","","","","","",""]
const possibleWin=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let win=''
function setPlayer(){
    infoDiv.textContent=`Current Player - ${currentPlayer}`
}
function initialize(){
    currentPlayer='X'
    setPlayer()
    gridCheck=["","","","","","","","",""]
    playArea.forEach((value)=>{
        value.classList.remove('green')
        value.style.pointerEvents='all'
        value.textContent=""
        win=''
    })
}
function checkWin(){
    possibleWin.forEach((possibleWins)=>{
        if(((gridCheck[possibleWins[0]]!='')&&(gridCheck[possibleWins[1]]!='')&&(gridCheck[possibleWin[2]]!=''))&&(gridCheck[possibleWins[0]]===gridCheck[possibleWins[1]])&&(gridCheck[possibleWins[2]]===gridCheck[possibleWins[1]])){
            win=gridCheck[possibleWins[0]]
            playArea[possibleWins[0]].classList.add('green')
            playArea[possibleWins[1]].classList.add('green')
            playArea[possibleWins[2]].classList.add('green')
        }
        else{
            let count=0
            gridCheck.forEach((value)=>{
                if(value!=''){
                    count++;
                }
            })
            if(count==9){
                infoDiv.textContent=`It's a tie!!`
                newButton.classList.add('active')
            }
        }
    })
    if(win!=''){
        infoDiv.textContent=`Player ${win} won!`
        newButton.classList.add('active')
        playArea.forEach((box)=>{
            box.style.pointerEvents='none'
        })
    }
}
setPlayer()
function updateCurrent(index){
    if(currentPlayer=='X'){
        playArea[index].textContent=currentPlayer
        gridCheck[index]=currentPlayer
        playArea[index].style.pointerEvents="none"
        currentPlayer='Y'
        setPlayer()
        checkWin()
    }
    else{
        playArea[index].textContent=currentPlayer
        gridCheck[index]=currentPlayer
        playArea[index].style.pointerEvents="none"
        currentPlayer='X'
        setPlayer()
        checkWin()
    }
}
newButton.addEventListener('click',initialize)
playArea.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        updateCurrent(index)
    })
})