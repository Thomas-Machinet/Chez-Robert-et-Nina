import { cardProps } from "@/assets/Interface/menuProps";
import Image from "next/image";
const MealCard = ({ name, price, starterPicture }: cardProps) => {
  return (
    <>
      <div className="flex items-center gap-5 p-3 bg-muted-foreground rounded-xl shadow-xl shadow-slate-600">
        <Image
          src={starterPicture}
          alt="Starter Picture"
          width={50}
          height={50}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex flex-1 items-center justify-between">
          <h2 className="text-lg font-bold text-primary">{name}</h2>
          <p className="text-primary">{price}</p>
        </div>
      </div>
    </>
  );
};

export default MealCard;
