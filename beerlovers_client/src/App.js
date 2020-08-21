import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Layout/Navigation";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import NavigationBotton from "./components/Layout/NavigationBotton";
import Home from "./Home";
import MapProducts from "./components/Map/MapProducts";
import Favourites from "./components/FavouritetList.jsx";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products.jsx";
import Register from "./Register";
import NoMatch from "./NoMatch";
import Cart from "./components/Cart/Cart";
import Acount from "./components/Acount/Account";
import useApplication from "./hooks/useApplicationData";
import Layout from "./components/Layout/Layout";

function App() {
  const { signIn, logout, validate, setIsLogIn } = useApplication();
  const [logged, setLogged] = useState(false);

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
              state={"send anything from here"}
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
  );
}

export default App;
