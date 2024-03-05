function isvalidnome() {
    const nome = document.getElementById('nome');
    if (nome.value.length >= 3) {
        nome.classList.remove(`is-invalid`)
        return true
    } else {
        nome.classList.add(`is-invalid`)
        return false
    }
}
function isvalidcpf() {
    const cpf = document.getElementById('cpf');
    if (cpf.value.length === 14) {
        cpf.classList.remove(`is-invalid`)
        return true
    } else {
        cpf.classList.add(`is-invalid`)
        return false
    }
}

function isvaliddate() {
    const datainput = document.getElementById('nascimento');
    let dataAtual = new Date();
    let data = new Date(datainput.value);

    if (data < dataAtual) {
        document.getElementById('nascimento').setCustomValidity('')
        datainput.classList.remove(`is-invalid`)
        return true;
    } else {
        document.getElementById('nascimento').setCustomValidity('Nascimento Inválido')
        datainput.classList.add(`is-invalid`)
        return false;
    }
}
function isvalidrenda() {
    const renda = document.getElementById('renda');
    if (renda.value > 0) {
        renda.classList.remove(`is-invalid`)
        return true
    } else {
        renda.classList.add(`is-invalid`)
        return false
    }
}

function isvalidnumero() {
    const numero = document.getElementById('numero');
    if (numero.value > 0) {
        numero.classList.remove(`is-invalid`)
        return true
    } else {
        numero.classList.add(`is-invalid`)
        return false
    }
}

function isvalidlogradouro() {
    const logradouro = document.getElementById(`logradouro`)
    if (logradouro.value.length >= 3) {
        logradouro.classList.remove(`is-invalid`)
        return true
    } else {
        logradouro.classList.add(`is-invalid`)
        return false
    }
}

function isvalidcidade() {
    const cidade = document.getElementById('cidade');
    if (cidade.value.length >= 3) {
        cidade.classList.remove(`is-invalid`)
        return true
    } else {
        cidade.classList.add(`is-invalid`)
        return false
    }
}