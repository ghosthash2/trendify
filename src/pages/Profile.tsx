import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  const navigate = useNavigate();

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
    <div className={styles.profile}>
      <div className={styles.profileInner}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} loading="lazy" alt="" />
          <div className={styles.frameWrapper}>
            <div className={styles.ghosthashParent}>
              <h3 className={styles.ghosthash}>ghosthash</h3>
              <div className={styles.copy2Parent}>
                <img className={styles.copy2Icon} loading="lazy" alt="" />
                <b className={styles.anpu4bdu}>ANpu...4bdU</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.frameParent}>
        <header className={styles.frameContainer}>
          <div className={styles.parent}>
            <h1 className={styles.ghosthash}>$233,04</h1>
            <div className={styles.solWrapper}>
              <b className={styles.sol}>1,4 SOL</b>
            </div>
          </div>
        </header>
        <div className={styles.frameDiv}>
          <div className={styles.frameGroup}>
            <div className={styles.frameParent1}>
              <div className={styles.followersWrapper}>
                <h3 className={styles.ghosthash}>0 Followers</h3>
              </div>
              <h3 className={styles.ghosthash}>0 Following</h3>
              <h3 className={styles.ghosthash}>0 Coins Created</h3>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.downloadStreamlineRoundedLiParent}>
                    <img
                      className={styles.downloadStreamlineRoundedLi}
                      alt=""
                    />
                    <div className={styles.frameItem} />
                    <img className={styles.frameInner} loading="lazy" alt="" />
                  </div>
                  <div className={styles.downloadStreamlineRoundedLiParent}>
                    <div className={styles.ellipseDiv} />
                    <img className={styles.groupIcon} loading="lazy" alt="" />
                  </div>
                  <div className={styles.downloadStreamlineRoundedLiParent}>
                    <div className={styles.ellipseDiv} />
                    <img className={styles.vectorIcon} loading="lazy" alt="" />
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.receiveParent}>
                    <h3 className={styles.ghosthash}>Receive</h3>
                    <h3 className={styles.ghosthash}>Send</h3>
                    <h3 className={styles.ghosthash}>Share</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.assetsWrapperWrapper}>
              <div className={styles.assetsWrapper}>
                <div className={styles.assetsContainer}>
                  <h3 className={styles.ghosthash}>Assets</h3>
                </div>
                <div className={styles.assets1}>
                  <div className={styles.ellipseParent1}>
                    <img className={styles.ellipseIcon} loading="lazy" alt="" />
                    <div className={styles.solParent}>
                      <h2 className={styles.ghosthash}>SOL</h2>
                      <b className={styles.sol2}>1,4 SOL</b>
                    </div>
                  </div>
                  <div className={styles.assetsChild} />
                  <div className={styles.emptyValue}>
                    <b className={styles.b}>$233,04</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.solGroup}>
                <b className={styles.sol3}>3.5 SOL</b>
                <b className={styles.lastSaturdayAt}>
                  Last Saturday at 10:08 PM
                </b>
                <div className={styles.rectangleDiv} />
                <div className={styles.transactionsContent}>
                  <h3 className={styles.ghosthash}>Transactions</h3>
                  <div className={styles.firstTransaction}>
                    <div className={styles.firstElement}>
                      <div className={styles.firstPart}>
                        <img className={styles.firstPartChild} alt="" />
                        <img
                          className={styles.vectorIcon1}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className={styles.timeAgoFirst}>
                        <b className={styles.b}>withdraw SOL</b>
                        <b className={styles.to6jvtxzsq}>To 6jvT...xZSQ</b>
                      </div>
                    </div>
                    <div className={styles.firstElement}>
                      <div className={styles.firstPart}>
                        <img className={styles.firstPartChild} alt="" />
                        <img
                          className={styles.vectorIcon1}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className={styles.timeAgoFirst}>
                        <b className={styles.depositSol}>deposit SOL</b>
                        <b className={styles.from6jvtxzsq}>From 6jvT...xZSQ</b>
                      </div>
                    </div>
                    <div className={styles.thirdTransaction}>
                      <div className={styles.firstElement}>
                        <div className={styles.firstPart}>
                          <img className={styles.firstPartChild} alt="" />
                          <img
                            className={styles.vectorIcon1}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className={styles.timeAgoFirst}>
                          <b className={styles.withdrawSol1}>withdraw SOL</b>
                          <b className={styles.to6jvtxzsq1}>To 6jvT...xZSQ</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.fourthTransaction}>
                      <div className={styles.firstElement}>
                        <div className={styles.firstPart}>
                          <img className={styles.firstPartChild} alt="" />
                          <img
                            className={styles.vectorIcon1}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className={styles.timeAgoFirst}>
                          <b className={styles.depositSol1}>deposit SOL</b>
                          <b className={styles.from6jvtxzsq1}>
                            From 6jvT...xZSQ
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.transactionsContent1}>
                  <div className={styles.seeAllWrapper}>
                    <h3 className={styles.seeAll}>See all</h3>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameParent5}>
                      <div className={styles.solContainer}>
                        <b className={styles.sol4}>2.1 SOL</b>
                      </div>
                      <b className={styles.from6jvtxzsq}>
                        Last Saturday at 10:09 PM
                      </b>
                    </div>
                    <div className={styles.frameParent5}>
                      <div className={styles.solContainer}>
                        <b className={styles.sol5}>3.5 SOL</b>
                      </div>
                      <b className={styles.from6jvtxzsq}>
                        Last Saturday at 10:08 PM
                      </b>
                    </div>
                    <div className={styles.frameWrapper4}>
                      <div className={styles.frameParent7}>
                        <div className={styles.solContainer}>
                          <b className={styles.sol6}>2.1 SOL</b>
                        </div>
                        <b className={styles.from6jvtxzsq1}>
                          Last Saturday at 10:09 PM
                        </b>
                      </div>
                    </div>
                    <div className={styles.thirdTransaction}>
                      <div className={styles.frameParent8}>
                        <div className={styles.solParent1}>
                          <b className={styles.sol7}>3.5 SOL</b>
                          <b className={styles.sol8}>3.5 SOL</b>
                        </div>
                        <div className={styles.lastSaturdayAt1008PmParent}>
                          <b className={styles.withdrawSol1}>
                            Last Saturday at 10:08 PM
                          </b>
                          <b className={styles.lastSaturdayAt5}>
                            Last Saturday at 10:08 PM
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent9}>
          <img className={styles.frameChild2} loading="lazy" alt="" />
          <div className={styles.menuContainerWrapper}>
            <div className={styles.menuContainer}>
              <div className={styles.freeRemixinterfaceEssentialWrapper}>
                <img
                  className={styles.freeRemixinterfaceEssential}
                  loading="lazy"
                  alt=""
                  onClick={onFreeRemixInterfaceEssentialClick}
                />
              </div>
              <div className={styles.searchWrapperParent}>
                <div className={styles.freeRemixinterfaceEssentialWrapper}>
                  <img
                    className={styles.magnifyingGlassStreamlineSh}
                    loading="lazy"
                    alt=""
                    onClick={onMagnifyingGlassStreamlineShClick}
                  />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild3} />
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
      </section>
    </div>
  );
};

export default Profile;
