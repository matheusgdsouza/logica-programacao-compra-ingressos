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

}

//função para comprar ingresso
function compraIngresso(ingresso, qtd, id){
    ingresso = ingresso - qtd;
    document.getElementById(id).textContent = ingresso;
}