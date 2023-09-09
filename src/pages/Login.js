import { Link, useNavigate } from "react-router-dom";
import { useState  } from 'react';
import { useDispatch } from "react-redux";
import { setUserId } from '../redux-toolkit/Slice/CartSlice';
import { setId } from '../redux-toolkit/Slice/FavoriteSlice';
import { login } from '../redux-toolkit/Slice/userSlice';
import { 
  signInWithGooglePopup ,
  // createUserDocumentFromAuth ,
  signInAuthUserWithEmailAndPassword } from '../firebase/firebase.utils';



const defaultFormFields={
  email:'',
  password:'',
}
const Login = () => {
  const [formFields ,setFormFields] = useState(defaultFormFields);
  const { email ,password } = formFields;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const resetFormFiels = () =>{
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }
  
  const logGoogleUser = async () => {
    try {
        const {user} = await signInWithGooglePopup();
        navigate("/profile");
        dispatch(login(user));
        dispatch(setUserId(user.uid));
        dispatch(setId(user.uid));

    } catch (error) {
        if (error.code === 'auth/popup-closed-by-user') {
            console.log('Google sign-in popup was closed before sign-in was complete.');
        } else {
            console.log('An error occurred during Google sign-in: ', error.message);
        }
    }
}
const handleSubmit = async (e) =>{
  e.preventDefault();
  try{
   const {user} = await signInAuthUserWithEmailAndPassword (email,password);
   dispatch(login(user));
   dispatch(setUserId(user.uid));
   dispatch(setId(user.uid));
   navigate("/profile" , { replace: true });
   resetFormFiels()

  }catch(error){
    if(error.code === 'auth/wrong-password'){
      alert("incorrect password for email")
    }else if(error.code ==='auth/user-not-found'){
      alert('No user associated with this email')
    }else{
      console.log(error)
    }
  }
 }

 return (
  <div className="w-full h-full flex justify-center items-center">
    <div className="w-full h-full  bg-gray-300 flex justify-center items-center sm:h-[450px] sm:w-[450px] ">
      <div className="w-full px-4 h-full gap-4  flex flex-col justify-center items-centersm:w-[300px] sm:h-[400px]">
        <h1 className="text-3xl font-bold">Login</h1>
        <form className="w-full flex flex-col text-xs gap-4 ">
          <div className="w-full flex flex-col">
            <label htmlFor="email">Email address:</label>
            <input
              className="p-3 my-2 bg-white border-[1px] border-gray-400"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              autoComplete="email"
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Make a password:</label>
            <input
              className="p-3 my-2 bg-white border-[1px] border-gray-400"
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              autoComplete="current-password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <button
              className="bg-black text-white py-3 font-bold text-sm"
              onClick={handleSubmit}
            >
              Login 
            </button>
          </div>
        </form>
        <div className="flex flex-row w-full gap-2">
          <button
            className="bg-blue-500 text-white py-3 font-bold w-full text-sm"
            onClick={logGoogleUser}
          >
            Login with Google
          </button>
          <Link
            to="/signup"
            className="bg-white py-3 font-bold border-[1px] border-black text-center w-full text-sm"
          >
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
      </div>
    </div>
  </div>
);
};

export default Login;