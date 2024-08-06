import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="font-Inter text-5xl font-bold text-white mx-2 w-10">PG</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/pillala-ganesh-33a849308/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/GANESH300118"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
