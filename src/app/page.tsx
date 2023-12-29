import Image from "next/image";
import Button from "./components/Button";
import backgroundImage from "../../public/assets/img/Footbal.jpg";
export default function Home() {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: 'url("/path/to/your/image.jpg")',
    // Additional background properties like size, position, etc. can be added here
  };

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between ">
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      className="p-8">
        <p className="text-2xl text-[white]">Put your money where you mouth is</p>
      </div>

      <div className="bg-black text-white w-full p-8">
        <p className="text-6xl text-center my-8">
          Get Predictions From Experts Around the World
        </p>
        <p className="text-center text-sm mt-4">
          This order your odds and a nice rate we give to you the best from the
          bestpunthers in your area
        </p>

        <div className="flex justify-around my-8">
          <div className="">
            <p className="te t-white-600 text-[2rem]">100+</p>
            <small className="text-grey-600 text-sm">Predictions Daily</small>
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
        <Button className="bg-[magenta] rounded-md px-12 py-3 font-semibold my-8">
          Join
        </Button>
      </div>
    </main>
  );
}
