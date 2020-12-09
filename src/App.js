import React from "react";
import { BrowserRouter, Link, Route, Switch, NavLink, Redirect, HashRouter } from "react-router-dom";
import './App.css';
import TodoList from './components/TodoList.jsx';
import NotFound from './components/NotFound.jsx';
import DoneListContainer from "./containers/DoneListContainer.jsx";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <p>Hello React</p>
      </header>
      <BrowserRouter>
        <ul>
          <li><Link to="/">go to list page</Link></li>
          <li><Link to="/done">go to done page</Link></li>
        </ul>
        <Switch>
          <Route exact path="/done" component={DoneListContainer}></Route>
          <Route exact path="/" component={TodoList}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
