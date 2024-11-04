import Image from "next/image";
import Link from "next/link";

export default function NavSide(props: { src: string; isOpen: boolean }) {
  console.log(props.isOpen);
  return (
    <>
      <nav
        className={`fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-12 bg-primary p-10 transition-transform duration-500 ease-in-out ${
          props.isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden  xl:hidden`}
      >
        <ul className="flex flex-col items-center gap-16 text-2xl">
          <Link key={"Entrée"} href={"/entrée"}>
            Entrée
          </Link>
          <li>Plat</li>
          <li>Dessert</li>
        </ul>
        <div className="rounded-2xl bg-black p-5">
          <Image
            src={props.src}
            width={500}
            height={350}
            alt="restaurantImages"
          />
        </div>
        <ul className="flex flex-col items-center gap-16 text-2xl">
          <li>Téléphone</li>
          <li>Adresse</li>
          <li>Horaires</li>
        </ul>
      </nav>
      <nav
        className={`fixed flex h-full flex-col items-center justify-center gap-48 bg-primary p-10 md:flex md:w-4/12 xl:w-2/12`}
      >
        <ul className="flex flex-col items-center gap-16 text-2xl">
          <Link href="/entrée" className="group relative">
            <span>Entrée</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link href="/plat" className="group relative">
            <span>Plat</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
          </Link>
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
        <ul className="flex flex-col items-center gap-16 text-2xl">
          <li>Téléphone</li>
          <li>Adresse</li>
          <li>Horaires</li>
        </ul>
      </nav>
    </>
  );
}
