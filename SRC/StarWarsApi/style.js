window.addEventListener("load", ()=>{

    const baseURL = "https://akabab.github.io/starwars-api/api/";

    const getCharacters = async () => {
        let apiCall = await fetch(`${baseURL}all.json`);
        let dataTransform = await apiCall.json();

        // console.log(dataTransform);

        const mappedCharacters = dataTransform.map(character =>({
            photo: character.image,
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
            <div class="characterInfo" style="color:#EEEBDD; font-weight:bold; border:5px solid black; border-radius:25px; heigth:600px; text-align:center; width:700px; margin:0 auto; background-color:#630000">
                <img class="characterPhoto" src=${character.photo} alt=${character.name} style="width:500px; border:3px solid #D8B6A4; border-radius:25px; margin-top:40px"/>
                <h2>${character.name}</h2>
                <h3>Gender: ${character.gender}</h4>
                <h3>Species: ${character.species}</h4>
                <h3 style="margin-bottom:40px;">Home World: ${character.homeworld}</h4>
            </div>
            `
        )

        document.body.innerHTML = HTML;
    }
   
   
    getCharacters();

})


