import SideBySide from "./components/Sidebyside"
import Hero from "./components/Hero"

export default function Home() {
  return (

    <>
    <Hero />
      <SideBySide
        title="Modern Development"
        text="From wireframe to launch, I build with Next.js, React, and Tailwind for scalable, fast websites."
        imgSrc="/homepage/Move+More+home+tilted.webp"
        bgColor="bg-gray-100"
        reverse
      />

        <SideBySide
        title="More information"
        text="From wireframe to launch, I build with Next.js, React, and Tailwind for scalable, fast websites."
        imgSrc="/homepage/6+laptop.webp"
        bgColor="bg-accent"
      />

      <SideBySide
              title="Modern Development"
              text="From wireframe to launch, I build with Next.js, React, and Tailwind for scalable, fast websites."
              intro="Project type: End-to-end app + branding Role: UX/UI designer + brand designer Industry: Health, Fitness"
              imgSrc="/homepage/Child+Homepage.webp"
              bgColor="bg-primary"
              reverse
       />
    </>
  
    
  );
}
