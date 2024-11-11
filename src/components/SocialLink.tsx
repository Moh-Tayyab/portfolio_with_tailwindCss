import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/Moh-Tayyab" },
  { icons: <FaLinkedin />, path: "https://www.linkedin.com/in/ch-muhammad-tayyab/" },
  { icons: <FaYoutube />, path: "https://www.youtube.com/@codeclub-A/" },
  { icons: <FaTwitter />, path: "https://www.twitter.com/m_tayyab3366/" },
];

const Social = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} target="_blank" href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;