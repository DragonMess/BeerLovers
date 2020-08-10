import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NavigationBotton from "./components/NavigationBotton";
import Home from "./Home";
import MapProducts from "./MapProducts";
import Login from "./Login";
import Products from "./Products";
import Register from "./Register";
import NoMatch from "./NoMatch";
import Cart from "./Cart";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Navigation />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/MapProducts" component={MapProducts} />
            <Route path="/Products" component={Products} />
            <Route path="/Cart" component={Cart} />
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
