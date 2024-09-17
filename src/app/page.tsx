import Image from "next/image";
import Heroes from "./_components/heroes";
import Navbar from "./_components/navbar";
import AboutUs from "./_components/us";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Heroes />
        <AboutUs />
      </div>
    </>
  );
}
