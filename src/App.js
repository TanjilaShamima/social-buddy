// import { Home } from '@material-ui/icons';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SinglePost from './components/SinglePost/SinglePost';
import Posts from './components/Posts/Posts';
import NotFound from './components/NotFound/NotFound';

function App() {
  
  return (
    <div>
      <Header></Header>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route  path="/posts">
              <Home></Home>
            </Route>
            <Route  path="/post/:id">
              <SinglePost></SinglePost>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
