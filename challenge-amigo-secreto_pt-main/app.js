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

    amigos.push(amigo)

    let lista = document.getElementById('listaAmigos')
    let item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
    document.getElementById('amigo').value = '';
}