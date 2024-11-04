import Image from "next/image";
import { pacifico } from "../../../app/fonts/fonts";

const BackgroundImage = (props: { src: string }) => {
  return (
    <div className=" relative h-[75vh] w-full md:h-screen md:w-8/12 xl:h-screen xl:w-7/12">
      <Image
        src={props.src}
        alt="restaurantImages"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        fill // Remplace objectFit
        // Remplace layout="fill"
      />
      <div className="absolute left-5 top-1/2 w-80 rounded-xl bg-primary/50 p-5 font-bold text-white md:left-14 md:w-auto xl:left-32 xl:p-16">
        <h1
          className={`text-4xl ${pacifico.className} animate-slideUp antialiased md:text-5xl xl:text-7xl`}
        >
          Norbert et Nina
        </h1>
        <h2
          className={`text-2xl ${pacifico.className} animate-slideUp antialiased xl:text-5xl `}
        >
          Vous accueille dans leur restaurant
        </h2>
      </div>
    </div>
  );
};

export default BackgroundImage;
