function validar(){
    valor = document.getElementById("txtValor").value
    var divResult = document.getElementById("divResult")
    
    if(isNaN(valor)){
    
        divResult.innerHTML = "O valor digitado não é um número!"
    
    }else if(valor < 1 || valor > 10){
    
        divResult.innerHTML = "O valor digitado não é permitido"
    
    }else{
    
        divResult.innerHTML = "Valor Permitido"
    
    }
}

function limpar(){
    JavaTest.getElementById("divResult").innerHTML = ""   
}

$("#divJquery").css("background", "#f0f")
$("#divJquery").css("color", "#fff")
$("#divJquery").html("Oi pessoal <hr> bom dia")

function mostrarMensagem(){
    alert("Finalizado!")
}

$("#botao").on("click", function(){
    $("#divJquery").toggle(3000, mostrarMensagem)
})
