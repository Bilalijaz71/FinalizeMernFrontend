import { Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Layout from "./HomePage/Layout";
import Protected from "./Protected/Protected";
import ProtectedUser from "./Protected/ProtectedUserInfo";
import ProtectedCartPage from "./Protected/ProtectedPage";
import GetPreviousOrders from "./Cart/pages/PreviousOrdersMap";

const RouteErrorpage = lazy(() => import("RouteErrorpage"));
const ClearCartComponent = lazy(() =>
  import("Components/Modules/Cart/pages/ClearCartComponent")
);
const CheckoutPage = lazy(() =>
  import("Components/Modules/Cart/pages/CheckoutPage")
);
const CartMap = lazy(() => import("Components/Modules/Cart/pages/CartMap"));
const CartDisplayer = lazy(() =>
  import("Components/Modules/Cart/pages/OuritemsDisplayer")
);
const CartHeader = lazy(() =>
  import("Components/Modules/Cart/pages/CartHeader")
);
const HomeComponent = lazy(() =>
  import("Components/Modules/HomePage/pages/HomeComponent")
);
const Footer = lazy(() => import("Components/Modules/Footer/pages/Footer"));
const Signup = lazy(() =>
  import("Components/Modules/Auth/pages/FormikControlles/SignUp")
);
const Signin = lazy(() =>
  import("Components/Modules/Auth/pages/FormikControlles/Signin")
);
const HeaderComponent = lazy(() =>
  import("Components/Modules/HomePage/pages/HeaderComponent")
);
const GetUserInformation = lazy(() =>
  import("./Users/pages/GetUserInformation")
);

const Index = () => {
  const AppHeader = Layout(HeaderComponent);
  const location = useLocation();
  return (
    <React.Fragment>
      <Suspense fallback={<div>...Loading</div>}>
        {location.pathname !== "/CartPage" && <AppHeader />}

        <Routes>
          <Route path="/CartPage" element={<CartHeader />} />
        </Routes>
        <Routes>
          <Route
            path="/CartPage"
            element={
              <div className="flex justify-center">
                <ClearCartComponent />
              </div>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Signin />
              </Protected>
            }
          />
          <Route
            path="/Signin"
            element={
              <Protected>
                <Signin />
              </Protected>
            }
          />
          <Route path="/home" element={<HomeComponent />} />
          <Route
            path="/Signup"
            element={
              <Protected>
                <Signup />
              </Protected>
            }
          />
          <Route
            path="/Myinfo"
            element={
              <ProtectedUser>
                <GetUserInformation />
              </ProtectedUser>
            }
          />
          <Route
            path="/Orders"
            element={
              <div className="grid grid-cols-2">
                <GetPreviousOrders />
              </div>
            }
          />
          <Route
            path="/Cart"
            element={
              <ProtectedCartPage>
                <CartDisplayer />
              </ProtectedCartPage>
            }
          />
          <Route
            path="/CartPage"
            element={
              <ProtectedCartPage>
                <div className=" grid grid-cols-2 gap-y-2 ">
                  <CartMap />
                </div>
              </ProtectedCartPage>
            }
          />
          <Route
            path="/Checkout"
            element={
              <ProtectedCartPage>
                <CheckoutPage />
              </ProtectedCartPage>
            }
          />
          <Route path="*" element={<RouteErrorpage />} />
        </Routes>
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};
export default Index;
