
function fechar_container () { document.getElementById( "entrega-tela" ).style.display = 'none'; }

var atividades = [
    {
        "materia": "História",
        "titulo": "Revolução Russa",
        "data": "15/03/2025",
        "horario": "15:35",
        "descricao": "pesquise sobre revolução industrial e sua consequencias"
    }
]

function mudar_cor() {
    let materia = document.getElementById( "atividade-materia" ).value;
    document.getElementById( "header-container" ).style.backgroundColor = materia_cor[materia];
    document.getElementById( "footer-container" ).style.backgroundColor = materia_cor[materia];
}

function abrir_container ( id ) {
    var { titulo, materia, descricao } = atividades[id];

    document.getElementById( "entrega-tela" ).style.display = 'flex';

    document.getElementById( "atividade-materia" ).value = materia;
    document.getElementById( "atividade-titulo" ).value = titulo;
    document.getElementById( "atividade-descricao" ).innerText = descricao;

    mudar_cor();
}

function novo_container () {
    document.getElementById( "entrega-tela" ).style.display = 'flex';
    document.getElementById( "header-container" ).style.backgroundColor = "#dddddd";
    document.getElementById( "footer-container" ).style.backgroundColor = "#dddddd";
}

function nova_atividade () {
    document.getElementById( "entrega-tela" ).style.display = 'flex';
    var materia = {
        "materia": document.getElementById( "atividade-materia" ).value,
        "titulo": document.getElementById( "atividade-titulo" ).value,
        "data": document.getElementById( "atividade-data" ).value,
        "horario": document.getElementById( "atividade-horario" ).value,
        "descricao": document.getElementById( "atividade-descricao" ).value
    }

    atividades.push( materia );
    document.getElementById( "caixa-atividades" ).innerHTML = "";
    atividades.forEach( ( _, index ) => adicionarAtividade( index ) )
    document.getElementById( "entrega-tela" ).style.display = 'none';
}

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
