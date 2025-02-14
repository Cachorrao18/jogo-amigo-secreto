//inicio do desafio
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (!nome) {
        alert('Insira um nome válido!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    amigos.push(nome);

    // Adiciona diretamente à lista sem recriar tudo
    let lista = document.getElementById('listaAmigos');
    let item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);

    input.value = ''; // Limpa o campo
}

// Função para sortear amigos secretos corretamente
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 participantes!');
        return;
    }

    let pessoas = [...amigos]; // Cópia da lista original
    let sorteio = {};

    // Embaralhar a lista
    pessoas.sort(() => Math.random() - 0.5);

    // Fazer o sorteio garantindo que ninguém se tire
    for (let i = 0; i < pessoas.length; i++) {
        let sorteado = (i === pessoas.length - 1) ? pessoas[0] : pessoas[i + 1];
        sorteio[pessoas[i]] = sorteado;
    }

    // Exibir resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let chave in sorteio) {
        let item = document.createElement('li');
        item.textContent = `${chave} tirou ${sorteio[chave]}`;
        resultado.appendChild(item);
    }
}
