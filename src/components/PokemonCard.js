import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
// import { fetchPokemons } from '../services/api';
import imgStarON from '../images/starON.png';
import imgStarOFF from '../images/starOFF.png';
import imgPokeballON from '../images/pokeballON.png';
import imgPokeballOFF from '../images/pokeballOFF.png';
import './styles/pokemonCard.css';

export default class PokemonCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {

    // Destructuring
    const { pokemon } = this.props;
    const { id, name, favorite, party } = pokemon;
    const types = pokemon.types.map((el) => el.type.name);
    // console.log(types);

    // Images
    const imgFavorite = (favorite ? imgStarON : imgStarOFF);
    const imgParty = (party ? imgPokeballON : imgPokeballOFF);
    const imgPokemon = `${process.env.PUBLIC_URL}/images/artwork_png/${id}.png`;

    return (
      <div className="pokemonCard">
       <div className="cardHeader">
         <img src={imgFavorite} onClick={() => console.log('oi')} alt="Favorite" />
         <img src={imgParty} alt="Add to Party" />
       </div>
       <img src={imgPokemon} alt="Pokemon" />
       <p>#{id}</p>
       <p>{name}</p>
       <p>{types.map((type) => <span>{type} </span>)}</p>
      </div>
    );
  }
}
