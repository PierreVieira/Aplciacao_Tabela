function criarLinha(element, index, array) {
    let linha = document.createElement("tr")
    let user_id = document.createElement("td")
    let id = document.createElement("td")
    let title = document.createElement("td")
    let body = document.createElement("td")
    user_id.innerText = element.userId
    id.innerText = element.id
    title.innerText = element.title
    body.innerText = element.body
    linha.appendChild(user_id)
    linha.appendChild(id)
    linha.appendChild(title)
    linha.appendChild(body)
    corpo_tabela.appendChild(linha)
}

corpo_tabela = document.querySelector("tbody")
const data = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(function (response) {
        response.forEach(criarLinha)
    })
