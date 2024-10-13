import { Card } from "./card";

const images = [
  "/about/pic_3.jpg",
  "/about/pic_2.jpg",
  "/about/pic_1.jpg",
]

export const About = () => {

  return ( 
    <div 
      className="container border border-black h-auto" 
      id="about"
    >
      <div className="flex items-center">
        <div className="w-1/5">
          <p className="text-3xl font-semibold">
            <span className="text-[#3EAFC8] font-bold">CHIARA LANGGENG PERKASA.</span> KAMI MEMASTIKAN HARI SPESIAL ANDA MULUS DAN SERASI.
          </p>
        </div>
        <div className="relative">
          {images.map((image, idx) => {
            return(
              <div 
                key={idx}
                style={{
                  transform: `translateX(${idx*75}px) translateY(${idx*75}px)`
                }}
              >
                <Card 
                  image={image}
                  rotation={idx*5}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}