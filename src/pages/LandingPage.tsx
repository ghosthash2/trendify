import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLandingPageContainerClick = useCallback(() => {
    navigate("/coin-directory-trending");
  }, [navigate]);

  return (
    <div className={styles.landingPage} onClick={onLandingPageContainerClick}>
      <section className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.createAccountParent}>
            <div className={styles.createAccount}>Create Account</div>
            <div className={styles.createAccount1}>Create Account</div>
          </div>
        </div>
        <div className={styles.alreadyHaveAnAccountSignWrapper}>
          <div className={styles.alreadyHaveAnContainer}>
            <span className={styles.alreadyHaveAn}>
              Already have an account?
            </span>
            <span>{` `}</span>
            <span>Sign in</span>
          </div>
        </div>
      </section>
      <div className={styles.byContinuingYouAgreeToOuWrapper}>
        <b className={styles.alreadyHaveAnContainer}>
          By continuing, you agree to our Terms and Privacy Policy
        </b>
      </div>
    </div>
  );
};

export default LandingPage;
