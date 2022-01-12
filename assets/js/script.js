/*
Case Sensitive = reconhece letras maiusculas e minusculas para palavras resenrvadas dessa linguagem

por tag: getElementTagName()
por Id: getElementById()
por Nome: getElementByName()
por Calsse: getElementByClassName()
por Seletor: querySelector()
*/

let nome  = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }
}
function validaEmail (){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}