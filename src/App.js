import './App.css';
import Header from './header-components/Header.js';
import Home from './home-components/Home.js';
import Checkout from './checkout-components/Checkout';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch> 
           
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/checkout">
            <Checkout/>
          </Route>
        
        </Switch>

      </div>
    </Router>
  );
}

export default App;