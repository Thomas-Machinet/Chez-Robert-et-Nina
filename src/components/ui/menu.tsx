import { cardProps, MenuProps } from "@/assets/Interface/menuProps";
import { Starters } from "@/lib/placeholder-data";
import Image from "next/image";
import MealCard from "./mealCard";

const Menu = ({ title, picturePresentation }: MenuProps) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-primary underline underline-offset-8">
        {title}
      </h1>
      <Image
        src={picturePresentation}
        alt="Picture Presentation"
        width={300}
        height={300}
      />
      <ul className="flex flex-col gap-7">
        {Starters.map((starter: cardProps) => (
          <li key={starter.id}>
            <MealCard
              id={starter.id}
              name={starter.name}
              price={starter.price}
              starterPicture={starter.starterPicture}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
