
function fechar_container () { document.getElementById( "container" ).style.display = 'none'; }

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

var materia_cor = {
    "Artes": "Indigo",
    "História": "lightgreen",
    "Matemática": "orange",
    "Geografia": "brown",
    "Língua Portuguesa": "lightblue",
    "Filosofia": "pink",
    "Sociologia": "indianred",
    "Biologia": "indigo",
    "Química": "springgreen",
    "Física": "slateblue",
    "Literatura": "cornflowerblue",
    "Nada": "lightgrey"
}

function abrir_container ( id ) {
    var { titulo, materia, descricao, data, horario } = atividades[id];

    document.getElementById( "container" ).style.display = 'flex';

    document.getElementById( "titulo" ).innerText = titulo;
    document.getElementById( "descricao" ).innerText = descricao;

    document.getElementById( "data-horario" ).innerText = data+" - "+horario;

    document.getElementById( "header" ).style.backgroundColor = materia_cor[materia];
    document.getElementById( "footer" ).style.backgroundColor = materia_cor[materia];
}

function adicionarAtividade( id ) {
    var { titulo, materia, data, horario } = atividades[id];
    document.getElementById( "caixa-atividades" ).innerHTML += `
        <div class="atividade" onclick="abrir_container(${id});" >
            <div class="atividade-head" style="background-color: ${materia_cor[materia]};">
                <div class="atividade-circulos">
                    <div class="circulo" style="background-color: lightgreen;"></div>
                    <div class="circulo" style="background-color: yellow;"></div>
                    <div class="circulo" style="background-color: red;"></div>
                </div>
            </div>

            <div class="atividade-conteudo">
                <h1>${titulo}</h1>
                <hr>
                <h5>${materia}</h5>
                <h4>${data} - ${horario}</h4>
            </div>
        </div>
    `;
}

atividades.forEach( ( _, index ) => adicionarAtividade( index ) )

