import { FunctionComponent, useCallback } from "react";
import MarketData from "../components/MarketData";
import { useNavigate } from "react-router-dom";
import styles from "./TradingViewSell.module.css";

const TradingViewSell: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/coin-directory-trending");
  }, [navigate]);

  return (
    <div className={styles.tradingViewSell}>
      <section className={styles.img73055Parent}>
        <img className={styles.img73055Icon} loading="lazy" alt="" />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.curtisLeoporeParent}>
                  <b className={styles.curtisLeopore}>Curtis Leopore</b>
                  <b className={styles.curtisLeopore1}>Curtis Leopore</b>
                </div>
                <div className={styles.curtisleoporeWrapper}>
                  <b className={styles.curtisleopore}>@curtisleopore</b>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.shareExternalLink1Streamli}
                    loading="lazy"
                    alt=""
                  />
                  <div className={styles.tiktokWrapper}>
                    <b className={styles.tiktok}>TikTok</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.linkContainer}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} loading="lazy" alt="" />
                <div className={styles.tiktokWrapper}>
                  <div className={styles.curtisLeopore}>18h</div>
                </div>
              </div>
              <div className={styles.copyContainer}>
                <div className={styles.copy2Parent}>
                  <img className={styles.copy2Icon} loading="lazy" alt="" />
                  <div className={styles.dz9mbonk}>Dz9m...bonk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MarketData />
      <section className={styles.marketImage}>
        <img className={styles.image991} loading="lazy" alt="" />
      </section>
      <section className={styles.orderContainerWrapper}>
        <div className={styles.orderContainer}>
          <div className={styles.orderForm}>
            <div className={styles.actionButtonsParent}>
              <div className={styles.actionButtons}>
                <h3 className={styles.buy}>Buy</h3>
              </div>
              <div className={styles.sellAction}>
                <div className={styles.sellActionChild} />
                <h3 className={styles.sell}>Sell</h3>
              </div>
            </div>
          </div>
          <div className={styles.amountInputsParent}>
            <div className={styles.amountInputs}>
              <div className={styles.curtisLeopore}>Amount</div>
            </div>
            <input className={styles.amountInput} type="text" />
          </div>
          <div className={styles.balanceInfo}>
            <div className={styles.balance16523423Curtis}>
              Balance: 165234,23 CURTIS
            </div>
          </div>
          <div className={styles.tradeAction}>
            <div className={styles.tradeActionChild} />
            <h3 className={styles.sell}>Place Trade</h3>
          </div>
        </div>
      </section>
      <div className={styles.tradingViewSellChild} onClick={onFrameClick} />
    </div>
  );
};

export default TradingViewSell;
