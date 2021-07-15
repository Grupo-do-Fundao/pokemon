import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { PokemonCard } from '../components'
import loadPokemons from '../services/services';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.setState({});
  }

  render() {
    loadPokemons()
      .then((x) => {console.log(x)})
    return (
      <div>
        {/* <PokemonCard pokemonId={pokemonId} /> */}
      </div>
    );
  }
}
