import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { FiX } from "react-icons/fi";
import images from "@/assets/images";

function Register() {
  return (
    <div className="w-screen bg-login-bg h-screen flex item justify-center items-center">
      <div className="flex flex-col min-h-400 max-w-[80vw] max-h-[90vh] min-w-600 h-650 bg-white rounded-2xl">
        <div className="w-full">
          <div className="flex h-53 px-4 items-center">
            <div className="flex basis-2/4">
              <FiX className="h-5 w-5" />
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
                <span className="break-word">Join Twitter today</span>
              </div>
            </div>
            <GoogleLogin buttonText="Sign up with Google" className="h-10 w-300 my-3 !opacity-100 !shadow-none justify-center !rounded-full !text-google-button-color !border  !border-solid !border-login-button-border" />
            <FacebookLogin textButton="Sign up with Facebook" cssClass="h-10 font-bold w-300 my-3 !opacity-100 !shadow-none !rounded-full !text-google-button-color !border  !border-solid !border-login-button-border" />
            <div className="flex w-full items-center mb-3">
              <div className="mx-1 bg-light-gray my-2 w-full h-px"></div>
              <div className="mx-1">
                <span>or</span>
              </div>
              <div className="mx-1 bg-light-gray my-2 w-full h-px"></div>
            </div>
            <div className="h-10 w-300 my-3 flex justify-center items-center !rounded-full !text-white bg-black">
              <div>
                <span>Sign up with phone or email</span>
              </div>
            </div>
            <div className="text-left text-sm">
                By signing up, you agree to the
                <a href="/">
                    <span className="text-sign-up-color"> Term of Service </span>
                </a>
                and
                <a href="/">
                    <span className="text-sign-up-color"> Privacy Policy</span>
                </a>
                , including
                <a href="/">
                    <span className="text-sign-up-color"> Cookie Use</span>
                </a>
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

export default Register;
