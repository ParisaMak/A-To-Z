import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
          <div className="w-full h-screen bg-gray-300 flex justify-center items-center sm:h-[500px] sm:w-[450px]">
            <div className="w-[320px] h-[400px]">
              <h1 className="text-3xl font-bold">Become a member</h1>
              <form className="w-full flex py-4 flex-col text-xs">
                <div className="w-full flex flex-col">
                  Email address:
                  <input
                    className="p-3 my-2 bg-white border-[1px] border-gray-400"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  Make a password:
                  <input
                    className="p-3 my-2 bg-white border-[1px] border-gray-400"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <input
                    className="p-3 my-2 bg-white border-[1px] border-gray-400"
                    type="date"
                  />
                </div>
                <div className="text-[11px] text-gray-700 flex items-center gap-1 my-2">
                  <input type="checkbox" /> By clicking 'Sign Up', I agree to the Terms and Conditions of the H&M membership.
                </div>
                <div className="w-full flex flex-col gap-3">
                  <button className="bg-black text-white py-3 font-bold">
                    Become a member
                  </button>
                  <Link to="/login" className="bg-white py-3 font-bold border-[1px] border-black text-center">
                    <button>
                      Login
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default SignUp;