// const TOKEN_KEY = "jwt";
export const isLogin = () => {
  if (localStorage.getItem("UserLogin")) {
    return true;
  }
  if (!localStorage.getItem("UserLogin")) {
    return false;
  }
};
