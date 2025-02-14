//inicio
let amigos = [];

// armazenar os nomes digitados
function adcionarAmigos () {
    let amigo = document.getElementById('amigo').value.trim();
// verificar se tem algum valor no campo
    if (amigo === '') {
        alert('Insira um nome aqui')
        return
    }
    if (amigos.includes(amigo)) {
        alert('Esse nome já foi adcionado')
    }

}