import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <FrameComponent1 name1="Ticker" placeholder="$CHILLGUY" />
      <div className={styles.frameGroup}>
        <div className={styles.descriptionWrapper}>
          <b className={styles.description}>Description</b>
        </div>
        <textarea
          className={styles.descriptionContainer}
          placeholder="Just a chill guy..."
          rows={4}
          cols={16}
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
