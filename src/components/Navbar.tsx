import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-teal-500 body-font bg-black">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-5">
        <Link href={"/"} className="flex title-font font-medium items-center text-teal-400">
          <span className="ml-3 text-3xl font-bold">Tayyab.</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-base justify-center">
          <Link href={"/"} className="text-white hover:text-teal-500">
            Home
          </Link>
          <Link href={"/about"} className="text-white hover:text-teal-500">
            About
          </Link>
          <Link href={"/services"} className="text-white hover:text-teal-500">
            Services
          </Link>
          <Link href={"/skills"} className="text-white hover:text-teal-500">
            My Skills
          </Link>
          <Link href={"/projects"} className="text-white hover:text-teal-500">
            Projects
          </Link>
          <Link href={"/contact"} className="text-white hover:text-teal-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
