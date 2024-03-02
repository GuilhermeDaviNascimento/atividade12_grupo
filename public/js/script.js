//funcao que manda uma requiscao para a parte do servidor (o index.js) e recebe a lista de tags html que contem os usuarios dentro de uma tabela para ser carregado
function main() {
    fetch('/usersdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            document.querySelector('table').innerHTML = data.mensagem
        })
        .catch(error => {
        });
}

//funcao ultilizada pelo botao deletar em cada linha referente ao usuario que envia para o servidor (o index.js) o usuario para ser deletado e atuliza a pagina que estamos depois que o usuario eh deletado
function apagarusuario(cpf) {
    let username = {
        usuarioCpf: cpf
    };
    fetch('/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(username) 
    })
    .then(response => response.json())
    .then(data => {window.location.reload()})
    .catch(error => {
        console.error('Error:', error);
    });
} 
//toda vez que a pagina for carregada ele chama a funcao main() la em cima
window.onload = main