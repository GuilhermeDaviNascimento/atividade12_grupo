// Importar as dependências
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configurar o motor de visualização EJS
app.set('view engine', 'ejs');

// Middleware para analisar corpos de solicitação
app.use(bodyParser.urlencoded({ extended: true }));

//Defininido public como pasta estatica do express (ou seja, dizendo que na public está nosso css e js do lado do cliente)
app.use(express.static('public'));

app.use(express.json())


//Nosso 'banco de dados' (variavel que armazena usuarios)
const users = [];
let id = 0;

//Requisição GET para renderizar a pagina INDEX.EJS na pasta views
app.get('/', (req, res) => {
    res.render('index');
});

//Requisição GET para renderizar a pagina REGISTER.EJS na pasta views
app.get('/register', (req, res) => {
    res.render('register');
});


//Requisição POST para pegar os usuarios criados no formulario de registro e adicionar ao nosso 'banco de dados' (variavel user)
//OBS: REQ.BODY é a resposta do nosso form que está sendo enviada
app.post('/sucess', (req, res) => {
    req.body.id = id
    id++
    users.push(req.body)
    console.log(users)
    res.redirect('/');
});

//Requisição POST sendo chamada no arquivo script que esta dentro de public e js que carrega todos os usurios que estão dentro do nosso 'banco de dados'
//e colocam dentro de tags html para criar elementos html usando as informações contidas no nosso 'banco de daodos'
app.post('/usersdata', (req, res) => {
    let usuarios = "<tr class='grey'><th>ID</th> <th>Nome</th> <th>CPF</th> <th>Nascimento</th> <th>Sexo</th> <th></th> <th></th></tr>"
    //inicia a pagina carregando o cabecalho da tabela
    users.forEach(user => {
        let label = `<tr><td>${user.id}</td> <td>${user.nome}</td> <td>${user.cpf}</td> <td>${user.nascimento}</td> <td>${user.sexo}</td> <td><button type="button" 
        class="btn btn-primary">Atualizar</button></td> <td><button type="button" class="btn btn-danger" onclick='apagarusuario("${user.cpf}")'>Remover</button></td</tr>`
        usuarios += label;
        //percorre a lista de usuarios criando uma linha dentro da tabela para cada usuario
    })
    res.status(200).json({ mensagem: usuarios });
    //envia a variavel contendo as tags html que armazenam os usuarios para o lado do client para que seja carregada na pagina principal
})

//função para deletar algum usuario da 'banco de dados' passando como parametro o cpf dele
function deletarUsuario(cpf){
    const index = users.findIndex(user => user.cpf === cpf);
    if (index !== -1) {
        users.splice(index, 1);
    }
}

//requisição POST feita ao clicar no botão deletar de cada linha referente a algum usuario para deletar o mesmo do nosso banco de dados usando a função criada em cima.
app.post('/delete', (req, res) => {
    deletarUsuario(req.body.usuarioCpf)
    res.send({data: req.body})
});

// Iniciar o servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
