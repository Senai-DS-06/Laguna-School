
// define a escolha padrao de redirecionar pagina para o "aluno"
const login = document.getElementById('cadastro');
login.action = "./usuario/aluno";

// Caso mude a opção na HTML, muda o redirecionamento da página
// para: aluno, professor ou representante de sala.
function mudar_opcao () {
    const cargo = document.getElementById('cargo').value;
    login.action = `./usuario/${cargo}`;
}
