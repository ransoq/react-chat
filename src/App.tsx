import React from 'react';
import { Auth, Home } from "./pages/";

import './styles/index.scss';
import { Route } from "react-router-dom";
import {RegisterForm} from "./modules";

function App() {
  return (
    <div className="wrapper">
        <Route exact path={"/"} component={Auth}/>
        <Route exact path="/im" component={Home}/>
    </div>
  );
}

export default App;
