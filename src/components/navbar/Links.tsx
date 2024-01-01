import Link from "next/link";

const Links = () => {
  return (
    <div className="hidden md:flex md:justify-between md:items-center w-[50%] text-xl font-medium">
      <Link className="hover:scale-125" href={"/product"}>
        Ürünler
      </Link>
      <Link className="hover:scale-125" href={"/#hakkımızda"}>
        Hakkımızda
      </Link>
      <Link className="hover:scale-125" href={"/#iletisim"}>
        İletişim
      </Link>
    </div>
  );
};

export default Links;
