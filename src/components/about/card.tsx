import Image from "next/image"

interface CardProps {
  image: string
  rotation?: number
}

export const Card = ({
  image,
  rotation
}: CardProps) => {
  return (
    <div className="">
      <Image 
        src={image}
        alt="about gallery images"
        fill
        objectFit="cover"
        priority
        quality={100}
        className="border rounded-3xl w-[200px] h-[200px]"
      />
    </div>
  )
}
