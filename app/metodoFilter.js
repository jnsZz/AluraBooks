const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn =>btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBTn = document.getElementById(this.id)
    const categoria = elementoBTn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivbrosDisponiveisNaTela(valorTotal)
    }
}
function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.
        quantidade > 0)
}

function exibirValorTotalDosLivbrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$<span id="valor">${valorTotal}</span></p>
    </div>
    `
}