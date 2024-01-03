import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-9 pb-5 md:gap-7">
      <div className="flex items-center justify-center gap-1 md:gap-2.5">
        <img src="logo_big.png" alt="logo" />
        <h3 className="text-lg font-bold md:text-3xl">SHOPPERFY</h3>
      </div>
      <ul className="flex flex-col gap-8 text-lg font-semibold md:flex-row md:gap-14 md:font-semibold md:text-base">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className="flex gap-10 text-2xl">
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPinterest} />
        </li>
        <li>
          <FontAwesomeIcon icon={faWhatsapp} />
        </li>
      </ul>
      <div className="bg-gray-600 w-11/12 h-[1px]"></div>
      <div>
        <h4 className="text-gray-600 text-lg font-normal">
          Copyright @ 2023 - All Rights Reserved
        </h4>
      </div>
    </div>
  );
};

export default Footer;
