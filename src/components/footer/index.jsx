import React from "react";
import {
  FaApple,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

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

const Footer = () => {
  return (
    <div className="bg-[#011B5B] px-5 md:px-20 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14">
        <div className="space-y-4">
          <h2 className="text-[#AAB5CD]">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </h2>
          <div className="flex items-center">
            <ul className="flex gap-5">
              <SocialLink href="/" Icon={FaFacebook} label="Facebook" />
              <SocialLink href="/" Icon={FaGoogle} label="Google" />
              <SocialLink href="/" Icon={FaApple} label="Apple" />
              <SocialLink href="/" Icon={FaInstagram} label="Instagram" />
              <SocialLink href="/" Icon={FaPinterest} label="Pinterest" />
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-[#FFA229] font-semibold">START A BUSINESS</h2>
          <ul className="space-y-3">
            <li className="text-[#AAB5CD]">
              <a href="/">Features</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Solutions</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Integrations</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Enterprise</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Solutions</a>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h2 className="text-[#FFA229] font-semibold">
            GOVERNMENT REGISTRATION
          </h2>
          <ul className="space-y-3">
            <li className="text-[#AAB5CD]">
              <a href="/">Partners</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Community</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Developers</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">App</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h2 className="text-[#FFA229] font-semibold">COMPLIANCE & TAX</h2>
          <ul className="space-y-3">
            <li className="text-[#AAB5CD]">
              <a href="/">Channels</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Scale</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Watch the Demo</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Our Competition</a>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h2 className="text-[#FFA229] font-semibold">BIS & CIDSCO</h2>
          <ul className="space-y-3">
            <li className="text-[#AAB5CD]">
              <a href="/">About Us</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">News</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Leadership</a>
            </li>
            <li className="text-[#AAB5CD]">
              <a href="/">Media Kit</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6">
        <button className="bg-[#FFA229] rounded-full p-4 text-white text-xl">
          <FaArrowUp />
        </button>
      </div>

      <div className="flex items-center justify-center mt-5">
        <h2 className="text-[#AAB5CD]">© 2024 Registerkaro. All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
