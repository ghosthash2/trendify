import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.preBuyAmountParent, className].join(" ")}>
      <b className={styles.preBuyAmount}>Pre-Buy Amount</b>
      <div className={styles.frameWrapper}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" />
          <input className={styles.sol} placeholder="0.25 SOL" type="text" />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameParent}>
          <div className={styles.solWrapper}>
            <div className={styles.max}>0.1 SOL</div>
          </div>
          <div className={styles.secondOption}>
            <div className={styles.secondOptionChild} />
            <div className={styles.sol2}>0.25 SOL</div>
          </div>
          <div className={styles.maximumInputWrapper}>
            <div className={styles.maximumInput}>
              <div className={styles.max}>0.5 SOL</div>
              <div className={styles.max}>Max</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.balanceLabel}>
        <div className={styles.balance14Sol}>Balance: 1.4 SOL</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
