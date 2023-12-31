// "use client";
// import React, { useState } from "react";
// // import { Card, Button, Input, Typography } from "@material-tailwind/react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import * as yup from "yup";
// import { useFormik, Formik, Form, Field } from "formik";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Button from "@/app/components/Button";

// const Register = () => {
//   const router = useRouter();

//   const userSchema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().min(3).max(30).required(),
//     email: yup
//       .string()
//       .email("Please enter a valid email")
//       .required("Please input your email"),
//     country: yup.string().required("please enter a country"),
//     city: yup.string().required("please enter a city"),

//     password: yup.string().min(4).required(),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password")], "Password does not match")
//       .required("please Enter a password confirmation"),
//   });

//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     city: "",
//     password: "",
//     confirmPassword: "",
//   };

//   const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
//     initialValues: initialValues,
//     validationSchema: userSchema,
//     onSubmit: (values) => {
//       const userEmail = values.email;
//       const userPassword = values.password;

//       //   // Get existing users from local storage or initialize an empty array
//       //   const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//       //   // Check if the username already exists
//       //   const userExists = existingUsers.some(
//       //     (user) => user.userEmail === userEmail
//       //   );

//       //   if (!userExists) {
//       //     // Add the new user to the array
//       //     const newUser = { userEmail, userPassword };
//       //     existingUsers.push(newUser);

//       //     // Update local storage with the new array of users
//       //     localStorage.setItem("users", JSON.stringify(existingUsers));

//       //     // Redirect to login page
//       //     toast.success("Registration successful.");

//       //     router.push("/user/login");
//       //   } else {
//       //     alert("Username already exists. Please choose a different username.");
//       //     toast.error("Please provide an email and password.");
//       //   }
//     },
//   });

//   return (
//     <section className="flex flex-row justify-center items-center gap-6 ">
//       <ToastContainer />
//       <div
//         color="transparent"
//         // shadow={false}
//         className="bg-slate-100 px-12 shadow-2xl rounded-xl"
//       >
//         <label color="blue-gray" className="text-center text-[3rem]">
//           Register
//         </label>
//         <label color="gray" className="mt-1 text-[2rem] text-center">
//           Nice to meet you! Enter your details to register.
//         </label>
//         <Formik
//           onSubmit={handleSubmit}
//           className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:w-96"
//           initialValues={initialValues}
//           validationSchema={userSchema}
//         >
          
//           <div className="mb-1 flex flex-col gap-6">
//             <label className="color=[blue-gray] -mb-3">FirstName</label>
//             <input
//               required
//               // size="lg"
//               name="firstName"
//               value={values.firstName}
//               onBlur={handleBlur}
//               onChange={handleChange}
//               placeholder="firstName"
//               className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
//               // labelProps={{
//               //   className: "before:content-none after:content-none",
//               // }}
//             />
//             <p>
//               {errors.firstName && (
//                 <small className="text-[red]">{errors.firstName}</small>
//               )}
//             </p>

//             <div>
//               <p>lastName</p>
//               <input
//                 className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
//                 name="lastName"
//                 value={values.lastName}
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//               />
//               <p>
//                 {errors.lastName && (
//                   <small className="text-[red]">{errors.lastName}</small>
//                 )}
//               </p>
//             </div>
//             <div>
//               <p>Email</p>
//               <input
//                 className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
//                 placeholder="kolade@email.com"
//                 name="email"
//                 value={values.email}
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//               />
//               <p>
//                 {errors.email && (
//                   <small className="text-[red]">{errors.email}</small>
//                 )}
//               </p>
//             </div>

//             <div>
//               <p>What country do you live in</p>
//               <input
//                 className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
//                 name="country"
//                 value={values.country}
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//               />
//               <p>
//                 {errors.country && (
//                   <small className="text-[red]">{errors.country}</small>
//                 )}
//               </p>
//             </div>

//             <div>
//               <p>What city do you live in</p>
//               <input
//                 className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
//                 name="city"
//                 value={values.city}
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//               />
//               <p>
//                 {errors.city && (
//                   <small className="text-[red]">{errors.city}</small>
//                 )}
//               </p>
//             </div>

//             <label className=" color=[blue-gray] -mb-3">Password</label>
//             <input
//               type="password"
//               required
//               // size="lg"
//               placeholder="****"
//               name="password"
//               value={values.password}
//               onBlur={handleBlur}
//               onChange={handleChange}
//               className="h-[2.5rem] rounded-xl px-6 "
//             />
//             <p>
//               {errors.password && (
//                 <small className="text-[red]">{errors.password}</small>
//               )}
//             </p>
//             <label className="color=[blue-gray] -mb-3">Confirm Password</label>
//             <input
//               type="password"
//               required
//               // size="lg"
//               name="confirmPassword"
//               placeholder="****"
//               value={values.confirmPassword}
//               onBlur={handleBlur}
//               onChange={handleChange}
//               className="h-[2.5rem] rounded-xl px-6 "
//             />
//             <p>
//               {errors.confirmPassword && (
//                 <small className="text-[red]">{errors.confirmPassword}</small>
//               )}
//             </p>
//           </div>

//           <input
//             type="submit"
//             className="mt-6 bg-gray-700 hover-bg-gray-900 h-[2.5rem] rounded-xl w-full"
//           />
//           <label className="color=[blue-gray] mt-4  px-6 rounded py-[3rem] text-center font-normal">
//             Already have an account?
//           </label>

//           <Button >
//             Login
//           </Button>



          

//         </Formik>
//       </div>
//     </section>
//   );
// };

// export default Register;


"use client";
import React, {ChangeEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";


const Register = () => {
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

export default Register;
