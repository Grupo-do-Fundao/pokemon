import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
// import { fetchPokemons } from '../services/api';
import './styles/pokemonCard.css';

export default class PokemonCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    const { pokemon } = this.props;
    const { id, name } = pokemon;
    const types = pokemon.types.map((el) => el.type.name);
    console.log(types);
    const IMG_FOLDER = `${process.env.PUBLIC_URL}/images/`

    return (
      <div className="pokemonCard">
       <div className="cardHeader">
         <img src={`${IMG_FOLDER}starON.png`} alt="Favorito" />
         <img src={`${IMG_FOLDER}pokeballON.png`} alt="Selecione o Pokemon" />
       </div>
       <img src={`${IMG_FOLDER}/artwork_png/${id}.png`} alt="d" />
       <p>#{id}</p>
       <p>{name}</p>
       <p>{types.map((type) => <span>{type} </span>)}</p>
      </div>
    );
  }
}
