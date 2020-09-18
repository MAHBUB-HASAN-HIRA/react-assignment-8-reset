import React from 'react';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import Notfound from './Components/NotFound/Notfound';
import Header from './Components/Header/Header'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/postdetail/:postId'>
            <PostDetails />
          </Route>
          <Route path='*'>
            <Notfound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
