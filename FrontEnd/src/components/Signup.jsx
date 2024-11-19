import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMAtch = (value) => {
    return value == password || "Password Do Not Match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    // console.log(userInfo);

    try {
      const response = await axios.post("/api/user/signup", userInfo);
      console.log(response.data);

      if (response.data) {
        toast.success("signUp successful");
      }
      localStorage.setItem("BuzzApp", JSON.stringify(response.data));
      setAuthUser(response.data);
    } catch (error) {
      if (error.response) toast.error("Error :" + error.response.data.error);
    }
  };
  return (
    <div className="bg-black flex flex-col md:flex-row h-screen items-center justify-center p-4 ">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-6 py-2 rounded-md space-y-3 w-96"
        >
          <div className="flex  items-center justify-center mb-10">
            <div>
              <img
                src="/buzz.png"
                alt=""
                style={{ width: "65px", height: "53px" }}
              />
            </div>
            <div>
              <h1 className="text-2xl text-center justify-center">
                Buzzz
                <span className="text-yellow-500 font-semibold">App</span>
              </h1>
            </div>
          </div>
          <h2 className=" text-2xl font-bold text-center text-white">
            Create a new account
          </h2>
          <h2 className="text-center ">
            To use Buzz please enter your details
          </h2>
          <br />
          {/* fullName */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("fullName", { required: true })}
            />
          </label>
          {errors.fullName && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}
          {/* email */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}
          {/* password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}
          {/* confirmPassword */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: validatePasswordMAtch,
              })}
            />
          </label>
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.confirmPassword.message}
            </span>
          )}
          {/* text and button */}
          <div className="flex justify-between">
            <p>
              Have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 underline cursor-pointer ml-2"
              >
                Login
              </Link>
            </p>
            <input
              className="text-white bg-purple-600 px-2 py-1 rounded-lg cursor-pointer"
              type="submit"
              value="Signup"
            />
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <img
          src="/side-img.svg"
          alt=""
          className="hidden xl:block h-screen w-[100%] object-cover bg-no-repeat items-end justify-end "
        />
      </div>
    </div>
  );
}

export default Signup;
