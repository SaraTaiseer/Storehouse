import './App.css';
import Products from './Components/Products/Product';
import Navbar from "./Components/Navbar/Navbar";

import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import LoginUi from './Components/Auth/LoginUi';
import SignupUi from './Components/Auth/SignupUi';
import Footer from './Components/Footer/Footet';
import HomePage from './Components/HomePage/HomePage';
import Categories from './Components/Categories/Categories';
import Users from './Components/Users/Users';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LoginUi />
          </Route>
          <Route exact path="/signup">
            <SignupUi />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route
            path="/products/:category"
            render={(props) => <Products {...props} />}
          />
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
