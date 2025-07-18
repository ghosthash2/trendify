import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./CreateCoin.module.css";

const CreateCoin: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/search-accounts");
  }, [navigate]);

  return (
    <div className={styles.createCoin}>
      <div className={styles.createCoinInner}>
        <div className={styles.createACoinForPhillipBankParent}>
          <b
            className={styles.createACoin}
          >{`Create a coin for Phillip Banks `}</b>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              onClick={onVectorIconClick}
            />
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <section className={styles.createCoinChild}>
        <div className={styles.frameParent}>
          <FrameComponent1 name1="Name" placeholder="Phillip Banks" />
          <FrameComponent2 />
          <FrameComponent4 />
        </div>
      </section>
      <section className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.createCoin1}>Create Coin</b>
        </div>
        <div className={styles.disclaimerThisIsNotYourAWrapper}>
          <div className={styles.disclaimerThisIsContainer}>
            <span>{`Disclaimer: `}</span>
            <span>
              This is not your account. 5% of the total supply will be allocated
              to the account owner!
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateCoin;
