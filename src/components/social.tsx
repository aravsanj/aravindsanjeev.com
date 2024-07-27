import React from "react";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLink = ({ icon, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center hover:text-gray-500"
  >
    <span className={`text-xl`}>{icon}</span>
  </a>
);

const SocialLinks = ({ email, linkedIn, instagram, twitter, whatsapp }) => (
  <div className="flex gap-2">
    <SocialLink icon={<FaEnvelope />} url={`mailto:${email}`} />
    <SocialLink
      icon={<FaLinkedinIn />}
      url={`https://www.linkedin.com/in/${linkedIn}/`}
    />
    <SocialLink
      icon={<FaInstagram />}
      url={`https://www.instagram.com/${instagram}/`}
    />
    <SocialLink
      icon={<FaTwitter />}
      url={`https://www.twitter.com/${twitter}/`}
    />
    <SocialLink icon={<FaWhatsapp />} url={`https://wa.me/${whatsapp}/`} />
  </div>
);

export default SocialLinks;
