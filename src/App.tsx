import React from 'react';
import { Route } from "react-router-dom";
import { Auth, Home } from "./pages/";

import './styles/index.scss';

const App: React.FC<{}> = () => {
  return (
    <div className="wrapper">
        <Route exact path={["/", "/login", "/register"]} component={Auth}/>
        <Route exact path="/im" component={Home}/>
    </div>
  );
}

export default App;
