window.addEventListener("load", ()=>{

    const baseURL = "https://akabab.github.io/starwars-api/api/";

    const getCharacters = async () => {
        let apiCall = await fetch(`${baseURL}all.json`);
        let dataTransform = await apiCall.json();

        // console.log(dataTransform);

        const mappedCharacters = dataTransform.map(character =>({
            photo: character.image,
            id: character.id,
            name: character.name,
            gender: character.gender,
            species: character.species,
            homeworld: character.homeworld
        }));

        showCharacters(mappedCharacters);
    }

    const showCharacters = (charactersMapped) => {
        const HTML = charactersMapped.map((character)=>
            `
            <div class="characterInfo">
                <img class="characterPhoto" src=${character.photo} alt=${character.name} width:"400px" height:"500px"/>
                <h2>${character.id} ${character.name}</h2>
                <h4>Género: ${character.gender}</h4>
                <h4>Especie: ${character.species}</h4>
                <h4>Mundo Natal: ${character.homeworld}</h4>
            </div>
            `
        )

        document.body.innerHTML = HTML;
    }
   
   
    getCharacters();

})


