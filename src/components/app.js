import React, { Component } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'



import Home from './homepage'
import Nav from './Navigation/Navbar'
import Dogs from './dogs'
import Cats from './cats'
import Turtles from './turtles'
import Bunnies from './bunnies'
import Birds from './birds'






export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="title">
          Pets.tm
        </div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/cats" component={Cats} />
          <Route path="/turtles" component={Turtles} />
          <Route path="/bunnies" component={Bunnies} />
          <Route path="/birds" component={Birds} />
          
        </Switch>
      </div>
    );
  }
}
