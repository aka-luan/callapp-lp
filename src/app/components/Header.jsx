"use client";
import Image from "next/image";
import Button from "./Button";
import HamburgerMenu from "./HamburguerMenu";

export default function Header() {
  return (
    <header className="bg-green text-sm text-lightgreen">
      <div className="flex justify-between px-8 lg:px-12">
        <a href="#">
          <Image
            src="/logo.svg"
            width={160}
            height={105}
            className="w-[130px] xl:w-[160px]"
            alt="chatapp writen in light green"
          />
        </a>

        <nav className="flex items-center">
          <HamburgerMenu />
          <ul className="hidden h-8 items-center gap-6 md:flex">
            <li>
              <a href="#product" className="underline-hover">
                Product
              </a>
            </li>
            <li>
              <a href="#product" className="underline-hover">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="underline-hover">
                Contact
              </a>
            </li>
            <span className="h-[inherit] w-[2px] bg-lightgreen opacity-60"></span>
            <li>
              <a href="#contact" className="underline-hover">
                Log In
              </a>
            </li>
            <li>
              <Button type={"secondary1"} isNav={true}>
                Try it Free
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
