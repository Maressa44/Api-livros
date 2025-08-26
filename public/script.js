document.addEventListener("DOMContentLoaded", () => {
    async function fetchLivros(){
        try{
            const livros_container = document.getElementById("books-container")
            const resposta_API = await fetch('/api/livros')
            const livros = await resposta_API.json()

            livros.forEach((livro) => {
                const card = document.createElement('div')
                card.className = "book-card"
                
                card.innerHTML = ` 




                
                    <img src="${livro.imagem}">
                    <h3>${livro.titulo}</h3>
                    <p>Autor: ${livro.autor}</p>
                `
                livros_container.appendChild(card)
            })

        }catch(error){
            console.error("Erro ao buscar os dados dos livros", error) //console.error é especifico para erros. '.error' é uma função, assim como '.log'
            livros_container.innerHTML = "<p> Não foi possível carregar seus livros.</p>"
        }
    }
    
    fetchLivros();
})

// try catch serve pra validar os error do seu codigo