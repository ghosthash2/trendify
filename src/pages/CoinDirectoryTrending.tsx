import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import styles from "./CoinDirectoryTrending.module.css";

const CoinDirectoryTrending: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLatestTextClick = useCallback(() => {
    navigate("/coin-directory-latest");
  }, [navigate]);

  const onMagnifyingGlassStreamlineShClick = useCallback(() => {
    navigate("/search-coins");
  }, [navigate]);

  const onUserStreamlineFontAwesomeRClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.coinDirectoryTrending}>
      <div className={styles.coinDirectory}>
        <div className={styles.empty}>
          <div className={styles.page}>
            <h3 className={styles.trending}>Trending</h3>
            <h3 className={styles.latest} onClick={onLatestTextClick}>
              Latest
            </h3>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
        </div>
      </div>
      <section className={styles.coinDirectoryTrendingInner}>
        <FrameComponent
          iMG73058="/img-7305-8@2x.png"
          union="/union.svg"
          iMG730410="/img-7304-10@2x.png"
          arrowUp1ArrowUpKeyboard="/arrowup1arrowupkeyboard.svg"
          profileAvatar="/profile-avatar@2x.png"
          arrowUp1ArrowUpKeyboard1="/arrowup1arrowupkeyboard2.svg"
          profileAvatarAndrea="/profile-avatar-andrea@2x.png"
          arrowUp1ArrowUpKeyboard2="/arrowup1arrowupkeyboard.svg"
        />
      </section>
      <div className={styles.userStreamlineBlockFree} />
      <div className={styles.userStreamlineBlockFree} />
      <div className={styles.img73059} />
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBar}>
          <div className={styles.freeRemixinterfaceEssentialParent}>
            <img
              className={styles.freeRemixinterfaceEssential}
              loading="lazy"
              alt=""
              src="/free-remixinterface-essentialhome3homehouseroofshelter.svg"
            />
            <div className={styles.frameInner} />
          </div>
          <div className={styles.magnifyingGlassStreamlineShWrapper}>
            <img
              className={styles.magnifyingGlassStreamlineSh}
              loading="lazy"
              alt=""
              src="/magnifying-glass-streamline-sharp-remix--free.svg"
              onClick={onMagnifyingGlassStreamlineShClick}
            />
          </div>
          <div className={styles.userStreamlineFontAwesomeRWrapper}>
            <img
              className={styles.magnifyingGlassStreamlineSh}
              loading="lazy"
              alt=""
              src="/user-streamline-font-awesome-regular.svg"
              onClick={onUserStreamlineFontAwesomeRClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDirectoryTrending;
