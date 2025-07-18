import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.createCoinInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} loading="lazy" alt="" />
          <div className={styles.frameGroup}>
            <div className={styles.phillipBanksWrapper}>
              <b className={styles.phillipBanks}>Phillip Banks</b>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.dummyVariableParent}>
                  <b className={styles.phillipBanks}>45</b>
                  <b className={styles.phillipBanks}>856k</b>
                </div>
              </div>
              <div className={styles.followingParent}>
                <b className={styles.following}>Following</b>
                <b className={styles.phillipBanks}>Followers</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.mParent}>
            <b className={styles.phillipBanks}>37.1m</b>
            <div className={styles.likesWrapper}>
              <b className={styles.likes}>Likes</b>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
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
      </div>
    </div>
  );
};

export default FrameComponent3;
