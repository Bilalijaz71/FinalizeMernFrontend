import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Components/Modules/Cart/redux/CartSlice";
import AuthReducer from "../Components/Modules/Auth/redux/UserSlice";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const Cartstore = persistReducer(persistConfig, CartReducer);
export const store = configureStore({
  reducer: { Myitems: Cartstore, Auth: AuthReducer },
  middleware: [thunk],
});
