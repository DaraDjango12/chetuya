"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "./components/Button";
import backgroundImage from "../../public/assets/img/Footbal.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./user/login/page";
import Register from "./user/register/page";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <main className=" w-full min-h-screen ">
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-between md:flex-row md:h-[100%]">
        <div className="h-[40vh] w-full md:h-[100vh] md:w-[50%]">
          <div
            className="p-8 md:h-[100%] md:w-[50%]"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          >
            <p className="text-2xl mt-8 text-[white]">
              Put your money where you mouth is
            </p>
          </div>
        </div>

        <div className="h-[50%] w-full md:h-[100vh] md:w-[50%]">
          <div className="bg-black text-white w-full p-8  md:h-[100%] md:w-full">
            <p className="text-6xl text-center my-8">
              Get Predictions From Experts Around the World
            </p>
            <p className="text-center text-sm mt-4">
              This order your odds and a nice rate we give to you the best from
              the bestpunthers in your area
            </p>

            <div className="flex justify-around my-8">
              <div className="">
                <p className="te t-white-600 text-[2rem]">100+</p>
                <small className="text-grey-600 text-sm">
                  Predictions Daily
                </small>
              </div>
              <div>
                <p className="text-white-600 text-[2rem]">10,000+</p>
                <small className="text-grey-600 text-sm">Users</small>
              </div>
              <div>
                <p className="text-white-600 text-[2rem]">1200+</p>
                <small className="text-grey-600 text-sm">Experts</small>
              </div>
            </div>
            <div className=" flex gap-8 items-center justify-center h-[50%]">
              <Button
                onClick={(event: any) => {
                  setShowRegister(!showRegister);
                }}
                className="bg-[magenta] rounded-md px-12 py-3 font-semibold "
              >
                Join
              </Button>
              {showRegister && <Register/>}
              <Button
                onClick={(event: any) => {
                  setShowLogin(!showLogin);
                }}
                className="bg-[magenta] rounded-md px-12 py-3 font-semibold"
              >
                Login
              </Button>
              {showLogin && <Login/>}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:bottom-[0.05rem] w-full">
        <Footer />
      </div>
    </main>
  );
}
