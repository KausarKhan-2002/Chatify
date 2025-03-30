import { BiShow, BiHide } from "react-icons/bi";

function SignupStep2({userInfo, setUserInfo, showPassword, setShowPassword, setStep, handleSubmit}) {
    const handleChange = (e) => {
        setUserInfo((info) => ({ ...info, [e.target.name]: e.target.value }));
      };
  return (
    <>
      <div className="relative flex flex-col">
        <input
          type={showPassword}
          value={userInfo.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/30 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none backdrop-blur-md"
        />
        <p
          className="absolute top-3 right-3 text-2xl text-slate-600 cursor-pointer"
          onClick={() =>
            setShowPassword(showPassword === "password" ? "text" : "password")
          }
        >
          {showPassword === "password" ? <BiShow /> : <BiHide />}
        </p>
      </div>
      <div className="relative flex flex-col">
        <input
          type="password"
          value={userInfo.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/30 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none backdrop-blur-md"
        />
      </div>
      <div className="relative flex flex-col">
        <textarea
          value={userInfo.bio}
          onChange={handleChange}
          name="bio"
          placeholder="Bio"
          className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/30 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none resize-none backdrop-blur-md"
          rows="3"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition-all shadow-md cursor-pointer"
        >
          Back
        </button>
        <button
        onClick={handleSubmit}
          type="submit"
          className="px-6 py-2 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-all shadow-md cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default SignupStep2;