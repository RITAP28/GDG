import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Headers() {
  const navigate = useNavigate();
  const gdgNavbarList = useRef(null);
  const buttons = useRef([]);
  const navbarLogo = useRef(null);
  useGSAP(
    () => {
      gsap.from(gdgNavbarList.current, {
        y: -5,
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
      });
    },
    {
      scope: gdgNavbarList,
    }
  );
  useGSAP(
    () => {
      gsap.from(buttons.current.filter(Boolean), {
        y: -5,
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        stagger: 0.15,
      });
    },
    {
      scope: buttons,
    }
  );

  useGSAP(
    () => {
      gsap.from(navbarLogo.current, {
        y: -5,
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
      });
    },
    {
      scope: navbarLogo,
    }
  );

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 w-full">
      <div className="flex m-1 lg:m-2" ref={navbarLogo}>
        <img
          src={logo}
          alt="Logo"
          className="sm:h-8 sm:w-12 h-6 w-8 m-3 mt-4"
        />
        <div className="sm:flex sm:flex-col hidden">
          <span className="text-black ml-1 mt-2 sm:text-[14px] text-[11px] dark:text-gray-300">
            Google Developer Groups
          </span>
          <span className="text-gray-600 ml-1 sm:text-[11px] text-[9px] dark:text-gray-400">
            Tezpur University
          </span>
        </div>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ul
          ref={gdgNavbarList}
          className="flex flex-row gap-[50px] text-lg border-[1px] border-white rounded-[1.5rem] px-[50px] py-[15px] font-light"
        >
          {["Home", "About", "Projects", "Blog"].map((label, index) => (
            <li
              key={index}
              className="relative hover:cursor-pointer transition-all hover:font-semibold ease-in-out duration-300 hover:scale-110"
            >
              <button
                ref={(el) => (buttons.current[index] = el)}
                type="button"
                className="relative z-10"
                onClick={() => {
                  navigate(`/${label.toLowerCase()}`);
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}
