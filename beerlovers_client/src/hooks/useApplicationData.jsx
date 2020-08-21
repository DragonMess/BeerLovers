import { useState, useEffect } from "react";
import axios, * as others from "axios";
import { findBreweryName } from "../helpers/selectors";

export default function useApplicationData() {
  let [validate, setValidate] = useState(false);
  let [isLogIn, setIsLogIn] = useState(false);
  const [state, setState] = useState({
    products: [],
    breweries: [],
    favourites: [],
    // orders: [],
    // orders_details: [],
    user_id:"",
    loggedIn: false,
  });
  let logged = false;
  const userID = localStorage.getItem("UserId");
  const TOKEN_STRING = localStorage.getItem("UserLogin");

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3002/products", {
        headers: {
          Authorization: `Bearer ${TOKEN_STRING}`,
        },
      }),
      axios.get("http://localhost:3002/breweries", {
        headers: {
          Authorization: `Bearer ${TOKEN_STRING}`,
        },
      }),
      axios.get(`http://localhost:3002/favourites`, {
        headers: {
          Authorization: `Bearer ${TOKEN_STRING}`,
        },
      }),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        products: all[0].data,
        breweries: all[1].data,
        favourites: all[2].data,
        user_id: userID,
        
      }));
    });
  }, [TOKEN_STRING, userID]);


  function signIn(userLog) {
    const user = {
      email: userLog.email,
      password: userLog.password,
    };

    return axios({
      url: "http://localhost:3002/public/login",
      method: "POST",
      data: user,
    })
      .then((res) => {
        if (res.data.message !== "404") {
          // le backend doit te renvoyer le token
          
          // return (
            localStorage.setItem("UserLogin", res.data.token)
          localStorage.setItem("UserId", res.data.id)
          localStorage.setItem("UserName", res.data.name)
          localStorage.setItem("UserEmail", res.data.email)
          // setValidate(true),
          // setIsLogIn(false))
          //  validate = true);
          setState((prevState) => {
            return {
              ...prevState,
              user_id: res.data.id,
              loggedIn: true,
  
            };
          });
          return (validate = true)
        }
      })
      .catch((err) => console.log(err));
  }

  function logout() {
    axios({
      url: "http://localhost:3002/public/logout",
      method: "POST",
      // data: user,
    })
      .then((res) => {
        localStorage.removeItem("UserLogin");
        localStorage.removeItem("UserId");
        localStorage.removeItem("UserName");
        localStorage.removeItem("UserEmail");
        setIsLogIn(false);
      })
      .catch((err) => console.log(err));
  }
  function register(userLog) {
    const user = {
      name: userLog.name,
      email: userLog.email,
      password: userLog.password,
    };
    axios({
      url: "http://localhost:3002/public/register",
      method: "POST",
      data: user,
    })
      .then((res) => {
        if (res.data.message !== "404") {
          // le backend doit te renvoyer le token
          localStorage.setItem("UserLogin", res.data.token);
          localStorage.setItem("UserId", res.data.id);
          localStorage.setItem("UserName", res.data.name);
          localStorage.setItem("UserEmail", res.data.email);
          setValidate(true);
          setIsLogIn(true);
        }
      })
      .catch((err) => console.log(err));
  }
  function UserUpDateInfo(
    userId,
    userName,
    userEmail,
    userPassword,
    userBrewerName
  ) {
    const user = {
      id: userId,
      name: userName,
      email: userEmail,
      password: userPassword,
      brewerName: userBrewerName,
    };
    axios({
      url: `http://localhost:3002/users/:${userID}`,
      headers: {
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
      method: "PUT",
      data: user,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function productUpDate(
    alcohol,
    brewery_id,
    ebc,
    ibu,
    id,
    img,
    product_name,
    product_type,
    stock_quantity,
    rate,
    unit_price
  ) {
    const product = {
      alcohol,
      brewery_id,
      ebc,
      ibu,
      id,
      img,
      product_name,
      product_type,
      stock_quantity,
      rate,
      unit_price,
    };
    axios({
      url: `http://localhost:3002/products/:${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
      method: "PUT",
      data: product,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function productDelete(id) {
    console.log(id);
    axios({
      url: `http://localhost:3002/products/${id}`,
      headers: {
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  // ======== return functions ==========

  return {
    state,
    setState,
    signIn,
    logout,
    register,
    validate,
    UserUpDateInfo,
    productUpDate,
    productDelete,
    isLogIn,
    setIsLogIn,
    logged,
  };
}
