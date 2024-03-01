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

window.onload = main