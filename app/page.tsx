"use client";

import BackgroundImage from "@/components/ui/backgroundImage";
import { pacifico } from "./fonts/fonts";
import NavSide from "@/components/ui/navSide";
import restaurantImage from "../public/leperrier-restaurants-1920x1080-f50_50.webp";
import restaurantLogo from "../public/Chez_Robert_et_Nina_Logo-removebg-preview.png";
import SocialLinkSegment from "@/components/ui/sociaLink";
import imagePresentation from "../public/imageExemple.webp";
import { useState } from "react";
import MenuBurger from "@/components/ui/menuBurger";
import Menu from "@/components/ui/menu";
import entrée from "../public/leperrier-restaurants-1920x1080-f50_50.webp";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <section className="flex">
        <MenuBurger isOpen={isOpen} setIsOpen={setIsOpen} />
        <BackgroundImage src={restaurantImage.src} />
        <div>
          <NavSide src={restaurantLogo.src} isOpen={isOpen} />
          <SocialLinkSegment />
        </div>
      </section>
      <section className="w-full bg-current p-10 text-lg md:h-screen md:w-8/12 md:text-xl xl:w-7/12 xl:text-2xl">
        <div className="rounded-3xl bg-primary p-5">
          <h1
            className={`text-center text-3xl ${pacifico.className} animate-slideUp antialiased`}
          >
            Chez Robert et Nina
          </h1>
          <h2 className="mb-5 text-center text-3xl">Restaurant traditionnel</h2>
          <div className="flex flex-col items-center gap-5 xl:flex-row">
            <Image
              src={imagePresentation.src}
              alt="imagePresentation"
              width={300} // Taille de base pour mobile
              height={300} // Taille de base pour mobile
              className="w-3/4 rounded-3xl md:w-1/2 xl:h-[450px] xl:w-[600px] xl:p-16" // Ajuste ces tailles en fonction du rendu souhaité
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 500px"
            />
            <p>
              "Chez Robert et Nina" vous invite à découvrir l'hospitalité
              roumaine au cœur de la France. Ce restaurant propose une cuisine
              authentique, mettant à l'honneur des plats traditionnels préparés
              avec passion. Dans une ambiance conviviale, savourez des ragoûts,
              des pains faits maison et des légumes frais, élaborés avec des
              ingrédients locaux et de saison. Que vous soyez amateur de mets
              réconfortants ou en quête de nouvelles saveurs, une visite chez
              "Chez Robert et Nina" vous promet un voyage culinaire riche en
              traditions.
            </p>
          </div>
        </div>
        <h2
          className={`text-3xl font-bold text-primary ${pacifico.className} mt-10 border border-primary p-10 text-center`}
        >
          Le Menu
        </h2>
        <section className="mt-10">
          <Menu title="Entrée" picturePresentation={entrée.src} />
        </section>
      </section>
    </>
  );
}
