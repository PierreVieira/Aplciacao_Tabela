function criarLinha(element, index, array) {
    console.log(element.id)
    let linha = document.createElement("tr")
    let user_id = document.createElement("td")
    let id = document.createElement("td")
    let title = document.createElement("td")
    user_id.innerText = element.userId
    id.innerText = element.id
    title.innerText = element.title
    linha.appendChild(user_id)
    linha.appendChild(id)
    linha.appendChild(title)
    corpo_tabela.appendChild(linha)
}

corpo_tabela = document.querySelector("tbody")
const data = fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(function (response) {
        response.forEach(criarLinha)
    })
