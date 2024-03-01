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
window.onload = main
