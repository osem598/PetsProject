import React from 'react';
import { Component } from 'react';
import { NavLink} from 'react-router-dom';


export default class Nav extends Component {
    render() {
      return (
        <div>
            <NavLink exact to='/'>HomePage</NavLink>
            <NavLink to='/dogs'>Dogs</NavLink>
            <NavLink to='/cats'>Cats</NavLink>
            <NavLink to='/turtles'>Turtles</NavLink>
            <NavLink to='/bunnies'>Bunnies</NavLink>
            <NavLink to='/birds'>Birds</NavLink>

        </div>
      );
    }
  }