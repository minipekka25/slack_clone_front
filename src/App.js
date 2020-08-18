import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from './components/home'
import editor from './components/editor'
import Orgexplorer from "./components/Orgexplorer"
import Organisation from "./components/Organisation"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/edit" exact component={editor} />
          <Route path="/orgexplorer" exact component={Orgexplorer} />
          <Route path="/app/organisation" exact component={Organisation} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
