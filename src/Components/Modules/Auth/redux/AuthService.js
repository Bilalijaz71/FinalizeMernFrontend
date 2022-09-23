import axios from "axios";

const Api_url = "http://localhost:8000/api/user/";

const register = async (mydata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(Api_url, mydata, config);
  console.log("reponse.data", response.data);
  if (response.data) {
    // console.log("set data in localstorage");
    // localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async Reqdata => {
  const response = await axios.post(Api_url + "login", Reqdata);

  if (response.data) {
    console.log("set data in localstorage for sign in");
    localStorage.setItem("loginuser", JSON.stringify(response.data));
  }
  return response.data;
};

const GetMe = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${Api_url}me`, config);
  localStorage.setItem("userinfo", JSON.stringify(response.data));

  return response.data;
};
const UpdateUser = async (reqdata, id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(Api_url + id, reqdata, config);
  console.log("response data is ", response.data);
  return response.data;
};

const DeleteUser = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(Api_url + id, config);
  console.log(response.data);
  let keysToRemove = ["loginuser", "userinfo"];

  keysToRemove.forEach(k => localStorage.removeItem(k));
  return response.data;
};

const Signout = async () => {
  let keysToRemove = ["loginuser", "userinfo"];

  keysToRemove.forEach(k => localStorage.removeItem(k));
};

const authService = {
  register,
  login,
  GetMe,
  UpdateUser,
  DeleteUser,
  Signout,
};
export default authService;
