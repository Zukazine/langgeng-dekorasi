import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
  return ( 
    <div className="h-[15%] w-full absolute bg-gradient-to-b from-black/50 to-black/0 flex items-center justify-between px-28 z-[99999] backdrop-blur-sm">
      <Image
        src="/navbar/logo.png"
        alt='logo perusahaan'
        width={300}
        height={300}
      />
      <div className="flex items-center justify-center gap-14 ">
        <Link href={'/#about'} className="group flex flex-col items-start justify-start relative">
          <p className="nav-button">
            HOME
          </p>
          <div 
            className="nav-button-hover"
          />
        </Link>
        <Link href={'/#about'} className="group flex flex-col items-start justify-start relative">
          <p className="nav-button">
            ABOUT
          </p>
          <div 
            className="nav-button-hover"
          />
        </Link>
        <Link href={'/#about'} className="group flex flex-col items-start justify-start relative">
          <p className="nav-button">
            GALLERY
          </p>
          <div 
            className="nav-button-hover"
          />
        </Link>
        <Link href={'/#about'} className="group flex flex-col items-start justify-start relative">
          <p className="nav-button">
            PRICING
          </p>
          <div 
            className="nav-button-hover"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-3 cursor-pointer group">
        <p className="nav-button">
          CONTACT US
        </p>
        <div className="w-9 h-9 bg-white flex items-center justify-center p-2 rounded-full group-hover:bg-black/30 group-hover:backdrop-blur-sm transition-all duration-200">
          <FaEnvelope className="w-4 h-4 text-black group-hover:text-[#fadfb5] transition-all duration-200"/>
        </div>
      </div>
    </div>
  );
}
 
export default Navbar;