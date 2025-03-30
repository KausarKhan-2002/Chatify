import React, { useState } from "react";
import { formInputs } from "../../Utils/formInputs";
import { useValidator } from "../../Hooks/useValidator";
import { DEFAULT_IMG_URL } from "../../Utils/constant";
import { FaPenFancy } from "react-icons/fa";
import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import Login from "./Login";
import { useCloudinary } from "../../Hooks/useCloudinary";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [imgUrl, setImgUrl] = useState(null);
  const [step, setStep] = useState(1); // Step 1 or Step 2
  const [cloudinaryImg, setCloudinaryImg] = useState(null)
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
  });
  const cloudinary = useCloudinary()

  const validate = useValidator();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (validate(userInfo, "all")) return;
    } else {
      if (validate(userInfo, "login")) return;
    }

    cloudinary(imgUrl,setCloudinaryImg)

    console.log(userInfo);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setImgUrl(url);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-300 to-purple-200 px-4">
      <div className="w-full max-w-sm p-6 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
        <h2 className="text-3xl font-extrabold text-center text-slate-700">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        {isSignup && step === 1 && (
          <div className="relative flex justify-center mt-4">
            <img
              src={imgUrl || DEFAULT_IMG_URL}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              alt="Profile"
            />
            <label className="absolute bottom-2 right-25 bg-black hover:bg-gray-900 hover:scale-105 transition text-white flex items-center justify-center w-7 h-7 rounded-full cursor-pointer">
              <input type="file" onChange={handleFile} className="hidden" />
              <FaPenFancy />
            </label>
          </div>
        )}

        <div className="mt-6 space-y-4">
          {isSignup && step === 1 && (
            <SignupStep1
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              setStep={setStep}
            />
          )}

          {isSignup && step === 2 && (
            <SignupStep2
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              setStep={setStep}
              handleSubmit={handleSubmit}
            />
          )}

          {!isSignup && (
            <Login
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              handleSubmit={handleSubmit}
            />
          )}
        </div>

        <p className="mt-6 text-center text-sm text-slate-800">
          {isSignup ? "Already have an account?" : "New here?"}
          <span
            onClick={() => {
              setIsSignup(!isSignup);
              setStep(1);
            }}
            className="ml-2 text-blue-700 cursor-pointer hover:underline hover:text-blue-800 transition-all"
          >
            {isSignup ? "Log In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
