import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock3 } from "lucide-react";
import Separation from "./separation";
import { pacifico } from "../../../app/fonts/fonts";

export default function NavSide(props: { src: string; isOpen: boolean }) {
  return (
    <>
      <nav
        className={`fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-10 bg-primary p-8 transition-transform duration-500 ease-in-out ${
          props.isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden  xl:hidden`}
      >
        <div className="rounded-2xl bg-black p-5">
          <Image
            src={props.src}
            width={220}
            height={500}
            alt="restaurantImages"
          />
        </div>
        <ul
          className={`flex flex-col items-center gap-2 ${pacifico.className} text-lg `}
        >
          <Link key={"Entrée"} href={"/entrée"}>
            Entrée
          </Link>
          <Separation width={250} />
          <li>Plat</li>
          <Separation width={250} />
          <li>Dessert</li>
        </ul>
        <ul className="flex flex-col justify-center gap-5 rounded-xl bg-primary_light p-8 shadow-2xl">
          <li className="flex items-center gap-5">
            <Phone />
            <p>09 79 34 65 96</p>
          </li>
          <li className="flex items-center gap-5">
            <MapPin />
            <div>
              <p>40 Av. de la Gare </p>
              <p>45340 Beaune-la-Rolande</p>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <Clock3 />
            <div className="text-left">
              <p>Lundi au Samedi : </p>
              <p>11:30 - 15:00</p>
              <p>19:00 - 23:00</p>
              <p>Fermé le Dimanche</p>
            </div>
          </li>
        </ul>
      </nav>
      <nav
        className={`fixed flex h-full flex-col items-center justify-center gap-32 bg-primary p-5 md:flex md:w-4/12 xl:w-2/12`}
      >
        <ul
          className={`flex flex-col items-center gap-8 text-2xl ${pacifico.className}`}
        >
          <Link href="/entrée" className="group relative">
            <span>Entrée</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Separation width={250} />
          <Link href="/plat" className="group relative">
            <span>Plat</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Separation width={250} />
          <Link href="/dessert" className="group relative">
            <span>Dessert</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
          </Link>
        </ul>
        <div className="rounded-2xl bg-black p-5">
          <Image
            src={props.src}
            width={500}
            height={350}
            alt="restaurantImages"
          />
        </div>
        <ul
          className={`flex flex-col justify-center gap-3 rounded-2xl bg-primary_light p-5 text-lg shadow-2xl`}
        >
          <li className="flex items-center gap-5">
            <Phone />
            <p>09 79 34 65 96</p>
          </li>
          <li className="flex items-center gap-5">
            <MapPin />
            <div>
              <p>40 Av. de la Gare </p>
              <p>45340 Beaune-la-Rolande</p>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <Clock3 />
            <div className="text-left">
              <p>Lundi au Samedi : </p>
              <p>11:30 - 15:00</p>
              <p>19:00 - 23:00</p>
              <p>Fermé le Dimanche</p>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
