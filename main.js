document.addEventListener('DOMContentLoaded', function(){

    const nameElement = document.querySelector('#name')
    const profileNameElement = document.querySelector('#profile-name')
    const fotoElement = document.querySelector('#foto')
    const seguindoElement = document.querySelector('#seguindo')
    const seguidoresElement = document.querySelector('#seguidores')
    const repositoriosELement = document.querySelector('#repositorios')
    const linkElement = document.querySelector('#link')

    fetch('https://api.github.com/users/RafaelGracianoRibeiro')
    .then(function(dados){
        return dados.json();
        console.log(dados)
    })  
    .then(function(json){
        nameElement.innerText = json.name
        profileNameElement.innerText = json.login
        fotoElement.src = json.avatar_url
        seguindoElement.innerText = json.following
        seguidoresElement.innerText = json.followers
        repositoriosELement.innerText = json.public_repos
        linkElement.href = json.html_url
    })
})