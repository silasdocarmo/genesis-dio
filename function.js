let order = [];
let clickedOrder = [];
let score = 0;

//representação das cores == [0 = blue / 1 = yellow / 2 = green / 3 = red]

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const red = document.querySelector('.red');

//cria uma order aleatória de cores
function randomOrder (){
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//cria uma funcção de acender as cores
function lightColor (element, number){
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 50);
}

//cria uma funcção de ganhou e outra de perdeu
function CheckOrder (){
    for (i in clickedOrder){
        if (clickedOrder[i] !== order[i]) {
            lose();
        }
        break;
    }

    if (clickedOrder.length == order.length) {
        nextLevel();
    }
}

//funcao para interagir com as cores
function click (color){
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        CheckOrder();
    }, 250);
}

//criando a funcao que retorna a cor

function createColorElement (color){
    if (color == 0) {
        return blue;
    } else if (color == 1){
        return yellow;
    } else if (color == 2){
        return green;
    } else if (color == 3){
        return red;
    }
}

//retorna a funcao proximo nivel
function nextLevel (){
    score++;
    randomOrder();
}

//criar a funcao de perda
function lose(){
    alert(`Você errou a sequência, mas marcou ${score} pontos! \n Clique em OK para jogar novamente!`);
    order = [];
    clickedOrder = [];

    playGame();
}

function playGame(){
    alert(`Bem vindo ao GENIUS! \n Iniciando um novo jogo.`)
    score = 0;

    nextLevel();
}

blue.onclick = () => click(0);
yellow.onclick = () => click(1);
green.onclick = () => click(2);
red.onclick = () => click(3);

playGame();