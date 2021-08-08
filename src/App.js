import React, {useEffect} from 'react';
import './App.css';
import Header from './header-components/Header.js';
import Home from './home-components/Home.js';
import Checkout from './checkout-components/Checkout';
import {auth} from './firebase';
import {  BrowserRouter as Router,  Route,  Switch} from 'react-router-dom';
import LoginPage from './authentication-components/LoginPage';
import { useStateValue } from './state-provider/StateProvider';
import PaymentPage from './payment-cpmponent/PaymentPage';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JM7WVKzG6PGdC810XLy9jeTjAyFovVSm20XnVqyJ4VFCDa3At90ne6owaCbCthAKGNTug82vNwgUBVDpyeXxvjX00zlbFvE2N");

function App() {
  const [{user}, dispatch] = useStateValue();
  
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>>>>',authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

  },[user]);

  return (
    <Router>
      <div className="app">
        <Switch> 
           
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <PaymentPage />
            </Elements>
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout/>
          </Route>
        
        </Switch>

      </div>
    </Router>
  );
}

export default App;