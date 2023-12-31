import Link from "next/link";

export default function Footer() {
  return (
    <div className=" bg-black md:bg-[rgba(1,1,1,0)] text-slate-600 md:text-white ">
      {/* { new Date() } */}
      <div className="flex w-full justify-around  items-center text-md py-2">
        <Link href={"/pages/aboutus"}>About Us</Link>
        <Link href={"/pages/termsofservice"}>Terms of Service</Link>
        <Link href={"/pages/privacypolicy"}>Privacy Policy</Link>
      </div>
      <div className="flex justify-center items-center">
        <small className="text-center">CopyRight of Ashad,Olamide,Oloba</small>
      </div>
    </div>
  );
}
