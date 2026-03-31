function lerJSON(){
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var objJSON = JSON.parse(this.responseText);
            var txt = "Nome: " + objJSON.nome + "<br>";
            txt += "HP: " + objJSON.hp + "<br>";
            txt += "Especialidade: ";
            objJSON.especialidade.forEach( especialidades => {
                txt += especialidades + "-"
            });
            if(objJSON.Usada){
                txt += "<br>Dono: " + objJSON.dono.nome;
            }
            txt += "<br>Pneus: ";
            objJSON.pneus.forEach(pneu =>{
                txt += "<br> " + pneu.fabricante + "Medida: " + pneu.medida;
            });
        
            document.getElementById("divJSON").innerHTML=txt;
        }   

    }

    req.open("GET", "dados.json", true);
    req.send();
}

function lerProdutos(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var objJSON = JSON.parse(this.responseText);
            var produtos = objJSON.produtos;
            var txt = "";
            if(produtos.lenght == 0){
                txt = "<tr><th>Nenhum produto cadastrado</th></tr>";
            }else{
                txt = "<tr>";
                txt +=  "<th> Código </th>";
                txt +=  "<th> Nome </th>";
                txt +=  "<th> Preço </th>";
                txt += "</tr>";
                produtos.forEach(prod =>{
                    txt += "<tr>";
                    txt += "   <td>" + prod.id + "</td>";
                    txt += "   <td>" + prod.nome + "</td>";
                    txt += "   <td>" + prod.preco + "</td>";
                    txt += "</tr>";
                });
            }
            document.getElementById("tblProdutos").innerHTML = txt;
        }
    }

    req.open("GET", "server.php?buscar", true);
    req.send();
}