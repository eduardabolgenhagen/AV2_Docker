const express = require('express');
const router = express.Router();

const usersList = [];

//get users List
router.get('/', (req, res) => {
    res.send(getUsers());
});

function getUsers() {
    return usersList;
}

//post users
router.post('/', (req, res) => {
    const user = req.body;
    console.log(user);
    if (user.login != "" && user.password != "") {
        console.log("pode cadastrar")
        res.send(postUser(user));
    } else {
        console.log("Erro ao criar usuário.")
    }
});

function postUser(user) {
    user.id = usersList.length + 1;
    user.autorized = false;
    usersList.push(user);
    return usersList;
}

//get login
router.get('/login', (req, res) => {
    const user = req.body;
    res.send(getLogin(user));
});

function getLogin(user) {
    let autorized = false;
    for (let users of usersList) {
        if (users.login == user.login && users.password == user.password) {
            autorized = true;
            console.log("Login autorizado")
            return autorized;
        }
    }
    console.log("Não foi possivel fazer login.")
    return autorized;
};

module.exports = {
    router,
    getUsers,
    getLogin,
    postUser
}