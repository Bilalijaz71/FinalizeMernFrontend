import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedUser = ({ children }) => {
  const { userinfo } = useSelector(state => state.Auth);

  if (!userinfo) {
    return <Navigate to="/Signin" />;
  }

  return children;
};
export default ProtectedUser;
