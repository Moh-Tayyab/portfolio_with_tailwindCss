import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-teal-500 body-font bg-black">
      <div className="container mx-auto flex-wrap justify-between p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-teal-400 mb-4 md:mb-0">
          <span className="ml-3 text-3xl font-bold">Tayyab.</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center gap-5 text-base justify-center">
          <Link href={"/"} className="mr-5 text-white hover:text-teal-500">
            Home
          </Link>
          <Link href={"/about"} className="mr-5 text-white hover:text-teal-500">
            About
          </Link>
          <Link
            href={"/services"}
            className="mr-5 text-white hover:text-teal-500">
            Services
          </Link>
          <Link
            href={"/skills"}
            className="mr-5 text-white hover:text-teal-500">
            My Skills
          </Link>
          <Link
            href={"/projects"}
            className="mr-5 text-white hover:text-teal-500">
            Project
          </Link>
          <Link
            href={"/contact"}
            className="mr-5 text-white hover:text-teal-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
