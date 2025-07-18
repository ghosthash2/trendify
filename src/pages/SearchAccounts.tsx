import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchAccounts.module.css";

const SearchAccounts: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCoinsTextClick = useCallback(() => {
    navigate("/search-coins");
  }, [navigate]);

  const onTikTokTextClick = useCallback(() => {
    navigate("/create-coin");
  }, [navigate]);

  const onFreeRemixInterfaceEssentialClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onUserStreamlineFontAwesomeRClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.searchAccounts}>
      <div className={styles.searchAccountsInner}>
        <div className={styles.searchBarParent}>
          <div className={styles.searchBar}>
            <img
              className={styles.searchBarChild}
              alt=""
              src="/rectangle-34627099.svg"
            />
            <img
              className={styles.magnifyingGlassGlassSearchIcon}
              loading="lazy"
              alt=""
              src="/magnifyingglassglasssearchmagnifying.svg"
            />
            <div className={styles.searchForA}>Search for a TikTok Account</div>
          </div>
          <div className={styles.cancelWrapper}>
            <div className={styles.cancel}>Cancel</div>
          </div>
        </div>
      </div>
      <div className={styles.searchAccountsChild}>
        <div className={styles.coinsParent}>
          <div className={styles.coins} onClick={onCoinsTextClick}>
            Coins
          </div>
          <b className={styles.accounts}>Accounts</b>
        </div>
      </div>
      <b className={styles.tiktok} onClick={onTikTokTextClick}>
        TikTok
      </b>
      <b className={styles.launch} onClick={onTikTokTextClick}>
        Launch
      </b>
      <section className={styles.recentResultsWrapper}>
        <div className={styles.recentResults}>
          <b className={styles.cancel}>Recent Searches</b>
          <div className={styles.resultEntry}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/ellipse-16@2x.png"
                  />
                  <div className={styles.profileDetails}>
                    <div className={styles.phillipBanksWrapper}>
                      <b className={styles.phillipBanks}>Phillip Banks</b>
                    </div>
                    <div className={styles.statsRowParent}>
                      <div className={styles.statsRow}>
                        <div className={styles.statsColumn}>
                          <b className={styles.cancel}>45</b>
                          <b className={styles.cancel}>856k</b>
                        </div>
                      </div>
                      <div className={styles.statLabels}>
                        <b className={styles.following}>Following</b>
                        <b className={styles.cancel}>Followers</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mediaStatsParent}>
                <div className={styles.mediaStats}>
                  <div className={styles.firstStat}>
                    <b className={styles.cancel}>37.1m</b>
                    <div className={styles.statLikes}>
                      <b className={styles.likes}>Likes</b>
                    </div>
                  </div>
                </div>
                <div className={styles.externalLink}>
                  <div className={styles.shareLink}>
                    <div
                      className={styles.shareIcon}
                      onClick={onTikTokTextClick}
                    />
                    <img
                      className={styles.tikTokLogo}
                      loading="lazy"
                      alt=""
                      src="/tik-tok-logo.svg"
                      onClick={onTikTokTextClick}
                    />
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector2.svg"
                        onClick={onTikTokTextClick}
                      />
                      <img
                        className={styles.vectorIcon1}
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                        onClick={onTikTokTextClick}
                      />
                    </div>
                    <b className={styles.launch1} onClick={onTikTokTextClick}>
                      Launch
                    </b>
                  </div>
                  <div className={styles.shareLink1}>
                    <div className={styles.shareLinkChild} />
                    <img
                      className={styles.shareExternalLink1Streamli}
                      loading="lazy"
                      alt=""
                      src="/share-external-link-1-streamline-ultimate-bold@2x.png"
                    />
                    <div className={styles.innerLogoWrapper}>
                      <div className={styles.innerLogo}>
                        <b className={styles.tiktok1}>TikTok</b>
                        <b className={styles.tiktok2}>TikTok</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-12.svg"
        />
        <div className={styles.profileSuggestion}>
          <div className={styles.userContainerParent}>
            <div className={styles.userContainer}>
              <img
                className={styles.freeRemixinterfaceEssential}
                loading="lazy"
                alt=""
                src="/free-remixinterface-essentialhome3homehouseroofshelter.svg"
                onClick={onFreeRemixInterfaceEssentialClick}
              />
            </div>
            <div className={styles.profileSearch}>
              <div className={styles.profileSearchChild} />
              <img
                className={styles.magnifyingGlassStreamlineSh}
                loading="lazy"
                alt=""
                src="/magnifying-glass-streamline-sharp-remix--free.svg"
                onClick={onCoinsTextClick}
              />
            </div>
            <div className={styles.userContainer}>
              <img
                className={styles.userStreamlineFontAwesomeR}
                loading="lazy"
                alt=""
                src="/user-streamline-font-awesome-regular.svg"
                onClick={onUserStreamlineFontAwesomeRClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAccounts;
