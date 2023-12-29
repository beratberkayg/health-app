import Link from "next/link";

const Links = () => {
  return (
    <div className="hidden md:flex">
      <Link href={"/product"}>Ürünler</Link>
      <Link href={"/#hakkımızda"}>Hakkımızda</Link>
      <Link href={"/#iletisim"}>İletişim</Link>
    </div>
  );
};

export default Links;
