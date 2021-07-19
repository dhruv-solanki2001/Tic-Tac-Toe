const status_div = document.querySelector(".status");
const btn_div = document.querySelector(".btn");
const cells_div = document.querySelectorAll(".gameCell");

let winner = null;
let counter = 0;
let gameRunning = true;
let XTurn = true;
let connected1 = -1;
let connected2 = -1;
let connected3 = -1;

const resetBoard = (e) => {
    winner = null;
    counter = 0;
    gameRunning = true;
    XTurn = true;
    connected1 = -1;
    connected2 = -1;
    connected3 = -1;
    status_div.innerHTML = `<h3>X's Turn</h3>`;
    cells_div[0].classList.remove("X");     cells_div[0].classList.remove("O");      cells_div[0].style.backgroundColor = "#eb8ada";
    cells_div[1].classList.remove("X");     cells_div[1].classList.remove("O");      cells_div[1].style.backgroundColor = "#eb8ada";
    cells_div[2].classList.remove("X");     cells_div[2].classList.remove("O");      cells_div[2].style.backgroundColor = "#eb8ada";
    cells_div[3].classList.remove("X");     cells_div[3].classList.remove("O");      cells_div[3].style.backgroundColor = "#eb8ada";
    cells_div[4].classList.remove("X");     cells_div[4].classList.remove("O");      cells_div[4].style.backgroundColor = "#eb8ada";
    cells_div[5].classList.remove("X");     cells_div[5].classList.remove("O");      cells_div[5].style.backgroundColor = "#eb8ada";
    cells_div[6].classList.remove("X");     cells_div[6].classList.remove("O");      cells_div[6].style.backgroundColor = "#eb8ada";
    cells_div[7].classList.remove("X");     cells_div[7].classList.remove("O");      cells_div[7].style.backgroundColor = "#eb8ada";
    cells_div[8].classList.remove("X");     cells_div[8].classList.remove("O");      cells_div[8].style.backgroundColor = "#eb8ada";
}
const giveResult = (e) => {
    const value0 = cells_div[0].classList[2];
    const value1 = cells_div[1].classList[2];
    const value2 = cells_div[2].classList[2];
    const value3 = cells_div[3].classList[2];
    const value4 = cells_div[4].classList[2];
    const value5 = cells_div[5].classList[2];
    const value6 = cells_div[6].classList[2];
    const value7 = cells_div[7].classList[2];
    const value8 = cells_div[8].classList[2];
    if(value0 == "X" && value0==value1 && value1==value2){      winner = "X";   connected1 = 0; connected2 = 1; connected3 = 2; gameRunning = false; }
    else if(value3 == "X" && value3==value4 && value4==value5){     winner = "X";   connected1 = 3; connected2 = 4; connected3 = 5; gameRunning = false; }
    else if(value6 == "X" && value6==value7 && value7==value8){     winner = "X";   connected1 = 6; connected2 = 7; connected3 = 8; gameRunning = false; }
    else if(value0 == "X" && value0==value3 && value3==value6){     winner = "X";   connected1 = 0; connected2 = 3; connected3 = 6; gameRunning = false; }
    else if(value1 == "X" && value1==value4 && value4==value7){     winner = "X";   connected1 = 1; connected2 = 4; connected3 = 7; gameRunning = false; }
    else if(value2 == "X" && value2==value5 && value5==value8){     winner = "X";   connected1 = 2; connected2 = 5; connected3 = 8; gameRunning = false; }
    else if(value0 == "X" && value0==value4 && value4==value8){     winner = "X";   connected1 = 0; connected2 = 4; connected3 = 8; gameRunning = false; }
    else if(value2 == "X" && value2==value4 && value4==value6){     winner = "X";   connected1 = 2; connected2 = 4; connected3 = 6; gameRunning = false; }
    else if(value0 == "O" && value0==value1 && value1==value2){     winner = "O";   connected1 = 0; connected2 = 1; connected3 = 2; gameRunning = false; }
    else if(value3 == "O" && value3==value4 && value4==value5){     winner = "O";   connected1 = 3; connected2 = 4; connected3 = 5; gameRunning = false; }
    else if(value6 == "O" && value6==value7 && value7==value8){     winner = "O";   connected1 = 6; connected2 = 7; connected3 = 8; gameRunning = false; }
    else if(value0 == "O" && value0==value3 && value3==value6){     winner = "O";   connected1 = 0; connected2 = 3; connected3 = 6; gameRunning = false; }
    else if(value1 == "O" && value1==value4 && value4==value7){     winner = "O";   connected1 = 1; connected2 = 4; connected3 = 7; gameRunning = false; }
    else if(value2 == "O" && value2==value5 && value5==value8){     winner = "O";   connected1 = 2; connected2 = 5; connected3 = 8; gameRunning = false; }
    else if(value0 == "O" && value0==value4 && value4==value8){     winner = "O";   connected1 = 0; connected2 = 4; connected3 = 8; gameRunning = false; }
    else if(value2 == "O" && value2==value4 && value4==value6){     winner = "O";   connected1 = 2; connected2 = 4; connected3 = 6; gameRunning = false; }
    if(winner=="X"){
        status_div.innerHTML = `<h3 style="color: red;">X has won</h3>`;
        cells_div[connected1].style.backgroundColor = "#ff4885";
        cells_div[connected2].style.backgroundColor = "#ff4885";
        cells_div[connected3].style.backgroundColor = "#ff4885";
    }
    else if(winner=="O"){
        status_div.innerHTML = `<h3 style="color: blue;">O has won</h3>`;
        cells_div[connected1].style.backgroundColor = "#0fffff";
        cells_div[connected2].style.backgroundColor = "#0fffff";
        cells_div[connected3].style.backgroundColor = "#0fffff";
    }
    else if(counter==9 && winner==null){
        status_div.innerHTML = `<h3 style="color: white;">Game is drawn</h3>`;
    }
}
const putSymbol = (e) =>{
    if(gameRunning==true){
        const listOfClasses = e.target.classList;
        let flag=0;
        for(const i of listOfClasses){
            if(i=="X" || i=="O"){
                flag=1;
            }
        }
        if(flag==0){
            if(XTurn==true){
                XTurn=false;
                e.target.classList.add("X");
                counter++;
                status_div.innerHTML = `<h3>O's Turn</h3>`;
                giveResult();
            }
            else{
                XTurn=true;
                e.target.classList.add("O");
                counter++;
                status_div.innerHTML = `<h3>X's Turn</h3>`;
                giveResult();
            }
        }
    }
}


btn_div.addEventListener("click",resetBoard);
for(const i of cells_div){
    i.addEventListener("click",putSymbol);
}