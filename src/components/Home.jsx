import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      <h1 className="text-white text-6xl">Este es el home</h1>
      <br />
      <button
        className="text-white text-lg bg-blue-600 rounded border-blue-500 border-2 hover:bg-blue-500"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
      <button
        className="text-white text-lg bg-blue-600 rounded border-blue-500 border-2 hover:bg-blue-500"
        onClick={() => navigate("/sing-up")}
      >
        Register
      </button>
    </div>
  );
};

export default Home;
