import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  iMG73058?: string;
  union?: string;
  iMG730410?: string;
  arrowUp1ArrowUpKeyboard?: string;
  profileAvatar?: string;
  arrowUp1ArrowUpKeyboard1?: string;
  profileAvatarAndrea?: string;
  arrowUp1ArrowUpKeyboard2?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  iMG73058,
  union,
  iMG730410,
  arrowUp1ArrowUpKeyboard,
  profileAvatar,
  arrowUp1ArrowUpKeyboard1,
  profileAvatarAndrea,
  arrowUp1ArrowUpKeyboard2,
}) => {
  const navigate = useNavigate();

  const onIMG73058ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <header className={styles.img73058Parent}>
        <img
          className={styles.img73058Icon}
          loading="lazy"
          alt=""
          src={iMG73058}
          onClick={onIMG73058ImageClick}
        />
        <nav className={styles.curtisLeoporeParent}>
          <h1 className={styles.curtisLeopore} onClick={onIMG73058ImageClick}>
            Curtis Leopore
          </h1>
          <div className={styles.frameWrapper}>
            <div className={styles.curtisleoporeParent}>
              <b
                className={styles.curtisleopore}
                onClick={onIMG73058ImageClick}
              >
                @curtisleopore
              </b>
              <div className={styles.mc642kWrapper}>
                <div className={styles.mc642k} onClick={onIMG73058ImageClick}>
                  <span>MC:</span>
                  <span>{` `}</span>
                  <span className={styles.k}>$642k</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.postsCountParent}>
                  <b className={styles.mc642k} onClick={onIMG73058ImageClick}>
                    633
                  </b>
                  <b className={styles.mc642k} onClick={onIMG73058ImageClick}>
                    1.9m
                  </b>
                </div>
              </div>
              <div className={styles.followingParent}>
                <b className={styles.following} onClick={onIMG73058ImageClick}>
                  Following
                </b>
                <b className={styles.mc642k} onClick={onIMG73058ImageClick}>
                  Followers
                </b>
              </div>
            </div>
          </div>
        </nav>
        <div className={styles.frameParent1}>
          <div className={styles.unionParent}>
            <img
              className={styles.unionIcon}
              loading="lazy"
              alt=""
              src={union}
              onClick={onIMG73058ImageClick}
            />
            <b className={styles.mc642k} onClick={onIMG73058ImageClick}>
              130%
            </b>
          </div>
          <div className={styles.mParent}>
            <b className={styles.mc642k} onClick={onIMG73058ImageClick}>
              18.1m
            </b>
            <div className={styles.likesWrapper}>
              <b className={styles.likes} onClick={onIMG73058ImageClick}>
                Likes
              </b>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.frameParent2}>
        <div className={styles.img730410Wrapper}>
          <img
            className={styles.img730410Icon}
            loading="lazy"
            alt=""
            src={iMG730410}
          />
        </div>
        <div className={styles.postInfo}>
          <div className={styles.postInfoInner}>
            <div className={styles.tjrParent}>
              <h1 className={styles.tjr}>TJR</h1>
              <div className={styles.authorNameWrapper}>
                <b className={styles.mc112m}>@TJR</b>
              </div>
            </div>
          </div>
          <div className={styles.mc112mWrapper}>
            <div className={styles.mc112m}>
              <span>MC:</span>
              <span>{` `}</span>
              <span className={styles.k}>$1.12m</span>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.frameWrapper1}>
              <div className={styles.postsCountParent}>
                <b className={styles.mc112m}>45</b>
                <b className={styles.mc112m}>856k</b>
              </div>
            </div>
            <div className={styles.followingParent}>
              <b className={styles.following1}>Following</b>
              <b className={styles.mc112m}>Followers</b>
            </div>
          </div>
        </div>
        <div className={styles.interactionButtons}>
          <div className={styles.arrowUp1ArrowUpKeyboardParent}>
            <img
              className={styles.arrowUp1ArrowUpKeyboardIcon}
              loading="lazy"
              alt=""
              src={arrowUp1ArrowUpKeyboard}
            />
            <b className={styles.shareLabelSpacer}>50%</b>
          </div>
          <div className={styles.mParent}>
            <b className={styles.mc112m}>37.1m</b>
            <div className={styles.likesWrapper}>
              <b className={styles.likes1}>Likes</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.frameParent4}>
          <div className={styles.profileAvatarWrapper}>
            <img
              className={styles.profileAvatarIcon}
              loading="lazy"
              alt=""
              src={profileAvatar}
            />
          </div>
          <div className={styles.curtisleoporeParent}>
            <div className={styles.usernameDetails}>
              <div className={styles.tjrParent}>
                <h1 className={styles.tjr}>Kori The Pom</h1>
                <div className={styles.pomkoriWrapper}>
                  <b className={styles.pomkori}>@pomkori_</b>
                </div>
              </div>
            </div>
            <div className={styles.mc112mWrapper}>
              <div className={styles.mc112m}>
                <span>MC:</span>
                <span>{` `}</span>
                <span className={styles.k}>$39.78m</span>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameWrapper3}>
                <div className={styles.postsCountParent}>
                  <b className={styles.mc112m}>157</b>
                  <b className={styles.mc112m}>2.5m</b>
                </div>
              </div>
              <div className={styles.followingParent}>
                <b className={styles.following1}>Following</b>
                <b className={styles.mc112m}>Followers</b>
              </div>
            </div>
          </div>
          <div className={styles.interactionButtonsKori}>
            <div className={styles.interactionButtonsKoriInner}>
              <div className={styles.frameParent6}>
                <div className={styles.arrowUp1ArrowUpKeyboardWrapper}>
                  <img
                    className={styles.arrowUp1ArrowUpKeyboardIcon}
                    loading="lazy"
                    alt=""
                    src={arrowUp1ArrowUpKeyboard1}
                  />
                </div>
                <b className={styles.shareLabelSpacer1}>7%</b>
              </div>
            </div>
            <div className={styles.mParent}>
              <b className={styles.mc112m}>159.2m</b>
              <div className={styles.likesFrame}>
                <b className={styles.likes1}>Likes</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileAvatarAndreaParent}>
        <img
          className={styles.profileAvatarAndrea}
          loading="lazy"
          alt=""
          src={profileAvatarAndrea}
        />
        <div className={styles.userPanel}>
          <div className={styles.dataHolderParent}>
            <div className={styles.postInfoInner}>
              <div className={styles.tjrParent}>
                <h1 className={styles.tjr}>Andrea Von Speed</h1>
                <div className={styles.pomkoriWrapper}>
                  <b className={styles.thekittyandrea}>@thekittyandrea</b>
                </div>
              </div>
            </div>
            <div className={styles.commentEngagement}>
              <div className={styles.postsCountParent}>
                <div className={styles.mc112m}>
                  <span>MC:</span>
                  <span>{` `}</span>
                  <span className={styles.k}>$2.06m</span>
                </div>
                <div className={styles.shareInteraction}>
                  <img
                    className={styles.arrowUp1ArrowUpKeyboardIcon}
                    loading="lazy"
                    alt=""
                    src={arrowUp1ArrowUpKeyboard2}
                  />
                  <b className={styles.mc112m}>13%</b>
                </div>
              </div>
            </div>
            <div className={styles.socialDetails}>
              <div className={styles.followContainer}>
                <div className={styles.postsCounter}>
                  <b className={styles.mc112m}>2</b>
                </div>
                <b className={styles.following3}>Following</b>
              </div>
              <div className={styles.metrics}>
                <b className={styles.mc112m}>4.4m</b>
                <b className={styles.following3}>Followers</b>
              </div>
              <div className={styles.metrics}>
                <b className={styles.mc112m}>224.8m</b>
                <div className={styles.likesWrapper1}>
                  <b className={styles.likes1}>Likes</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
