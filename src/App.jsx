import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { List, Details, Party, Battle, NotFound } from './pages';
import { Header } from './components';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route
            exact
            path="/details/:name"
            render={ (props) => <Details { ...props } /> }
          />
          <Route
            exact
            path="/party"
            render={ (props) => <Party { ...props } /> }
          />
          <Route
            exact
            path="/battle"
            render={ (props) => <Battle { ...props } /> }
          />
          <Route
            exact
            path="/"
            render={ (props) => <List { ...props } /> }
          />
          <Route render={ (props) => <NotFound { ...props } /> } />
        </Switch>
      </>
    );
  }
}
