import React from "react";
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route exact path='/shop' component={Shop}/>
          <Route path='/shop/:id' component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => {
  return (<div>
    <h1>Home Page</h1>
  </div>)
}
export default App;
