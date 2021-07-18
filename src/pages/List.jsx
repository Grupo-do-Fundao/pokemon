import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
import { PokemonCard } from '../components'
import loadPokemons from '../services/services';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    }
  }

  componentDidMount() {
    loadPokemons()
      .then((pokemons) => {
        this.setState({
          pokemons,
        })
      });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div>
        {/* <PokemonCard pokemon={pokemons[0]} /> */}
      </div>
    );
  }
}
