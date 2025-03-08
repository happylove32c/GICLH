import { useAuth } from "../context/AuthContext";

const SignInModal = () => {
  const { login, setShowModal } = useAuth();

  const handleLogin = () => {
    // Mock user login
    login({ name: "Admin" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Sign in to access Admin</h2>
        <button
          onClick={handleLogin}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg"
        >
          Sign In
        </button>
        <button
          onClick={() => setShowModal(false)}
          className="block mt-2 text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
