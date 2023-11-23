import userlogin from './moduloDados.js';

const login = document.getElementById("login")
const cadastro = document.getElementById("cadastro")

login.addEventListener("click", (e) => {
    let user = document.getElementById("usuario").value 
    let senha = document.getElementById("senha").value
})
cadastro.addEventListener("click", (e) => {
    var usuario =userlogin.find((userlogin) => userlogin.email === "victorsena3010@gmail.com")
    console.log(usuario)
})
function encontraUsuario(value, index, array){
    console.table(value.email)
}