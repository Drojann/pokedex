const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./who.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokelogo = data.sprites.front_shiny;
            pokeImage(pokeImg);
            pokeLogo(pokelogo)
            console.log(pokeImg);
            console.log(pokeShiny);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeLogo = (url) =>{
    const pokePhoto = document.getElementById("pokelogo")
    pokePhoto.src = url;
}
