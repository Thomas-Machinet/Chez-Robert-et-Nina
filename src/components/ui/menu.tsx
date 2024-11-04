import { cardProps, MenuProps } from "@/assets/Interface/menuProps";
import { Starters } from "@/lib/placeholder-data";
import Image from "next/image";

const Menu = ({ title, picturePresentation }: MenuProps) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      <Image
        src={picturePresentation}
        alt="Picture Presentation"
        width={300}
        height={300}
      />
      <ul>
        {Starters.map((starter: cardProps) => (
          <li key={starter.id} className="flex items-center gap-5">
            <Image
              src={starter.starterPicture}
              alt="Starter Picture"
              width={100}
              height={100}
            />
            <div>
              <h2 className="text-lg font-bold text-primary">{starter.name}</h2>
              <p>{starter.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
