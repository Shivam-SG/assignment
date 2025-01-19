import React from "react";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactInfo = ({ href, Icon, label, rotate }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-white hover:text-gray-300 px-5"
    aria-label={label}
  >
    <Icon className={`text-xl ${rotate || ""}`} />
    <span>{label}</span>
  </a>
);

const SocialLink = ({ href, Icon, label }) => (
  <li>
    <a
      href={href}
      className="text-white text-xl hover:text-gray-300"
      aria-label={label}
    >
      <Icon />
    </a>
  </li>
);

const Header = () => {
  return (
    <div className="bg-[#1C4670] flex justify-end px-20 py-2">
      <div className="flex items-center border-r border-gray-300">
        <ContactInfo
          href="mailto:info@registerkaro.in"
          Icon={IoMail}
          label="info@registerkaro.in"
        />
      </div>
      <div className="flex items-center border-r border-gray-300">
        <ContactInfo
          href="tel:+918447746183"
          Icon={IoIosCall}
          label="+918447746183"
          rotate="-rotate-90"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-3 px-5">
          <SocialLink href="/" Icon={FaInstagram} label="Instagram" />
          <SocialLink href="/" Icon={FaFacebook} label="Facebook" />
          <SocialLink href="/" Icon={FaXTwitter} label="Twitter" />
          <SocialLink href="/" Icon={FaPinterest} label="Pinterest" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
