import { useState } from "react";
import { EyeIcon, Logo } from "../assets";
import Button from "./button";

export default function InputForm() {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="lg:py-10 lg:px-20 px-2 py-4 lg:mb-2 mb-20 w-full h-[100vh]">
      {/* Logo */}
      <div>
        <img src={Logo} alt="logo" />
      </div>

      <div className="p-14">
        <div>
          <h1 className=" text-black font-[700] text-[48px] leading-[48px]">
            Sign In
          </h1>
          <p className="text-[18px] leading-[27px] font-normal text-[#b0b9c6] relative mt-10 gap-2">
            Don’t have an account?{" "}
            <span className=" text-[#476759] border-b-2  border-b-[#476759] font-[400]">
              Create now{" "}
            </span>
          </p>
        </div>

        <div className="mt-5">
          <form>
            <div className=" flex flex-col">
              <label className=" text-[#b0b9c6]"> E-mail </label>
              <input
                className="border rounded-lg h-[50px] px-5 outline-none relative top-2"
                type="email"
                id="emailAddress"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="relative flex flex-col top-6">
              <label className="text-[#b0b9c6] mb-2">Password</label>
              <div className="relative w-full">
                <input
                  className="border rounded-lg h-[50px] w-full pl-5 pr-12 outline-none"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="@#*%"
                  required
                />
                {/* Toggle password visibility button */}
                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 border-l px-2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <img src={EyeIcon} alt="Hide Password" />
                  ) : (
                    <img src={EyeIcon} alt="Show Password" />
                  )}
                </button>
              </div>
            </div>
          </form>

          <div className="flex justify-between mt-10">
            <div className="flex gap-2">
              <input type="checkbox" />
              <p> Remember me</p>
            </div>
            <p>Forgot Password? </p>
          </div>

          <div className="mt-6">
            <button className=" text-center items-center bg-[#1C4532] text-[#FFF] w-full h-[55px] rounded-3xl">
              Sign in
            </button>
          </div>

          <div className="flex justify-between items-center gap-2 mt-4">
            <div className="border w-[45%] h-[1px]" />
            <div className=" w-[5%]">
              <p> OR </p>
            </div>
            <div className="border w-[45%]  h-[1px]" />
          </div>

          <div className="relative">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
