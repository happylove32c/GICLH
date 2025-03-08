import { useAuth } from "../context/AuthContext";
import SignInModal from "./SignInModal";

const PrivateRoute = ({ element }) => {
  const { user, showModal, setShowModal } = useAuth();

  if (!user) {
    setShowModal(true);
    return <SignInModal />;
  }

  return element;
};

export default PrivateRoute;
