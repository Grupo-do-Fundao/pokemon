import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
// import { fetchPokemons } from '../services/api';

export default class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.setState({});
  }

  render() {
    return (
      <div>
       <div>
         <img src="" alt="Favorito" />
         <img src="" alt="Selecione o Pokemon" />
       </div>
       <img src="" alt="" />
       <p>#</p>
       <p>Nome do pokemon</p>
       <p>Type</p>
      </div>
    );
  }
}
