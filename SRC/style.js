
window.onload = () => {

    // OPCIÓN 1:
    // var usuarios= [];

    // fetch('https://reqres.in/api/users?page=2')
    // .then(data => data.json())
    // .then(data =>{
    //     usuarios = data.first_name;
    // })

    // console.log(usuarios);



    // OPCIÓN 2:
    // var usuarios = [];

    // const apiCall = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    // .then(apiCall => apiCall.json())
    // .then(name =>{
    //     usuarios = name.ability;
    // })

    // console.log(usuarios);


    

    // OPCIÓN 3:
    // const getInfo = async ()=>{
    //     const apiCall = await fetch('https://rickandmortyapi.com/api/character');

    //     const transformToJson = await apiCall.json();

    //     return transformToJson;
    // }

    // getInfo();








    // Crear nuevo <li> dinámico, HECHO:
    let ourUl = document.querySelector('[customName="pokeList"]');

    const createNewLi = () => {
        let createLi = document.createElement("li");
        createLi.innerHTML = `
        Hola, soy texto`

        ourUl.append(createLi);
    }

    createNewLi();

}



