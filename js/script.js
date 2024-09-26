const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonimage = document.querySelector('.pokemon__image')

const form = document.querySelector('.form')
const input = document.querySelector('.input__search')
const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

let searchPokemon = 1;

const fatchPokemon = async(pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIResponse.json();

    return data;
}

const renderPokemon = async(pokemon) => {

    const data = await fatchPokemon(pokemon);
    if(data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonimage.src = data['sprites'] ['versions'] ['generation-v'] ['black-white']
        ['animated'] ['front_default'];
        searchPokemon = data.id
    }
}

form.addEventListener('submit' , (event) => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
    input.value = '';
})

buttonPrev.addEventListener('click' , () => {
    searchPokemon -= 1
    renderPokemon(searchPokemon)
})

buttonNext.addEventListener('click' , () => {
    searchPokemon += 1
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon)
