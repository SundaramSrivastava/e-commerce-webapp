import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/Shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";

const PageNotFound = () => (
  <div
    className="_404"
    style={{
      height: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <h1 className="heading">SORRY TO SAY</h1>
    <h4 className="sub-heading">
      but the page You are looking has for went for a vacation.
    </h4>
  </div>
);

class App extends Component {
  unsubscribeFromAuth = null;
  
  componentDidMount = () => {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin"  render={ ()=> this.props.CurrentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />) }/>
          <Route path="/" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  CurrentUser : selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
