import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  name1?: string;
  rectangle34627105?: string;
  placeholder?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  name1,
  rectangle34627105,
  placeholder,
}) => {
  return (
    <div className={[styles.nameParent, className].join(" ")}>
      <b className={styles.name}>{name1}</b>
      <div className={styles.nameContainer}>
        <img
          className={styles.nameContainerChild}
          alt=""
          src={rectangle34627105}
        />
        <input
          className={styles.phillipBanks}
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
