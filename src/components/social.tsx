import React from "react";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLink = ({ icon, fillColor, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className={`inline-flex ${fillColor ? `text-[${fillColor}]` : ""} items-center hover:text-gray-500`}
  >
    <span className={`text-xl`}>{icon}</span>
  </a>
);

const SocialLinks = ({
  email,
  linkedIn,
  instagram,
  twitter,
  whatsapp,
  fillColor,
}) => (
  <div className="flex gap-2">
    <SocialLink
      fillColor={fillColor}
      icon={<FaEnvelope />}
      url={`mailto:${email}`}
    />
    <SocialLink
      fillColor={fillColor}
      icon={<FaLinkedinIn />}
      url={`https://www.linkedin.com/in/${linkedIn}/`}
    />
    <SocialLink
      fillColor={fillColor}
      icon={<FaInstagram />}
      url={`https://www.instagram.com/${instagram}/`}
    />
    <SocialLink
      fillColor={fillColor}
      icon={<FaTwitter />}
      url={`https://www.twitter.com/${twitter}/`}
    />
    <SocialLink
      fillColor={fillColor}
      icon={<FaWhatsapp />}
      url={`https://wa.me/${whatsapp}/`}
    />
  </div>
);

export default SocialLinks;
