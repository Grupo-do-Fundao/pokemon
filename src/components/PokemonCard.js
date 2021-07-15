import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
// import { fetchPokemons } from '../services/api';

export default class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.setState({});
  }

  render() {
    const { pokemon } = this.props;
    return (
      <div>
       <div>
         <img src="" alt="Favorito" />
         <img src="" alt="Selecione o Pokemon" />
       </div>
       <img src="" alt="d" />
       <p>#{pokemon.id}</p>
       <p>#{pokemon.name}</p>
       <p>Type</p>
      </div>
    );
  }
}
