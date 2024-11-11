import Image from "next/image";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
export default function Footer() {
  return (
    <footer
      id="footer"
      className="container mx-auto pb-5 pt-24 md:pt-32 xl:pt-40"
    >
      <div className="mb-16 grid grid-cols-[1fr_1fr] gap-4 gap-y-8 md:mb-32 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        <div className="col-span-2 mb-7 flex flex-col md:col-span-1 md:mb-0">
          <Image
            className="mb-7 w-[170px] md:mb-14 lg:w-[220px] xl:w-[320px]"
            src="/logo-dark.svg"
            width={320}
            height={210}
            alt="chatapp writen in light green"
          />
          <small className="opacity-60">
            The last team chat you’ll ever need.
          </small>
        </div>
        <div className="col-span-1 flex flex-col">
          <h3 className="mb-7">Help</h3>
          <ul className="flex flex-col gap-4">
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  Support
                </a>
              </small>
            </li>
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  Knowledgebase
                </a>
              </small>
            </li>
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  Tutorials
                </a>
              </small>
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col">
          <h3 className="mb-7">Features</h3>
          <ul className="flex flex-col gap-4">
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  Screen Sharing
                </a>
              </small>
            </li>
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  iOS & Android Apps
                </a>
              </small>
            </li>
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  File Sharing
                </a>
              </small>
            </li>
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  User Management
                </a>
              </small>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-7">Company</h3>
          <ul className="flex flex-col gap-4">
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  About Us
                </a>
              </small>
            </li>
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  Careers
                </a>
              </small>
            </li>
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  Contact Us
                </a>
              </small>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-7">Contact Us</h3>
          <ul className="flex flex-col gap-4">
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="mailto:info@chatapp.com">
                  info@chatapp.com
                </a>
              </small>
            </li>
            <li className="opacity-60">
              <small>
                <a className="underline-hover" href="#footer">
                  1-800-200-300
                </a>
              </small>
            </li>
            <li className="opacity-60">
              <small>
                <a
                  className="underline-hover"
                  href="https://maps.app.goo.gl/3yfF3t44uskiZUsU9"
                  target="_blank"
                >
                  3500 Deer Creek Rd Palo A
                </a>
              </small>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid items-center justify-items-center gap-4 md:grid-cols-[2fr_3fr_1fr] md:justify-items-start">
        <small className="opacity-60">© Copyright ChatApp Inc.</small>
        <ul className="flex flex-wrap place-content-center gap-4 md:flex-nowrap md:place-content-start">
          <li className="opacity-60">
            <small>
              <a className="underline-hover" href="#footer">
                Terms of Service
              </a>
            </small>
          </li>
          <li className="opacity-60">
            <small>
              <a className="underline-hover" href="#footer">
                Privacy Policy
              </a>
            </small>
          </li>
          <li className="opacity-60">
            <small>
              <a className="underline-hover" href="#footer">
                Partners & Affiliates
              </a>
            </small>
          </li>
          <li className="opacity-60">
            <small>
              <a className="underline-hover" href="#footer">
                Sitemap
              </a>
            </small>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a href="https://x.com" target="_blank">
            <IconBrandX className="h-6 w-6 text-green transition-transform duration-200 ease-in-out hover:scale-95 xl:h-8 xl:w-8" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <IconBrandFacebook className="h-6 w-6 text-green transition-transform duration-200 ease-in-out hover:scale-95 xl:h-8 xl:w-8" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <IconBrandLinkedin className="h-6 w-6 text-green transition-transform duration-200 ease-in-out hover:scale-95 xl:h-8 xl:w-8" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <IconBrandInstagram className="h-6 w-6 text-green transition-transform duration-200 ease-in-out hover:scale-95 xl:h-8 xl:w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
