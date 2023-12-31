"use client";
import React, {ChangeEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin =(event: React.FormEvent<HTMLFormElement>) => {

    // // Get existing users from local storage or initialize an empty array
    // const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // // Check if the entered username and password match any user
    // const isValidUser = existingUsers.some(user => user.userEmail === email && user.userPassword === password);

    // if (isValidUser) {
    //   // Redirect to the dashboard or home page
    //   toast.success("Login successful..")
      
    //   router.push('/movies');
    // } else {
    //   alert('Invalid username or password. Please try again.');
    //   toast.error("Invalid email or password.");
    // }


    
    
  };

  return (
    <section className="flex h-[90vh] flex-row justify-center text-[black] items-center gap-6 p-24">
      <ToastContainer />
      <div
        color="transparent"
        // shadow={false}
        className="bg-slate-100 p-12 shadow-2xl rounded-xl"
      >
        <label
          
          color="blue-gray"
          className="text-center text-[3rem]"
        >
          Login
        </label>
        <label color="gray" className="mt-1 text-[2rem] text-center">
          Welcome Back! Enter your details to Login
        </label>
        <form  className="mt-8 mb-2 w-80 mx-auto first-letter: max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <label  color="blue-gray" className="-mb-3">
              Your Email
            </label>
            <input
              
              placeholder="name@mail.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl focus:!border-t-gray-900 px-4"
            //   labelProps={{
            //     className: "before:content-none after:content-none",
            //   }}
            />
            <label  color="blue-gray" className="-mb-3">
              Password
            </label>
            <input
              required
              type="password"
            //   size="lg"
              placeholder="****"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl focus:!border-t-gray-900 px-4"
              
            />
          </div>
          <div></div>
          <Button
            className="mt-6 w-full py-2 rounded-xl bg-gray-700 hover-bg-gray-900"
            
            onClick={(event: any)=>{handleLogin}}
          >
            Login
          </Button>
          <p color="gray" className="mt-4 text-center font-normal">
            Don&apos;t have an account?{" "}
            <a
              href="/user/register"
              className="font-medium  text-[green] hover:text=[purple]"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
