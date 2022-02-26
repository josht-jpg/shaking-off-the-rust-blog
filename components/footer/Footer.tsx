import { GrMail } from "react-icons/gr";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from "react-icons/ai";
import styles from "./Footer.module.scss";

const EMAIL_ADDRESS = "joshtaylor361@gmail.com";

const socialMediaLinks = [
  {
    title: "Github",
    href: "https://github.com/josht-jpg",
    icon: <AiFillGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/joshua-taylor-11a8601b6/",
    icon: <AiFillLinkedin />,
  },
  {
    title: "Medium",
    href: "https://joshtaylor361.medium.com/",
    icon: <AiFillMediumSquare />,
  },
];

const sourceCodeHref = "https://github.com/josht-jpg/blog-portfolio";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a
          className={styles.sourceCodeLink}
          href={sourceCodeHref}
          target="_blank"
          rel="noreferrer"
        >
          This blog{`'`}s source code
        </a>

        <a href={`mailto: ${EMAIL_ADDRESS}`} className={styles.email}>
          <GrMail className={styles.emailIcon} />
          {EMAIL_ADDRESS}
        </a>
        <div className={styles.iconsContainer}>
          {socialMediaLinks.map((socialMediaLink) => (
            <button
              key={socialMediaLink.title}
              className={styles.socialMediaLink}
              title={socialMediaLink.title}
            >
              <a href={socialMediaLink.href} target="_blank" rel="noreferrer">
                {socialMediaLink.icon}
              </a>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
