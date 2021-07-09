import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from './components';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/movies/new"
          render={ (props) => <NewMovie { ...props } /> }
        />
        <Route render={ (props) => <NotFound { ...props } /> } />
      </Switch>
    );
  }
}
