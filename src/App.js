import './App.css';
import Header from './header-components/Header.js';
import Home from './home-components/Home.js';
import Checkout from './checkout-components/Checkout';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LoginPage from './authentication-components/LoginPage';


function App() {
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