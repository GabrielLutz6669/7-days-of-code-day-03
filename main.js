const frontback = prompt("Se você deseja seguir na area de Front-End digite 1, se Back-End digite 2")
if (frontback === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?")
}
else if (frontback === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?")
}
else{
    alert("Você não inseriu uma área válida")
}

const especializa = prompt("Se você deseja continuar se especializando digite 1, se deseja se tornar um desenvolvedor Fullstack digite 2")
if(especializa == 1){
    alert("Especializa")
}
else if(especializa == 2){
    alert("Fullstack")
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}


