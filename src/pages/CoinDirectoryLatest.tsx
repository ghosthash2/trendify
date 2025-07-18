import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import styles from "./CoinDirectoryLatest.module.css";

const CoinDirectoryLatest: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTrendingTextClick = useCallback(() => {
    navigate("/coin-directory-trending");
  }, [navigate]);

  const onMagnifyingGlassStreamlineShClick = useCallback(() => {
    navigate("/search-coins");
  }, [navigate]);

  const onUserStreamlineFontAwesomeRClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.coinDirectoryLatest}>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.containerNested}>
            <h3 className={styles.trending} onClick={onTrendingTextClick}>
              Trending
            </h3>
            <h3 className={styles.latest}>Latest</h3>
          </div>
        </div>
        <div className={styles.dividerParent}>
          <div className={styles.divider} />
          <div className={styles.divider1} />
        </div>
      </div>
      <section className={styles.profileContainer}>
        <FrameComponent />
      </section>
      <div className={styles.userStreamlineBlockFree} />
      <div className={styles.img73057} />
      <div className={styles.searchArea}>
        <div className={styles.searchBarContent}>
          <div className={styles.contentWrapper}>
            <img
              className={styles.freeRemixinterfaceEssential}
              loading="lazy"
              alt=""
            />
            <div className={styles.contentWrapperChild} />
          </div>
          <div className={styles.searchIcons}>
            <img
              className={styles.magnifyingGlassStreamlineSh}
              loading="lazy"
              alt=""
              onClick={onMagnifyingGlassStreamlineShClick}
            />
          </div>
          <div className={styles.searchIcons1}>
            <img
              className={styles.magnifyingGlassStreamlineSh}
              loading="lazy"
              alt=""
              onClick={onUserStreamlineFontAwesomeRClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDirectoryLatest;
