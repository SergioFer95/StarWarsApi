
window.onLoad = () =>{
    init();
}

const init = async ()=>{
    const getApiInfo = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const transformData = await getApiInfo.json();
    console.log(transformData);

    return transformData;
}