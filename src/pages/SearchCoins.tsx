import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchCoins.module.css";

const SearchCoins: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAccountsTextClick = useCallback(() => {
    navigate("/search-accounts");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFreeRemixInterfaceEssentialClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onMagnifyingGlassStreamlineShClick = useCallback(() => {
    navigate("/search-coins");
  }, [navigate]);

  const onUserStreamlineFontAwesomeRClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.searchCoins}>
      <div className={styles.searchCoinsInner}>
        <div className={styles.searchBarParent}>
          <div className={styles.searchBar}>
            <img className={styles.searchBarChild} alt="" />
            <img
              className={styles.magnifyingGlassGlassSearchIcon}
              loading="lazy"
              alt=""
            />
            <div className={styles.searchForA}>Search for a TikTok Account</div>
          </div>
          <div className={styles.cancelWrapper}>
            <div className={styles.cancel}>Cancel</div>
          </div>
        </div>
      </div>
      <div className={styles.searchCoinsChild}>
        <div className={styles.coinsParent}>
          <b className={styles.coins}>Coins</b>
          <div className={styles.accounts} onClick={onAccountsTextClick}>
            Accounts
          </div>
        </div>
      </div>
      <section className={styles.recentContainerWrapper}>
        <div className={styles.recentContainer}>
          <b className={styles.cancel}>Recent Searches</b>
          <div className={styles.recentContainerInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div
                    className={styles.frameContainer}
                    onClick={onGroupContainerClick}
                  >
                    <div className={styles.img73056Parent}>
                      <img
                        className={styles.img73056Icon}
                        loading="lazy"
                        alt=""
                      />
                      <div className={styles.userNameContainerWrapper}>
                        <div className={styles.userNameContainer}>
                          <b className={styles.cancel}>Curtis Leopore</b>
                          <b className={styles.curtis}>CURTIS</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buyContainerWrapper}>
                      <div className={styles.buyContainer}>
                        <div className={styles.buyDetails}>
                          <img
                            className={styles.buyIcon}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className={styles.cancel}>18h</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <b className={styles.searchForA}>Buy</b>
                  </div>
                  <div className={styles.mc642kWrapper}>
                    <div className={styles.cancel}>
                      <span>{`MC `}</span>
                      <span>$642k</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.suggestionContainerParent}>
                <div className={styles.suggestionContainer}>
                  <img className={styles.unionIcon} loading="lazy" alt="" />
                  <div className={styles.suggestionContainerChild} />
                </div>
                <div className={styles.profileDetails}>
                  <b className={styles.cancel}>Chillguy</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.frameParent1}>
        <img className={styles.frameItem} loading="lazy" alt="" />
        <div className={styles.remixInterfaceWrapper}>
          <div className={styles.remixInterface}>
            <div className={styles.interfaceContainer}>
              <img
                className={styles.freeRemixinterfaceEssential}
                loading="lazy"
                alt=""
                onClick={onFreeRemixInterfaceEssentialClick}
              />
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <img
                className={styles.magnifyingGlassStreamlineSh}
                loading="lazy"
                alt=""
                onClick={onMagnifyingGlassStreamlineShClick}
              />
            </div>
            <div className={styles.interfaceContainer1}>
              <img
                className={styles.userStreamlineFontAwesomeR}
                loading="lazy"
                alt=""
                onClick={onUserStreamlineFontAwesomeRClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCoins;
