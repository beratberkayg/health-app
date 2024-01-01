import { valueType } from "@/context/siteContext";
import Link from "next/link";

const Links = (value: valueType | any) => {
  return (
    <div className="hidden md:flex md:justify-between md:items-center w-[50%] text-xl font-medium">
      <Link
        onClick={() => value.setToogle(false)}
        className="hover:scale-125"
        href={"/product"}
      >
        Ürünler
      </Link>
      <Link
        onClick={() => value.setToogle(false)}
        className="hover:scale-125"
        href={"/#hakkımızda"}
      >
        Hakkımızda
      </Link>
      <Link
        onClick={() => value.setToogle(false)}
        className="hover:scale-125"
        href={"/#iletisim"}
      >
        İletişim
      </Link>
    </div>
  );
};

export default Links;
