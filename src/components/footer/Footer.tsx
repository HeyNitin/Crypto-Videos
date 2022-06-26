import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (): JSX.Element => {
  return (
    <footer className="flex space-x-6 justify-center bg-slate-200 p-4 items-baseline">
      <a
        href="https://github.com/HeyNitin/Crypto-Videos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="text-4xl hover:text-slate-600"
        />
      </a>
      <a
        href="https://twitter.com/07_Nitin_07"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-4xl hover:text-blue-400"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/heynitin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-4xl hover:text-blue-600"
        />
      </a>
    </footer>
  );
};

export { Footer };
