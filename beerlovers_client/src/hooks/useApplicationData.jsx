import { useState, useEffect } from "react";
import axios, * as others from "axios";

export default function useApplicationData() {
  let [idUser, setIdUser] = useState("");
  const [validate, setValidate] = useState(false);
  const [state, setState] = useState({
    products: [],
    breweries: [],
    favourites: [],
    orders: [],
    orders_details: [],
  });
  console.log(idUser);
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3002/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("UserLogin")}`,
        },
      }),
      axios.get("http://localhost:3002/breweries", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("UserLogin")}`,
        },
      }),
      axios.get(`http://localhost:3002/favourites/:${idUser}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("UserLogin")}`,
        },
      }),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        products: all[0].data,
        breweries: all[1].data,
        favourites: all[2].data,
      }));
    });
  }, []);

  function signIn(userLog) {
    const user = {
      email: userLog.email,
      password: userLog.password,
    };
    axios({
      url: "http://localhost:3002/public/login",
      method: "POST",
      data: user,
    })
      .then((res) => {
        if (res.data.message !== "404") {
          // le backend doit te renvoyer le token
          localStorage.setItem("UserLogin", res.data.token);
          setIdUser(res.data.id);
          setValidate(true);
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
          setIdUser(res.data.id);
          setValidate(true);
        }
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
  };
}

// products: [
//   {
//     id: 1,
//     product_name: "Samuel Adams Noble Pils",
//     product_type: "Amber",
//     unit_price: 11,
//     alcohol: 5.7,
//     IBU: 19,
//     EBC: 13,
//     stock_quantity: 13,
//     brewerY_ID: 1,
//     rate: 5,
//   },
//   {
//     id: 2,
//     product_name: "Samuel Adams Cherry Wheat",
//     product_type: "Blonde",
//     unit_price: 11,
//     alcohol: 5.7,
//     IBU: 19,
//     EBC: 13,
//     stock_quantity: 13,
//     brewerY_ID: 1,
//     rate: 3,
//   },
//   {
//     id: 3,
//     product_name: "Happy Heron Pale Ale",
//     product_type: "Blonde",
//     unit_price: 12,
//     alcohol: 6.0,
//     IBU: 11,
//     EBC: 10,
//     stock_quantity: 13,
//     brewerY_ID: 2,
//     rate: 2,
//   },
//   {
//     id: 4,
//     product_name: "Atlantic Pale",
//     product_type: "Blonde",
//     unit_price: 17,
//     alcohol: 5.9,
//     IBU: 19,
//     EBC: 9,
//     stock_quantity: 1,
//     brewerY_ID: 3,
//     rate: 5,
//   },
//   {
//     id: 5,
//     product_name: "Warminster Special Bitter",
//     product_type: "White",
//     unit_price: 11,
//     alcohol: 5.7,
//     IBU: 19,
//     EBC: 13,
//     stock_quantity: 13,
//     brewerY_ID: 1,
//     rate: 1,
//   },
//   {
//     id: 6,
//     product_name: "Birra buena",
//     product_type: "IPA",
//     unit_price: 11,
//     alcohol: 5.7,
//     IBU: 19,
//     EBC: 13,
//     stock_quantity: 13,
//     brewerY_ID: 1,
//     rate: 1,
//   },
//   {
//     id: 7,
//     product_name: "Stella",
//     product_type: "Brown",
//     unit_price: 11,
//     alcohol: 5.7,
//     IBU: 19,
//     EBC: 13,
//     stock_quantity: 13,
//     brewerY_ID: 1,
//     rate: 1,
//   },
//   {
//     id: 8,
//     product_name: "Corona Special",
//     product_type: "Alambra",
//     unit_price: 11,
//     alcohol: 5.7,
//     IBU: 19,
//     EBC: 13,
//     stock_quantity: 13,
//     brewerY_ID: 1,
//     rate: 1,
//   },
//   {
//     id: 9,
//     product_name: "The best beer",
//     product_type: "Siracoli",
//     unit_price: 11,
//     alcohol: 5.7,
//     IBU: 19,
//     EBC: 13,
//     stock_quantity: 13,
//     brewerY_ID: 1,
//     rate: 1,
//   },
// ],
