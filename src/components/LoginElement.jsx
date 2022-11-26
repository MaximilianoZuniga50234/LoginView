const LoginElement = () => {
  return (
    <div className="bg-blue-900 rounded-md m-auto px-2 py-2 w-1/3 h-1/2">
      <div className="bg-blue-800 rounded-md px-5 py-5 h-full text-center">
        <h1 className="mb-5 text-4xl text-center text-white font-semibold ">
          Welcome...
        </h1>
        <form className="w-auto">
          <input
            className="mt-3 mb-5 bg-blue-50 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="Username o E-mail"
          />
          <br />
          <input
            className="mb-5 bg-blue-50 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="Password"
            type="Password"
            key={"passwordField"}
          />
          <br />
          <div className="text-white text-xl font-medium">
            <input type="checkbox"/> See Password
          </div>
          <br />
          <button className="rounded-xl text-white bg-blue-500 border-2 border-blue-400 px-2 hover:bg-blue-400">
            Sing in
          </button>
          <br />
          <div className="text-white mt-5">
            <a href="">
              Do not have an account? Sing up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginElement;
