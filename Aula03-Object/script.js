var pessoa = {
    nome: "Arthur",
    sobrenome: "Morgan",
    idade: 39,
    altura: 1.86,
    titulos: [1863, 1899, 1900],
    equipes: ["Maior pistoleiro", "High Honor", "Cowboy"],
    conjuge: {
        nome: "Mary Linton",
        idade: 20
    },
    getNomeCompleto : function(){
        return this.nome + " " + this.sobrenome
    }
}

function carregar(){
    var texto = "Nome: " + pessoa.getNomeCompleto() + "<br>"
    texto += "Idade: " + pessoa.idade + "<br>"
    texto += "Cônjuge: " + pessoa.conjuge.nome + "<br>"
    texto += "Titulos: ";
    pessoa.titulos.forEach(ano => {
        texto += ano + " - "
    });
    document.getElementById("divConteudo").innerHTML = texto;
}