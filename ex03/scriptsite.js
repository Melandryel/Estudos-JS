function verificar(){
    var ano = document.querySelector("input#anonasc")
    var sexom = document.querySelector("input#masc")
    var sexof = document.querySelector("input#femi")
    var texto = document.querySelector("div#text")
    var imagem = document.querySelector("div#img")

    var anor = ano.valueAsNumber;
    var anoat = 2023

    var idd = ((anor-anoat)*-1)

    //window.alert(idd)

    if (idd <= 15 && sexom){
        texto.innerHTML = `<div>Você tem ${idd} anos!</div>`
        imagem

    }

    
    
}