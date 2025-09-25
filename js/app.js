function comprar(){
    //Obtendo o tipo do ingresso selecionado
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    
    //Obtendo a quantidade a ser comprada
    let qtdComprada = parseInt(document.getElementById("qtd").value);
    
    //Obtendo quantidade disponúvel
    function pegaQuatidade(id){
        return parseInt(document.getElementById(id).textContent);
    }

    let pistaDisponivel = pegaQuatidade("qtd-pista");
    let superiorDisponivel = pegaQuatidade("qtd-superior");
    let inferiorDisponivel = pegaQuatidade("qtd-inferior");

    //Definindo o tipo do ingresso e fazendo o calculo
    if(tipoIngresso == "pista"){
        if(qtdComprada > pistaDisponivel){
            alert("Quantidade indisponível!");
        }else {
            compraIngresso(pistaDisponivel, qtdComprada, "qtd-pista");
        }
    }else if(tipoIngresso == "superior"){
        if(qtdComprada > superiorDisponivel){
            alert("Quantidade indisponível!");
        }else {
            compraIngresso(superiorDisponivel, qtdComprada, "qtd-superior");
        }
    }else {
        if(qtdComprada > inferiorDisponivel){
            alert("Quantidade indisponível!");
        }else {
            compraIngresso(inferiorDisponivel, qtdComprada, "qtd-inferior");
        }
    }

    document.getElementById("qtd").value = "";
}

//função para comprar ingresso
function compraIngresso(ingresso, qtd, id){
    ingresso = ingresso - qtd;
    document.getElementById(id).textContent = ingresso;
}