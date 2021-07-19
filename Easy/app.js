const status_div = document.querySelector(".status");
const btn_div = document.querySelector(".btn");
const cells_div = document.querySelectorAll(".gameCell");

let winner = null;
let counter = 0;
let gameRunning = true;
let XTurn = true;
let c1 = -1;    /* The index of the 3 cells that will be highlighted in case of a win */
let c2 = -1;
let c3 = -1;
let random_number = -1;
let computer_choice = -1;

for(let i=0;i<9;i++){
    cells_div[i].classList.add("-");
}

const resetBoard = (e) => {
    winner = null;
    counter = 0;
    gameRunning = true;
    XTurn = true;
    c1 = -1;
    c2 = -1;
    c3 = -1;
    random_number = -1;
    computer_choice = -1;
    status_div.innerHTML = `<h3>Your Turn</h3>`;
    for(let i=0;i<9;i++){
        cells_div[i].classList.add("-");
        cells_div[i].classList.remove("X");
        cells_div[i].classList.remove("O");
        cells_div[i].style.backgroundColor="#eb8ada";
    }
}
const giveResult = (e) => {
    const v0 = cells_div[0].classList[2];
    const v1 = cells_div[1].classList[2];
    const v2 = cells_div[2].classList[2];
    const v3 = cells_div[3].classList[2];
    const v4 = cells_div[4].classList[2];
    const v5 = cells_div[5].classList[2];
    const v6 = cells_div[6].classList[2];
    const v7 = cells_div[7].classList[2];
    const v8 = cells_div[8].classList[2];
    if(v0 == "X" && v0==v1 && v1==v2){      winner = "X";   c1 = 0; c2 = 1; c3 = 2; gameRunning = false; }
    else if(v3 == "X" && v3==v4 && v4==v5){     winner = "X";   c1 = 3; c2 = 4; c3 = 5; gameRunning = false; }
    else if(v6 == "X" && v6==v7 && v7==v8){     winner = "X";   c1 = 6; c2 = 7; c3 = 8; gameRunning = false; }
    else if(v0 == "X" && v0==v3 && v3==v6){     winner = "X";   c1 = 0; c2 = 3; c3 = 6; gameRunning = false; }
    else if(v1 == "X" && v1==v4 && v4==v7){     winner = "X";   c1 = 1; c2 = 4; c3 = 7; gameRunning = false; }
    else if(v2 == "X" && v2==v5 && v5==v8){     winner = "X";   c1 = 2; c2 = 5; c3 = 8; gameRunning = false; }
    else if(v0 == "X" && v0==v4 && v4==v8){     winner = "X";   c1 = 0; c2 = 4; c3 = 8; gameRunning = false; }
    else if(v2 == "X" && v2==v4 && v4==v6){     winner = "X";   c1 = 2; c2 = 4; c3 = 6; gameRunning = false; }
    else if(v0 == "O" && v0==v1 && v1==v2){     winner = "O";   c1 = 0; c2 = 1; c3 = 2; gameRunning = false; }
    else if(v3 == "O" && v3==v4 && v4==v5){     winner = "O";   c1 = 3; c2 = 4; c3 = 5; gameRunning = false; }
    else if(v6 == "O" && v6==v7 && v7==v8){     winner = "O";   c1 = 6; c2 = 7; c3 = 8; gameRunning = false; }
    else if(v0 == "O" && v0==v3 && v3==v6){     winner = "O";   c1 = 0; c2 = 3; c3 = 6; gameRunning = false; }
    else if(v1 == "O" && v1==v4 && v4==v7){     winner = "O";   c1 = 1; c2 = 4; c3 = 7; gameRunning = false; }
    else if(v2 == "O" && v2==v5 && v5==v8){     winner = "O";   c1 = 2; c2 = 5; c3 = 8; gameRunning = false; }
    else if(v0 == "O" && v0==v4 && v4==v8){     winner = "O";   c1 = 0; c2 = 4; c3 = 8; gameRunning = false; }
    else if(v2 == "O" && v2==v4 && v4==v6){     winner = "O";   c1 = 2; c2 = 4; c3 = 6; gameRunning = false; }
    if(winner=="X"){
        status_div.innerHTML = `<h3 style="color: red;">You have won</h3>`;
        cells_div[c1].style.backgroundColor = "#ff4885";
        cells_div[c2].style.backgroundColor = "#ff4885";
        cells_div[c3].style.backgroundColor = "#ff4885";
    }
    else if(winner=="O"){
        status_div.innerHTML = `<h3 style="color: blue;">Computer won</h3>`;
        cells_div[c1].style.backgroundColor = "#0fffff";
        cells_div[c2].style.backgroundColor = "#0fffff";
        cells_div[c3].style.backgroundColor = "#0fffff";
    }
    else if(counter==9 && winner==null){
        status_div.innerHTML = `<h3 style="color: white;">Game is drawn</h3>`;
    }
}
const putSymbol = (e) =>{
    if(gameRunning==true){
        if(e.target.classList[2]=="-"){
            if(XTurn==true){
                XTurn=false;
                e.target.classList.remove("-");
                e.target.classList.add("X");
                counter++;
                giveResult();
            }
            if(gameRunning==true && counter<=8){
                XTurn=true;
                while(1){
                    let random_number=Math.floor(Math.random()*9);
                    if(cells_div[random_number].classList[2]=="-"){
                        cells_div[random_number].classList.remove("-");
                        cells_div[random_number].classList.add("O");
                        counter++;
                        status_div.innerHTML = `<h3>Your Turn</h3>`;
                        giveResult();
                        break;
                    }
                }
            }
        }
    }
}

btn_div.addEventListener("click",resetBoard);
for(const i of cells_div){
    i.addEventListener("click",putSymbol);
}