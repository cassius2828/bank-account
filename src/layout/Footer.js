import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <p className="copy-rights">
        Developed By:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/cassius2828"
        >
          Cassius Reynolds
        </a>
      </p>
      <div className="icon-container">
        {/* Once I update my linkedIn I will add it to here. Preferrably after I create my large project and share my coding portfolio */}
        {/* <a target="_blank" rel="noreferrer" href="">
          <FontAwesomeIcon icon={faLinkedin} />
        </a> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/cassius2828/bank-account"
        >
          <FontAwesomeIcon size="2x" className="icon" icon={faGithub} />
        </a>{" "}
        <p id="date">01-25-2024</p>
      </div>{" "}
    </footer>
  );
};
