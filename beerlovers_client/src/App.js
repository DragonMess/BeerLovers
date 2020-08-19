import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import NavigationBotton from "./components/NavigationBotton";
import Home from "./Home";
import MapProducts from "./MapProducts";
import Favourites from "./components/FavouritetList.jsx";
import Login from "./Login";
import Products from "./Products";
import Register from "./Register";
import NoMatch from "./NoMatch";
import Cart from "./Cart";
import Acount from "./Account";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Navigation />
        <Router>
          <Switch>
            <PublicRoute restricted={false} component={Home} path="/" exact />
            <PublicRoute
              restricted={false}
              component={Login}
              path="/Login"
              exact
            />
            <PublicRoute
              restricted={false}
              component={Register}
              path="/Register"
              exact
            />
            <PrivateRoute component={MapProducts} path="/MapProducts" exact />
            <PrivateRoute component={Favourites} path="/Favourites" exact />
            <PrivateRoute component={Products} path="/Products" exact />
            <PrivateRoute component={Cart} path="/Cart" exact />
            <PrivateRoute component={Acount} path="/Acount" exact />

            <Route path="/NoMatch" component={NoMatch} />

            {/* <Route path="/Breweries" component={Breweries} /> */}

            {/* <Route
            path="/todo"
            render={(props) => <Todo {...props} tokenLog={tokenLog} />}
          /> */}
          </Switch>
        </Router>
        <NavigationBotton fixed="bottom" />
      </Layout>
    </>

    //
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
