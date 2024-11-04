import Image from "next/image";
import corner from "../../../public/png-gold-border-corner-701751694532266avp6ojojup (1).png";

export default function FrameCornerGold() {
  return (
    <>
      <Image
        src={corner}
        alt="corner"
        width={150}
        height={150}
        className="absolute left-5 top-5 -rotate-90"
      />
      <Image
        src={corner}
        alt="corner"
        width={150}
        height={150}
        className=" absolute bottom-5 left-5 rotate-180"
      />
      <Image
        src={corner}
        alt="corner"
        width={150}
        height={150}
        className=" absolute bottom-5 right-5 rotate-90"
      />
      <Image
        src={corner}
        alt="corner"
        width={150}
        height={150}
        className=" absolute right-5 top-5 "
      />
    </>
  );
}
