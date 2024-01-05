import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faX,
  faPerson,
  faPersonDress,
  faChild,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeLink = "text-rose-600 border-b-4 pb-2 border-rose-600 border-";

  return (
    <div className="flex items-center justify-between p-5 px-3 py-3 border-b border-gray-600 sticky w-full md:px-5 md:justify-between lg:justify-around">
      <div className="flex items-center justify-center gap-1 md:gap-2.5">
        <button onClick={openMenu} className="mr-2 text-xl md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <NavLink to="./" className="flex items-center gap-2">
          <img className="w-4/12 md:w-full" src="./logo.png" alt="logo" />
          <p className="text-base font-bold md:text-2xl">SHOPPERFY</p>
        </NavLink>
      </div>
      <div
        ref={menuRef}
        className={`${
          isMenuOpen
            ? "translate-x-0  duration-300 ease-in shadow-2xl shadow-black drop-shadow-2xl"
            : "-translate-x-[100%] duration-500 ease-out md:translate-x-0"
        } flex flex-col items-start gap-1 absolute top-0 left-0 bg-white w-[87%] h-screen md:relative md:w-auto md:h-auto md:shadow-[0%]`}
      >
        <div className="flex items-center justify-center gap-2.5 p-5 pt-[18.9px] pb-0 md:gap-2.5 md:hidden">
          <button onClick={openMenu} className="mr-4 text-lg">
            <FontAwesomeIcon icon={faX} />
          </button>
          <img className="w-4/12 md:w-full" src="./logo.png" alt="logo" />
          <p className="text-base font-bold md:text-2xl">SHOPPER</p>
        </div>
        <div className="bg-gray-600 w-full h-[1px] mb-7 md:hidden"></div>
        <ul className="flex flex-col items-start gap-16 text-lg font-normal p-5 md:p-0 md:font-semibold md:text-base md:items-center md:flex-row md:gap-10 lg:gap-16">
          <li className="flex items-center gap-4">
            <FontAwesomeIcon
              className="text-xl md:hidden"
              icon={faBagShopping}
            />
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Shop
            </NavLink>
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon className="text-xl md:hidden" icon={faPerson} />
            <NavLink
              to="/Men"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Men
            </NavLink>
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon
              className="text-xl md:hidden"
              icon={faPersonDress}
            />
            <NavLink
              to="/Women"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Women
            </NavLink>
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon className="text-xl md:hidden" icon={faChild} />
            <NavLink
              to="/Kids"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Kids
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <NavLink to="/LoginSignup">
          <button className="text-xl">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </NavLink>
        <NavLink to="/Cart" className="flex">
          <button className="text-xl">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <div className="flex items-center justify-center rounded-full text-white text-xs w-4 h-4 bg-red-600 -ml-1 -mt-1">
            0
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
