import { useState } from "react";
import Button from "./Button";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex h-10 w-10 items-center justify-center text-lightgreen focus:outline-none"
        aria-label="hamburguer menu button"
      >
        <div className="space-y-2">
          <span
            className={`block h-0.5 w-7 transform bg-lightgreen transition duration-300 ease-in-out ${isOpen ? "translate-y-3 rotate-45" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-7 bg-lightgreen transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-7 transform bg-lightgreen transition duration-300 ease-in-out ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          ></span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-16 z-50 flex h-full w-full items-center justify-center bg-green text-xl text-lightgreen">
          <ul className="mt-[-5rem] flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Product
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Contact
              </a>
            </li>
            <li className="mb-7 h-[2px] w-8 bg-lightgreen opacity-60"></li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Log In
              </a>
            </li>
            <li>
              <Button type={"secondary1"} isNav={true}>
                Try it Free
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
