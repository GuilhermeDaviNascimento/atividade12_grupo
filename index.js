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

const users = [];

//Requisição GET para renderizar a pagina INDEX.EJS na pasta views
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/sucess', (req, res) => {
    users.push(req.body)
    res.render('index');
});

app.post('/usersdata', (req, res) => {
    let usuarios = ``
    users.forEach(user => {
        let label = `<tr><td>001</td> <td>${user.nome}</td> <td>${user.cpf}</td> <td>${user.nascimento}</td> <td>${user.sexo}</td> <td><button type="button" 
        class="btn btn-primary">Atualizar</button></td> <td><button type="button" class="btn btn-danger" onclick='apagarusuario(${user.cpf})'>Remover</button></td</tr>`
        usuarios += label;
    })
    res.status(200).json({ mensagem: usuarios });
})

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});