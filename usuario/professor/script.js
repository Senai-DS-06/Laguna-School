// Variavel que guarda os valores da cor de cada atividade de acordo com a materia
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
};

// variavel que guarda os valores das atividades
// simulando um servidor enviando as atividades para a página
var atividades = [
    {
        "materia": "História",
        "titulo": "Revolução Russa",
        "data": "15/03/2023",
        "horario": "15:35",
        "descricao": "pesquise os seguintes tópicos sobre a revolução industrial: \n - Consequências;\n - Causas;\n - Contexto Histórico;\n - Impactos atuais;"
    },
    {
        "materia": "Língua Portuguesa",
        "titulo": "Pronomes Adversativos",
        "data": "12/07/2023",
        "horario": "15:35",
        "descricao": "pesquise os diferentes tipos de pronomes adversativos e dê exemplos"
    },
    {
        "materia": "Filosofia",
        "titulo": "Ética Contêmporanea",
        "data": "05/07/2023",
        "horario": "15:35",
        "descricao": "Faça uma apresentação relacionada aos diferentes pensadores da ética contemporânea"
    }
];

// Variaveis referentes aos elementos do 'container de atividades'
const el_titulo = document.getElementById( "titulo" );
const el_descricao = document.getElementById( "descricao" );
const el_materia = document.getElementById( "materia" );
const el_data = document.getElementById( "data" );
const el_horario = document.getElementById( "horario" );
const el_header = document.getElementById( "header" );
const el_footer = document.getElementById( "footer" );

// método que mostra na tela o 'container de atividades' e define todos os valores padrão:
// titulo; data; horario; materia; descricao; cor;
// De acordo com a atividade clicada
function abrir_container ( id ) {

    // armazena em variaveis todas as informações da atividade que foi clicada
    // busca na variavel 'atividades'
    const { titulo, materia, descricao, data, horario } = atividades[id];

    // mostra o 'container de atividades' na tela
    dialog.show();

    // altera os valores dos elementos no 'container de atividades' 
    // baseado na atividade que foi clicada
    el_titulo.value = titulo;
    el_data.value = data.split("/").reverse().join("-");
    el_horario.value = horario;
    el_materia.value = materia;
    el_descricao.value = descricao;
    el_header.style.backgroundColor = materia_cor[materia];
    el_footer.style.backgroundColor = materia_cor[materia];
}

// Esvazia os valores do 'container de atividades'
// quando clica bo botão 'Adicionar Atividades'
function reset() {
    // Mostra o 'container de atividades' na tela
    dialog.show();

    // Esvazia os valores das caixas de texto do 'container de atividade'
    el_titulo.value = "";
    el_descricao.value = "";
    el_data.value = "";
    el_horario.value = "00:00";

    // Define a cor do 'container de atividades' como padrão
    const cor = materia_cor.Nada;
    el_header.style.backgroundColor = cor;
    el_footer.style.backgroundColor = cor;
}

// Método que adicionar ou edita uma atividades na variavel 'atividades'
function editar_adicionar_atividade() {

    // Cria uma nova atividade com os atributos digitados pelo usuario
    const nova_atividade = {
        "materia": el_materia.value,
        "titulo": el_titulo.value,
        "data": el_data.value.split("-").reverse().join("/"),
        "horario": el_horario.value,
        "descricao": el_descricao.value
    };
    
    // Verifica se a atividade ja existe na variavel 'atividades'
    const criou = atividades.findIndex( d => d.titulo == nova_atividade.titulo );

    if ( criou >= 0 ) {
        // Se a atividade ja existe na variavel 'atividades', apenas edita ela na variavel 'atividades'
        atividades[criou] = nova_atividade;
    } else {
        // Se a atividade nao existe na variavel 'atividades', adiciona uma nova atividade na variavel 'atividades'
        atividades.push( nova_atividade );
    }

    // fechar o 'container de atividades'
    dialog.close();

    // atualiza todas as atividades na pagina html
    atualizar_atividades();
}

// método responsavel por atualizar a tela com todas as atividades
// insere os elementos html com as caracteristicas da pagina
function atualizar_atividades() {
    // "Limpa" a tela
    // remove os elementos html desenhados na tela
    document.getElementById( "caixa-atividades" ).innerHTML = "";

    // executa um looping para verificar todas as atividades na variavel 'atividades'
    atividades.forEach( ( { titulo, materia, data, horario }, id ) => {

        // usando as informações do looping
        // cria e adiciona um elemento HTML a página principal
        document.getElementById( "caixa-atividades" ).innerHTML += `
            <div class="atividade" onclick="abrir_container(${id})" >
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
}

// desenha as atividades na tela quando inicia a pagina
atualizar_atividades();