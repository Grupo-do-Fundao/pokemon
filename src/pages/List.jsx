import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
import { PokemonCard } from '../components'
import loadPokemons from '../services/services';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pokemons: [],
    }
  }

  componentDidMount() {
    loadPokemons()
      .then((pokemons) => {
        this.setState({
          loading: false,
          pokemons,
        })
      });
  }

  render() {
    const { pokemons, loading } = this.state;
    return (
      <div>
        {
          loading ?
          <h1>Loading</h1>:
          <PokemonCard pokemon={pokemons[0]} />
        }
      </div>
    );
  }
}
