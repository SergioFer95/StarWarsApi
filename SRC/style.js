
window.onload = () => {

    var usuarios= [];

    fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users =>{
        usuarios = users.data;
    })

    console.log(usuarios);







    // Apartado CREAR UN NUEVO <li>, HECHO:
    let ourUl = document.querySelector('#pokeListOne');

    const createNewLi = () => {
        let createLi = document.createElement("li");
        createLi.innerHTML = `
        Hola, soy texto`

        ourUl.append(createLi);
    }

    createNewLi();

}



