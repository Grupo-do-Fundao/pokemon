import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
// import { fetchPokemons } from '../services/api';

export default class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    const imgStarON = '../images/starON';
    const imgStarOFF = '../images/starOFF';
    return (
      <div>
       <div>
         {/* <img src={imgStarON} alt="Favorito" /> */}
         <img src="" alt="Selecione o Pokemon" />
       </div>
       <img src="" alt="d" />
       {/* <p>#{pokemon.id}</p> */}
       {/* <p>#{pokemon.name}</p> */}
       <p>Type</p>
      </div>
    );
  }
}
