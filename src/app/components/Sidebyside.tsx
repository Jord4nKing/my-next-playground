import Image from "next/image";

interface SideBySideProps {
  title: string;
  text: string;
  intro?: string;
  imgSrc?: string;
  bgColor?: string;   
  textColor?: string; 
  reverse?: boolean;
}

export default function SideBySide({
  title,
  text,
  intro,
  imgSrc,
  bgColor = "bg-white",   
  textColor = "text-gray-900", 
  reverse = false,
}: SideBySideProps) {
  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
    
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-2xl">{text}</p>
          <p className="text-small">{intro}</p>
        </div>

        {imgSrc && (
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src={imgSrc}
                alt={title}
                width={300}
                height={200}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
