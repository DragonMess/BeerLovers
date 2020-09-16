import { useState, useEffect } from "react";
import axios, * as others from "axios";
import { Link, useHistory } from "react-router-dom";

export default function useApplicationData() {
  let [validate, setValidate] = useState(false);
  let [isLogIn, setIsLogIn] = useState(false);
  let [errMessage, setErrMessage] = useState();
  const history = useHistory();
  const [state, setState] = useState({
    products: [],
    breweries: [],
    favourites: [],
    // orders: [],
    // orders_details: [],
    user_id: "",
    user: { name: "", email: "" },
    loggedIn: false,
    errMessage: null,
  });
  // console.log(state);
  // user_id ? set
  let logged = false;
  const userID = localStorage.getItem("UserId");
  const TOKEN_STRING = localStorage.getItem("UserLogin");

  useEffect(() => {
    // const fetchData = () => {
    if (userID) {
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
          loggedIn: true,
          user_id: localStorage.getItem("UserId"),
          user: {
            name: localStorage.getItem("UserName"),
            email: localStorage.getItem("UserEmail"),
          },
          // user_id: userID,
          // loggedIn: userID ? true : false,
        }));
      });
    }
    // };
    // if (state.loggedIn) {
    //   fetchData();
    // }
  }, [TOKEN_STRING, state.loggedIn, userID]);

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
          history.push("/");
          // return (
          localStorage.setItem("UserLogin", res.data.token);
          localStorage.setItem("UserId", res.data.id);
          localStorage.setItem("UserName", res.data.name);
          localStorage.setItem("UserEmail", res.data.email);
          setState((prevState) => {
            return {
              ...prevState,
              user_id: res.data.id,
              user: { name: res.data.name, email: res.data.email },
              loggedIn: true,
            };
          });
          return (validate = true);
        }
        if (res.data.message === "404") {
          setState((prevState) => {
            return {
              ...prevState,
              user_id: "",
              loggedIn: false,
              errMessage: "ok",
            };
          });
        }
      })

      .catch((err) => {
        console.log(err);
      });
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
        // setIsLogIn(false);
      })
      .catch((err) => console.log(err));
  }
  function register(userLog) {
    const user = {
      name: userLog.name,
      email: userLog.email,
      password: userLog.password,
    };
    return (
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
            localStorage.setItem("UserName", JSON.parse(res.config.data).name);
            localStorage.setItem(
              "UserEmail",
              JSON.parse(res.config.data).email
            );
            setState((prevState) => {
              return {
                ...prevState,
                user_id: res.data.id,
                user: {
                  name: JSON.parse(res.config.data).name,
                  email: JSON.parse(res.config.data).email,
                },
                loggedIn: true,
              };
            });
            return (validate = true);
          }
          if (res.data.message === "404") {
            setState((prevState) => {
              return {
                ...prevState,
                user_id: "",
                loggedIn: false,
                errMessage: "ok",
              };
            });
          }
        })
        // console.log(validate);
        .catch((err) => console.log(err))
    );
  }

  // =========== Products ===================

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
    return axios({
      url: `http://localhost:3002/users/:${userID}`,
      headers: {
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
      method: "Put",
      data: user,
    })
      .then((res) => {
        console.log(res);
        console.log(JSON.parse(res.config.data).name);
        const updatedUser = {
          id: JSON.parse(res.config.data).id,
          name: JSON.parse(res.config.data).name,
          email: JSON.parse(res.config.data).email,
          brewerName: JSON.parse(res.config.data).brewerName,
        };
        localStorage.setItem("UserId", JSON.parse(res.config.data).id);
        localStorage.setItem("UserName", JSON.parse(res.config.data).name);
        localStorage.setItem("UserEmail", JSON.parse(res.config.data).email);

        setState((prevState) => {
          return {
            ...prevState,
          };
        });
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
    return axios({
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
    return axios({
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

  // =========== Favourites ===================

  function favouriteADD(product_id, user_id) {
    const favourite = {
      product_id,
      user_id,
    };
    return axios({
      url: `http://localhost:3002/favourites/`,
      headers: {
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
      method: "Post",
      data: favourite,
    })
      .then((res) => {
        const newFavourite = {
          id: res.data,
          product_id: res.config.data.product_id,
          user_id: res.config.data.user_id,
        };
        setState((prevState) => {
          return {
            ...prevState,
            favourites: [newFavourite, ...state.favourites],
          };
        });
      })
      .catch((err) => console.log(err));
  }

  function favouriteDelete(product_id, user_id) {
    const favourite = {
      product_id,
      user_id,
    };
    return axios({
      url: `http://localhost:3002/favourites/`,
      headers: {
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
      method: "DELETE",
      data: favourite,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  // === order Email =======

  function sendEmail(cartItems, userEmail) {
    const orderDetails = {
      cartItems: cartItems,
      email: userEmail,
    };
    return axios({
      url: `http://localhost:3002/api/forma`,
      headers: {
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
      method: "Post",
      data: orderDetails,
    })
      .then((res) => {
        console.log(res);
        // console.log(JSON.parse(res.config.data).name);
        // const updatedUser = {
        //   id: JSON.parse(res.config.data).id,
        //   name: JSON.parse(res.config.data).name,
        //   email: JSON.parse(res.config.data).email,
        //   brewerName: JSON.parse(res.config.data).brewerName,
        // };
        // localStorage.setItem("UserId", JSON.parse(res.config.data).id);
        // localStorage.setItem("UserName", JSON.parse(res.config.data).name);
        // localStorage.setItem("UserEmail", JSON.parse(res.config.data).email);

        // setState((prevState) => {
        //   return {
        //     ...prevState,
        //   };
        // });
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
    favouriteADD,
    favouriteDelete,
    logged,
    sendEmail,
    // isLogIn,
    // setIsLogIn,
  };
}
