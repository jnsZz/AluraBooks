let livro = []
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosdaAPI()
const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosdaAPI(params) {
    const res =  await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}
