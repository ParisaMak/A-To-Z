import { useState, } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../firebase/firebase.utils';

const defaultFormFields={
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
}
const SignUp = () => {
  const navigate = useNavigate();
  const [formFields ,setFormFields] = useState(defaultFormFields);
  const {displayName ,email ,password ,confirmPassword } = formFields;

  const resetFormFiels = () =>{
    setFormFields(defaultFormFields)
  }
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (e) =>{
   e.preventDefault();
   if(password !== confirmPassword){
    alert("password do not match");
    return
   }

   try{
    const {user}= await createAuthUserWithEmailAndPassword (email ,password);
    //  await createUserDocumentFromAuth(user,{displayName})
    console.log(user)
     navigate("/");
      resetFormFiels()
   }catch(error){
    if(error.code==='auth/email-already-in-use'){
      alert("can not create user,email already in use")
    } else {
      console.log("user creation encounter an error",error)
    } 
   } 
  }

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-full  bg-gray-300 flex justify-center items-center sm:h-[550px] sm:w-[450px]">
            <div className="w-full px-4 py-4 h-full flex flex-col justify-center items-centersm:w-[300px] sm:h-[500px]">
              <h1 className="text-3xl font-bold">Become a member</h1>
              <form onSubmit={handleSubmit} className="w-full flex py-4 flex-col text-xs">
                <div className="w-full flex flex-col">
                Display Name:
                  <input
                    className="p-3 my-2 bg-white border-[1px] border-gray-400"
                    type="text"
                    name='displayName'
                    placeholder="Name"
                    value={displayName}
                    onChange={handleChange }
                    required
                  />
                  Email address:
                  <input
                    className="p-3 my-2 bg-white border-[1px] border-gray-400"
                    type="email"
                    name='email'
                    value={email}
                    placeholder="Email"
                    autoComplete="email"
                    onChange={handleChange }
                    required
                  />
                  Make a password:
                  <input
                    className="p-3 my-2 bg-white border-[1px] border-gray-400"
                    type="password"
                    name='password'
                    value={password}
                    placeholder="Password"
                    autoComplete="current-password"
                    onChange={handleChange }
                    required
                  />
                   Confirm password:
                  <input
                    className="p-3 my-2 bg-white border-[1px] border-gray-400"
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    autoComplete="current-password"
                    onChange={handleChange }
                    required
                  />
               
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
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default SignUp;