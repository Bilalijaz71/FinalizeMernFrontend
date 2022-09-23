import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const { user } = useSelector(state => state.Auth);

  if (user) {
    return <Navigate to="/home" />;
  }

  return children;
};
export default Protected;
