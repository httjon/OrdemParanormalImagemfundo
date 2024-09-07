function pesquisar() {
    // console.log(dados);



let section=document.getElementById("resultados-pesquisa")

let campoPesquisa=document.getElementById("campo-pesquisa").value


if (campoPesquisa ==""){
    section.innerHTML="<p>Nada Encontrado</p>"
    return
}

let resultados = "";

campoPesquisa = campoPesquisa.toLowerCase();

let titulo="";
let descricao="";
let tags ="";




// para cada dado dentro da lista de dados 
for(let dado of dados)
    {
        titulo =dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags =dado.tags.toLowerCase()

    if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)){

            resultados += `
            <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}.</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
            `
    
    
        }

    
        
        
    }
    if(!resultados){
        section.innerHTML="<p>Nada Encontrado, digite o nome ou algo relacionado ao personagem</p>"
        return
    }

section.innerHTML= resultados




}


