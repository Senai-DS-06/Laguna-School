
function fechar_container () { document.getElementById( "entrega-tela" ).style.display = 'none'; }

var atividades = [
    {
        "materia": "História",
        "titulo": "Revolução Russa",
        "data": "15/03/2025",
        "horario": "15:35",
        "descricao": "pesquise os seguintes tópicos sobre a revolução industrial: \n - Consequências;\n - Causas;\n - Contexto Histórico;\n - Impactos atuais;"
    },
    {
        "materia": "Língua Portuguesa",
        "titulo": "Pronomes Adversativos",
        "data": "15/03/2025",
        "horario": "15:35",
        "descricao": "pesquise os diferentes tipos de pronomes adversativos e dê exemplos"
    },
    {
        "materia": "Filosofia",
        "titulo": "Ética Contêmporanea",
        "data": "15/03/2025",
        "horario": "15:35",
        "descricao": "Faça uma apresentação relacionada aos diferentes pensadores da ética contemporânea"
    }
]

function abrir_container ( id ) {
    var { titulo, materia, descricao } = atividades[id];

    document.getElementById( "entrega-tela" ).style.display = 'flex';

    document.getElementById( "titulo-container" ).innerText = titulo;
    document.getElementById( "descricao-container" ).innerText = descricao;

    document.getElementById( "header-container" ).style.backgroundColor = materia_cor[materia];
    document.getElementById( "enviar-arquivo" ).style.backgroundColor = materia_cor[materia];
}

let materia_cor = {
    "História": "lightgreen",
    "Matemática": "orange",
    "Geografia": "brown",
    "Língua Portuguesa": "lightblue",
    "Filosofia": "pink",
    "Sociologia": "indianred",
    "Biologia": "indigo",
    "Química": "springgreen",
    "Física": "slateblue"
}

function adicionarAtividade( id ) {
    var { titulo, materia, data, horario } = atividades[id];
    document.getElementById( "caixa-atividades" ).innerHTML += `
        <div class="atividade" style="border-color: ${materia_cor[materia]};" onclick="abrir_container(${id});" >
            <h5>${materia}</h5>
            <h1>${titulo}</h1>
            <h4>${data} - ${horario}</h4>
        </div>
    `;
}

atividades.forEach( ( _, index ) => adicionarAtividade( index ) )
