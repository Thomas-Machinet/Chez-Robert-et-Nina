"use client";

import BackgroundImage from "@/components/ui/backgroundImage";
import { pacifico } from "./fonts/fonts";
import NavSide from "@/components/ui/navSide";
import restaurantImage from "../public/leperrier-restaurants-1920x1080-f50_50.webp";
import restaurantLogo from "../public/Chez_Robert_et_Nina_Logo-removebg-preview.png";
import SocialLinkSegment from "@/components/ui/sociaLink";
import { useState } from "react";
import MenuBurger from "@/components/ui/menuBurger";
import Menu from "@/components/ui/menu";
import entrée from "../public/leperrier-restaurants-1920x1080-f50_50.webp";

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
          <h2 className="text-center text-3xl">Restaurant traditionnel</h2>
          <p className="mt-5">
            Chez Robert et Nina" vous invite à découvrir la chaleur de
            l’hospitalité roumaine en plein cœur de la France. Ce restaurant
            unique est spécialisé dans une cuisine authentique, offrant une
            carte riche en plats traditionnels, préparés avec passion et respect
            des recettes d’antan. Dans une ambiance conviviale et accueillante,
            "Chez Robert et Nina" est l’endroit idéal pour explorer des saveurs
            venues d’ailleurs : des ragoûts savoureux aux pains faits maison, en
            passant par des plats de légumes frais et colorés, tous élaborés
            avec des ingrédients locaux et de saison. Que vous soyez amateur de
            mets réconfortants ou curieux de nouvelles saveurs, une visite chez
            "Chez Robert et Nina" vous promet un voyage culinaire inoubliable,
            célébrant un héritage riche et varié. Venez partager une expérience
            gastronomique immersive, où l’âme des traditions roumaines se révèle
            dans chaque assiette !
          </p>
        </div>
        <section className="mt-10">
          <Menu title="Entrée" picturePresentation={entrée.src} />
        </section>
      </section>
    </>
  );
}
