import React from 'react';
import List from './Pokemon/List/List';
import View from './Pokemon/View/View';
import { AppProvider } from './AppContext/Provider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './styles.css';
import Pokeball from './css/pokeball.png';
//import Background from './css/background.png';
//<img src={Background}/>

export default function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <h1>
            {/*eslint-disable-next-line jsx-a11y/alt-text*/}
            <img src={Pokeball}/>
            <Link style={{ textDecoration: 'none'}} to="/pokemons/list">Pokemons List</Link>
          </h1>
          <Switch>
            <Route path="/pokemons/list" component={List}
            />
            <Route path="/pokemons/:name" component={View}
            />
            <Route path="/" exact>
              <Redirect to="/pokemons/list" />
            </Route >
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}