const Heroes = () => {
  return ( 
    <div 
      className="h-screen w-full z-1 mb-8"
    >
      <div className="absolute h-[135%] -translate-y-[25%] w-full bg-black/10 z-[2]"/>
      <img 
        src = '/heroes/wedd_2.jpg'
        className= "absolute h-[135%] w-full object-cover -translate-y-[25%]"
        style={{ filter: 'grayscale(50%)' }} 
      />

      <div className="">
        
      </div>
    </div>
  );
}
 
export default Heroes;