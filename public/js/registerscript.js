function validardataDeNascimento(data){
    dataAtual= new Date();
    data=new Date(data);

    if (data<dataAtual){
        console.log("Data Válida");
        document.getElementById('nascimento').setCustomValidity('')
        return true;
    } else {
        document.getElementById('nascimento').setCustomValidity('Nascimento Inválido')
        return false;
    }
}
//funcao simples para conferir se a data enviada no formulario eh menor que a data atual