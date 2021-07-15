async function fetchApi(id) {
  const END_POINT = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const header = await fetch(END_POINT);
  const response = await header.json();
  return response;
}

export default async function loadPokemons() {
  const storageContent = localStorage.getItem("pokemons");
  if (storageContent){
    const pokemons = JSON.parse(storageContent);
    return pokemons;
  }
  let pokemons = [];
  for (let i = 1; i <= 2; i++){
    const rawData = await fetchApi(i)
    const { id, name, moves, sprites, types, stats } = rawData;
    const pokemon = {
      id,
      name,
      moves,
      sprites,
      types,
      stats: {
        [stats[0]['stat']['name']]: stats[0]['base_stat'],
        [stats[1]['stat']['name']]: stats[1]['base_stat'],
        [stats[2]['stat']['name']]: stats[2]['base_stat'],
        [stats[3]['stat']['name']]: stats[3]['base_stat'],
        [stats[4]['stat']['name']]: stats[4]['base_stat'],
        [stats[5]['stat']['name']]: stats[5]['base_stat'],
      }
    }
    pokemons = [...pokemons, pokemon];
  }
  // const pokemon = await fetchApi(10)

  return pokemons;
//   console.log('xablau');
//   console.log(x);
}



// Store
// localStorage.setItem("lastname", "Smith");
// Retrieve
// localStorage.getItem("lastname");