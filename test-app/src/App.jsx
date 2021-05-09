import React from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import Bancos from './componentes/Bancos';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Switch>
        <Route path="/">
          <Bancos></Bancos>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
