import Image from "next/image";
import separator from "../../../public/separator.svg";

const Separation = ({ width }: { width: number }) => {
  return (
    <div className="w-full">
      {" "}
      {/* Ajuste les marges et la largeur comme souhaité */}
      <Image
        src={separator}
        alt="Séparateur élégant"
        width={width}
        height={100}
      />
    </div>
  );
};

export default Separation;
