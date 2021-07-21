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
      filteredPokemons: [],
    }
    this.thisStateSync = this.thisStateSync.bind(this);
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

  thisStateSync(pokemon) {
    const { id } = pokemon;
    let { pokemons } = this.state;
    pokemons[id-1] = pokemon;
    this.setState({
      pokemons,
    });
  }

  render() {
    const { pokemons, loading } = this.state;
    return (
      <div>
        {
          loading ?
          <h1>Loading</h1>:
          pokemons.map((pokemon, i) => (
            <PokemonCard
              pokemon={pokemons[i]}
              parentStateSync={this.thisStateSync}
            />
          ))
        }
      </div>
    );
  }
}

