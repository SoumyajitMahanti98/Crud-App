import React from 'react';
import './App.css';
import Home from './Home';
import { UserProvider } from './UserContext';
import Read from './Read';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Delete from './Delete';
import Create from './Create';
import Edit from './Edit';

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/create/">
              <Create />
            </Route>
            <Route path="/read/:id">
              <Read />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/delete/:id">
              <Delete />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}
export default App;
