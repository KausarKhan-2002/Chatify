import React from "react";
import { useValidator } from "../../Hooks/useValidator";

function SignupStep1({ userInfo, setUserInfo, setStep }) {
  const handleChange = (e) => {
    setUserInfo((info) => ({ ...info, [e.target.name]: e.target.value }));
  };
  const validate = useValidator()

  const handleNext = () => {

    if (validate(userInfo, "next")) return

    setStep(2)
  }

  return (
    <>
      <div className="relative flex flex-col">
        <input
          type="text"
          value={userInfo.username}
          onChange={handleChange}
          name="username"
          placeholder="Username"
          className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/30 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none backdrop-blur-md"
        />
      </div>
      <div className="relative flex flex-col">
        <input
          type="email"
          value={userInfo.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/30 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none backdrop-blur-md"
        />
      </div>
      <button
        type="button"
        onClick={handleNext}
        className="w-full py-3 mt-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 hover:to-orange-500 rounded-xl transition-all shadow-lg hover:shadow-2xl cursor-pointer"
      >
        Next
      </button>
    </>
  );
}

export default SignupStep1;
