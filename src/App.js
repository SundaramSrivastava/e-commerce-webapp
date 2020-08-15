import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/header.component';

const PageNotFound = () => (
  <div className="_404" style={{height: '70vh', display:'flex', flexDirection:'column', justifyContent:'center',textAlign:'center'}}>
    <h1 className="heading">
      SORRY TO SAY
    </h1>
    <h4 className="sub-heading">
      but the page You are looking has for went for a vacation.
    </h4>
  </div>
)

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}  /> 
        <Route path='/shop' component={ShopPage}  /> 
        <Route path='/' component={ PageNotFound } />
      </Switch>
    </div>
  );
}

export default App;