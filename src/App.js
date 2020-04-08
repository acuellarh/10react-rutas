import React, { Component } from 'react';
import {
  Switch,
  Route, 
  Link
} from 'react-router-dom';

const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}

export class App extends Component {
  render() {
    return (
      <div>
        <nav>  
          <Link to="page1">Page1</Link>
          <Link to="page2">Page2</Link>  
        </nav>
        {/* Aca tienes que agreager algo para que las rutas funcionen*/}
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================



