import { useContext, useState } from "react";
import { IsLightModeContext } from "../../context/IsLightModeProvider";
import styles from "./SubscribeForm.module.scss";
import axios from "axios";

const SubscribeForm = () => {
  const [address, setAddress] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      if (!address) {
        throw new Error("No email address provided.");
      }

      await axios.post("/api/subscribe", { address });
      setSubscribeSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const { isLightMode } = useContext(IsLightModeContext);

  return (
    <div
      className={styles.container}
      style={{
        color: "black",
        boxShadow: !isLightMode && "white 0 0 7px",
      }}
    >
      <h3>Rust up your inbox!</h3>

      <div className={styles.subscribe}>
        {subscribeSuccess ? (
          <>
            <h3 className={styles.success}>Success!</h3>
            <p className={styles.thankYouMessage}>
              Thank you! Stay tuned for great content.
            </p>
          </>
        ) : (
          <>
            <h3 className={styles.subscribeHeader}>Subscribe</h3>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.subscribeForm}>
              <form>
                <input
                  className={styles.subscribeInput}
                  type="email"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Email Address"
                />

                <input
                  className={styles.subscribeSubmit}
                  onClick={(e) => handleSubscribe(e)}
                  type="submit"
                  value="Join"
                />
              </form>
            </div>
          </>
        )}
      </div>
      <p style={{ marginTop: "27px" }}>No spam. Unsubscribe anytime.</p>
    </div>
  );
};

export default SubscribeForm;
