import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { FiX } from "react-icons/fi";
import images from "@/assets/images";

function Login() {
  return (
    <div className="w-screen bg-login-bg h-screen flex item justify-center items-center">
      <div className="flex flex-col min-h-400 max-w-[80vw] max-h-[90vh] min-w-600 h-650 bg-white rounded-2xl">
        <div className="w-full">
          <div className="flex h-53 px-4 items-center">
            <div className="flex basis-2/4" >
            <FiX  className="h-5 w-5" />
            </div>
           
            <div className="flex items-center h-full">
              <img className="w-9 " src={images.logo} alt="" />
            </div>
            <div className="basis-2/4"></div>
          </div>
        </div>
        <div className="box-border max-w-364 min-w-364 mx-auto px-8">
            <div>
                <div className="my-5">
                    <div className="text-color-black font-bold text-31 text-left leading-36">
                        <span className="break-word">
                            Sign in to Twitter
                        </span>
                    </div>
                </div>
                <GoogleLogin className="h-10 w-300 my-3 !opacity-100 !shadow-none justify-center !rounded-full !text-google-button-color !border  !border-solid !border-login-button-border" />
                <FacebookLogin cssClass="h-10 font-bold w-300 my-3 !opacity-100 !shadow-none !rounded-full !text-google-button-color !border  !border-solid !border-login-button-border" />
                <div className="flex w-full items-center mb-3">
                    <div className="mx-1 bg-light-gray my-2 w-full h-px">
                    </div>
                    <div className="mx-1">
                        <span>or</span>
                    </div>
                    <div className="mx-1 bg-light-gray my-2 w-full h-px">
                    </div>
                </div>
                <div className="w-full relative h-14 border rounded border-login-button-border">
                  <input className="form__input absolute inset-0 px-3 pt-4 pb-1 focus:sign-up-color" type="text" id="email" autoComplete="off" placeholder=" " />
                  <label className="form__label transition-all duration-500 absolute left-3 top-3.5" htmlFor="email">Phone, email, or username</label>
                </div>
                <div className="h-10 w-300 my-6 flex justify-center items-center !rounded-full !text-white bg-black">
                  <div>
                    <span>Next</span>
                  </div>
                </div>
                <div className="h-10 font-bold w-300 my-3 flex justify-center items-center !rounded-full !text-google-button-color !border  !border-solid !border-login-button-border">
                  <div>
                    <span>Forgot password?</span>
                  </div>
                </div>
                <div className="mt-10 font-normal text-tiny text-left">
                  Don't have an account?
                  <span className="text-sign-up-color"> Sign up</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
