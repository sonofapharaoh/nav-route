import React from 'react';
import './App.css' ;
import  Nav  from "../Pages/Nav";
import About from '../Pages/About';
import Shop from '../Pages/Shop';
import {BrowserRouter as Router, Switch ,Route ,  } from 'react-router-dom';

class  App extends React.Component {
  render() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
      </Switch>
        
    </div>
    </Router>
  );
}
}

const Home =() => (
  <div>
    <h1>Home Page</h1>
  </div>
);
export default App;
