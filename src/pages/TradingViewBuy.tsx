import { FunctionComponent, useCallback } from "react";
import MarketData from "../components/MarketData";
import { useNavigate } from "react-router-dom";
import styles from "./TradingViewBuy.module.css";

const TradingViewBuy: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSellTextClick = useCallback(() => {
    navigate("/trading-view-sell");
  }, [navigate]);

  return (
    <div className={styles.tradingViewBuy}>
      <section className={styles.tradingView}>
        <img className={styles.img73055Icon} loading="lazy" alt="" />
        <div className={styles.tradingViewInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.curtisLeoporeParent}>
                <b className={styles.curtisLeopore}>Curtis Leopore</b>
                <div className={styles.curtisleoporeWrapper}>
                  <b className={styles.curtisleopore}>@curtisleopore</b>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.shareExternalLink1Streamli}
                    loading="lazy"
                    alt=""
                  />
                  <b className={styles.tiktok}>TikTok</b>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} loading="lazy" alt="" />
                <div className={styles.hWrapper}>
                  <div className={styles.curtisLeopore}>18h</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
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
      <section className={styles.tradingViewBuyInner}>
        <div className={styles.image992Parent}>
          <img className={styles.image992} loading="lazy" alt="" />
          <div className={styles.tradeControls}>
            <div className={styles.actionButtonsParent}>
              <div className={styles.actionButtons}>
                <div className={styles.buyButtonParent}>
                  <div className={styles.buyButton}>
                    <div className={styles.buyButtonChild} />
                    <h3 className={styles.buy}>Buy</h3>
                  </div>
                  <div className={styles.sellButton}>
                    <h3 className={styles.sell} onClick={onSellTextClick}>
                      Sell
                    </h3>
                  </div>
                </div>
              </div>
              <div className={styles.amountArea}>
                <div className={styles.amountDetails}>
                  <div className={styles.tiktok}>Amount</div>
                </div>
                <img className={styles.amountAreaChild} type="text" alt="" />
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.solBalanceAreaWrapper}>
                  <div className={styles.solBalanceArea}>
                    <div className={styles.solMaxArea}>
                      <div className={styles.solWrapper}>
                        <div className={styles.sol}>0.1 SOL</div>
                      </div>
                      <div className={styles.frameParent2}>
                        <div className={styles.rectangleGroup}>
                          <div className={styles.frameItem} />
                          <div className={styles.sol1}>0.25 SOL</div>
                        </div>
                        <div className={styles.solWrapper}>
                          <div className={styles.sol}>0.5 SOL</div>
                        </div>
                        <div className={styles.solWrapper}>
                          <div className={styles.sol}>Max</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.solBalance}>
                      <div className={styles.balance076245242Sol}>
                        Balance: 0.76245242 SOL
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tradeButton}>
                  <div className={styles.tradeButtonChild} />
                  <h3 className={styles.buy}>Place Trade</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.tradingViewBuyChild} />
    </div>
  );
};

export default TradingViewBuy;
