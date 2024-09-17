import Image from "next/image";

const Heroes = () => {
  return ( 
    <div 
      className="h-screen w-full z-1"
    >
      <div className="absolute h-[135%] w-full bg-black/10 z-[2]"/>
      <img 
        src = '/heroes/wedd_2.jpg'
        className= "h-[135%] w-full object-cover -translate-y-[25%]"
        style={{ filter: 'grayscale(50%)' }} 
      />
    </div>
  );
}
 
export default Heroes;