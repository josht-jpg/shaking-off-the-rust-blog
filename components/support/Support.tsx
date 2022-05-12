import { MAIN_ORANGE } from "../../constants/styleConstants";
import styles from "./Support.module.scss";

const Support = () => {
  return (
    <div className={styles.support}>
      <h2>Support Me</h2>

      <p>
        Creating and running <i>Shaking off the Rust</i> is one of the most
        fulfilling things I do. But it{`'`}s exhausting. By supporting me, even
        if it{`'`}s just a dollar, you{`'`}ll allow me to put more time into
        building this series. I really appreciate any support.
      </p>
      <p>
        The only way to support me right now is by{" "}
        <a
          style={{ color: MAIN_ORANGE, textDecoration: "underline" }}
          href="https://github.com/sponsors/josht-jpg"
          rel="noreferrer"
          target="_blank"
        >
          sponsoring me on Github
        </a>
        . I{`'`}ll probably also set up Patreon and Donorbox pages soon.
      </p>
      <p>Thank you so much!</p>
    </div>
  );
};

export default Support;
