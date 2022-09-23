import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedCartPage = ({ children }) => {
  const { user } = useSelector(state => state.Auth);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};
export default ProtectedCartPage;
