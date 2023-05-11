
function mudar_opcao () {
    var cargo = document.getElementById('cargo').value;
    document.getElementById('cadastro').action = "/usuario/"+cargo+"/index.html";
}
