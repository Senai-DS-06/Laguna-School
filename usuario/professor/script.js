
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

function mudar_cor() {
    let materia = document.getElementById( "materia" ).value;
    document.getElementById( "header" ).style.backgroundColor = materia_cor[materia];
    document.getElementById( "footer" ).style.backgroundColor = materia_cor[materia];
}

function abrir_container ( id ) {
    var { titulo, materia, descricao, data, horario } = atividades[id];

    document.getElementById( "container" ).style.display = 'flex';

    document.getElementById( "data" ).value = data.split("/").reverse().join("-");
    document.getElementById( "horario" ).value = horario;

    document.getElementById( "materia" ).value = materia;
    document.getElementById( "titulo" ).value = titulo;
    document.getElementById( "descricao" ).value = descricao;

    mudar_cor();
}

function novo_container () {
    document.getElementById( "container" ).style.display = 'flex';

    document.getElementById( "materia" ).value = "Nada";
    document.getElementById( "titulo" ).value = "";
    document.getElementById( "descricao" ).innerText = "";

    mudar_cor();
}

function atividade_criada( nome ) {
    var existe = false;

    atividades.forEach( (obj,index) => {
        if ( obj.titulo == nome ) {
            existe = index;
        }
    } );

    return existe;
}

function editar_adicionar_atividade() {
    var titulo = document.getElementById( "titulo" ).value;
    var criou = atividade_criada( titulo );

    if ( criou === false ) {
        atividades.push(
            {
                "materia": document.getElementById( "materia" ).value,
                "titulo": document.getElementById( "titulo" ).value,
                "data": document.getElementById( "data" ).value,
                "horario": document.getElementById( "horario" ).value,
                "descricao": document.getElementById( "descricao" ).value
            }
        )
    } else {
        atividades[ criou ] = 
        {
            "materia": document.getElementById( "materia" ).value,
            "titulo": document.getElementById( "titulo" ).value,
            "data": document.getElementById( "data" ).value.split("-").reverse().join("/"),
            "horario": document.getElementById( "horario" ).value,
            "descricao": document.getElementById( "descricao" ).value
        }
    }

    fechar_container();
    atualizar_atividades();
}

function atualizar_atividades() {
    document.getElementById( "caixa-atividades" ).innerHTML = "";

    atividades.forEach( ( { titulo, materia, data, horario }, index ) => {
        document.getElementById( "caixa-atividades" ).innerHTML += `
            <div class="atividade" onclick="abrir_container('${index}');" >
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
    } );
} atualizar_atividades();