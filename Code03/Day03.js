//#7DaysOfCode

//Lógica JS 3/7: Fluxo de decisão

/*
O if e o else ão capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação,
dependendo da condição fornecida.

Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar
em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.
*/

/*Caso esteja na área de Front-End, se quer aprender React ou aprender Vue.
Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
*/

alert("Vamos jogar!");


const area = prompt("Você quer ser da área de Front-End ou seguir para a área de Back-End? \n Selecione 1 para Front-End e 2 para Back-End.");


//Front-End
if (area == 1){
    const frontend = prompt("Bem-vindx a área de Front-End. \n Quer aprender React ou aprender Vue? \n Selecione 1 para React e 2 para Vue");
    if (frontend == 1){
        alert("Parabéns, você escolheu React");
    }

    if (frontend == 2){
        alert("Parabéns, você escolheu Vue");
    }

}

//Back-End
if (area == 2){
    const backend = prompt("Bem-vindx a área de Back-End. \n Quer aprender C# ou aprender Java? \n Selecione 1 para C# e 2 para Java");
    if (backend == 1){
        alert("Parabéns, você escolheu C#");
    }

    if (backend == 2){
        alert("Parabéns, você escolheu Java");
    }
}

/*
Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer.
Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok
para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”,
continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão.
E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
*/

let pergunta = prompt("Quais as tecnologias nas quais vc gostaria de se especializar ou de conhecer?");
while (pergunta == "sim") {
    let tecnologia = prompt("Quais as tecnologias nas quais vc gostaria de se especializar ou de conhecer?");
    alert(`Você escolheu as seguintes tecnologias ${tecnologia}`);
    pergunta = prompt("Você quer apreender mais alguma tecnologia? Sim ou não?");
}