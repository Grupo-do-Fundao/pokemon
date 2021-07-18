async function fetchApi(id) {
  const END_POINT = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const header = await fetch(END_POINT);
  const response = await header.json();
  return response;
}

function loadLocalStorage() {
  const storageContent = localStorage.getItem("pokemonApp");  
  if (storageContent !== null) {
    console.log('LOCAL STORAGE');
    const pokemons = JSON.parse(storageContent);
    return pokemons;
  }
  return false;
}

function createPokemonObj(rawData) {
  const { id, name, moves, types, stats } = rawData;
  return (
    {
      id,
      name,
      moves,
      types,
      stats: {
        [stats[0]['stat']['name']]: stats[0]['base_stat'],
        [stats[1]['stat']['name']]: stats[1]['base_stat'],
        [stats[2]['stat']['name']]: stats[2]['base_stat'],
        [stats[3]['stat']['name']]: stats[3]['base_stat'],
        [stats[4]['stat']['name']]: stats[4]['base_stat'],
        [stats[5]['stat']['name']]: stats[5]['base_stat'],
      },
      party: false,
      favorite: false,
    }
  );
}

async function fetchAllPokemons(num) {
  let pokemons = [];
  for (let i = 1; i <= num; i++){
    const rawData = await fetchApi(i);
    const pokemon = createPokemonObj(rawData);    
    pokemons = [...pokemons, pokemon];
  }
  return pokemons;
}

function saveInLocalStorage(pokemons) {
  if (typeof pokemons === 'object' && pokemons.length > 0 && typeof pokemons[0] === 'object' && pokemons[0].party === false) {
    const save = JSON.stringify(pokemons)
    localStorage.setItem("pokemonApp", save);
  } else {
    throw new Error('POKEMON APP: ERRO AO SALVAR NO LOCAL STORAGE');
  }
}

export default async function loadPokemons() {
  let pokemons = loadLocalStorage();
  if (pokemons) return pokemons;
  pokemons = await fetchAllPokemons(4);
  saveInLocalStorage(pokemons);
  console.log('API');
  return pokemons;
}
