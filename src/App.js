import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './components/firebase/firebase.utils'

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

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      CurrentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount = () =>{
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user =>{
      this.setState({CurrentUser: user}, ()=>console.log(this.state.CurrentUser))
    } )
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header CurrentUser={ this.state.CurrentUser } />
        <Switch>
          <Route exact path='/' component={HomePage}  /> 
          <Route path='/shop' component={ShopPage}  /> 
          <Route path='/signin' component={SignInAndSignUpPage} />
          <Route path='/' component={ PageNotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;