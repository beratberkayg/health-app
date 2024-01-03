import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";

const Links = () => {
  return (
    <div className="hidden md:flex md:justify-between md:items-center md:gap-3 w-[60%]  text-2xl font-medium mx-2 ">
      <Link
        className="lg:hover:scale-125 flex justify-center items-center hover:text-blue-600 transition-all"
        href={"/product"}
      >
        <AiFillCaretRight /> Ürünler
      </Link>
      <Link
        className="lg:hover:scale-125 flex justify-center items-center gap-1 hover:text-blue-600 transition-all"
        href={"/#hakkımızda"}
      >
        <FaUser /> Hakkımızda
      </Link>
      <Link
        className="lg:hover:scale-125 flex justify-center items-center gap-1 hover:text-blue-600 transition-all"
        href={"/#iletisim"}
      >
        <FaPhoneAlt /> İletişim
      </Link>
    </div>
  );
};

export default Links;
