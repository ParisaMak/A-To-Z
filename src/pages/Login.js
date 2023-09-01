import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen">
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen flex justify-center items-center">
        <div className="w-[450px] h-[500px] bg-gray-300 flex justify-center items-center">
          <div className="w-[320px] h-[400px]">
            <h1 className="text-3xl font-bold">Login</h1>
            <form className="w-full flex flex-col text-xs gap-4 mt-4">
              <div className="w-full flex flex-col">
                <label htmlFor="email">Email address:</label>
                <input
                  className="p-3 my-2 bg-white border-[1px] border-gray-400"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <label htmlFor="password">Password:</label>
                <input
                  className="p-3 my-2 bg-white border-[1px] border-gray-400"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  minLength="8"
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <button className="bg-black text-white py-3 font-bold">
                  Login
                </button>
                <Link to="/signup" className="bg-white py-3 font-bold border-[1px] border-black text-center">
                  Become a member
                </Link>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-600 mt-2">
                <p className="flex items-center gap-1">
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember">Remember me</label>
                </p>
                <p>Need Help?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;