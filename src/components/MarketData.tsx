import { FunctionComponent } from "react";
import styles from "./MarketData.module.css";

export type MarketDataType = {
  className?: string;
  arrowUp1ArrowUpKeyboard?: string;
};

const MarketData: FunctionComponent<MarketDataType> = ({
  className = "",
  arrowUp1ArrowUpKeyboard,
}) => {
  return (
    <div className={[styles.marketData, className].join(" ")}>
      <div className={styles.marketDataInner}>
        <div className={styles.marketCap}>Market Cap</div>
        <div className={styles.detailsValues}>
          <div className={styles.kParent}>
            <b className={styles.marketCap}>$642k</b>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent}>
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                  </div>
                </div>
                <div className={styles.marketCap}>
                  <span>{`ATH `}</span>
                  <span>1.8m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.arrowUp1ArrowUpKeyboardParent}>
          <img
            className={styles.arrowUp1ArrowUpKeyboardIcon}
            loading="lazy"
            alt=""
            src={arrowUp1ArrowUpKeyboard}
          />
          <div className={styles.div}>130%</div>
          <div className={styles.today}>Today</div>
        </div>
      </div>
    </div>
  );
};

export default MarketData;
