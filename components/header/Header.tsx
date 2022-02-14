import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import { MAIN_ORANGE } from "../../constants/styleConstants";
import { IsLightModeContext } from "../../context/IsLightModeProvider";
import {
  DARK_MODE_BACKGROUND,
  LIGHT_MODE_BACKGROUND,
} from "../../graphTheory/constants/styleConstants";

import styles from "./Header.module.scss";

const Header = () => {
  const { isLightMode, setIsLightMode } = useContext(IsLightModeContext);

  const pages = [
    { button: "Latest", href: "/" },
    { button: "Categories", href: "/articles" },
  ];

  const router = useRouter();

  const isInPath = (page) =>
    page.href !== "/" && router.asPath.startsWith(page.href);

  return (
    <div
      className={styles.header}
      style={{
        backgroundColor: isLightMode
          ? LIGHT_MODE_BACKGROUND
          : DARK_MODE_BACKGROUND,
      }}
    >
      <div style={{ justifySelf: "start", width: "370px" }}>
        <Link href="/">
          <h1 className={styles.name}>
            Shaking off the <i className={styles.firstName}>Rust</i>
            <span
              style={{
                position: "absolute",
                marginLeft: "4.5px",
                marginTop: "3px",
                transform: "rotate(45deg)",
              }}
            >
              <Image
                src={"/rustacean-flat-happy.png"}
                alt={"Rust Mascot"}
                height={24}
                width={42}
              />
            </span>
          </h1>
        </Link>
      </div>

      <div className={styles.optionsContainer}>
        {/*pages.map((page) => (
          <div>
            <h3
              className={styles.headerItem}
              style={{
                color:
                  (page.href === router.asPath || isInPath(page)) &&
                  MAIN_ORANGE,
              }}
            >
              <Link href={page.href}>{page.button}</Link>
            </h3>
          </div>
            ))*/}

        <button
          style={{
            border: 0,
            background: 0,
            marginLeft: "0.5rem",
            marginTop: "4px",
            cursor: "pointer",
          }}
          onClick={() => setIsLightMode((prev) => !prev)}
        >
          {isLightMode ? (
            <FiSun className={styles.icon} />
          ) : (
            <HiOutlineMoon className={styles.icon} color={"white"} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
