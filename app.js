

function pesquisar (){

/**essa linha de comando significa criar uma variavel section que serve para armazenar dados depois sera 
atribuido documento  html onde havera uma busca pelo id do elemnto onde entre paranteses estara o nome do id**/
let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value
if(!campoPesquisa){
    section.innerHTML ="<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
    return
}
//esse codigo foi atribuido ao campoPesquisa quando o usuario digitar não importa se for letra maiusculo ou minuscula ira
//localizar as informações
campoPesquisa = campoPesquisa.toLowerCase()
// inicializa uma string vazia para armazenar os resultados
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";



for (let dado of dados){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if(titulo.includes(campoPesquisa)  || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
resultados += `<div class="item-resultado"> 
<h2>
    <a href="#"target="_blank">${dado.titulo}</a>
</h2>
<p class="descricao-meta">${dado.descricao}
Rebeca Andrade é uma ginasta artística brasileira
 que conquistou o coração dos brasileiros com sua força, determinação e talento.  
</p>
<a href=${dado.link} target="_blank">Mais informações</a>
</div>
`;

} 
}
if (!resultados){
    resultados="<p>Nada foi encontrado</p>"

}
section.innerHTML = resultados

}





