import React from "react"
import { mq } from "../src/util/mediaQueries"

const data = {
  github: { src: "/github-icon.svg" },
  //   gitlab: { src: "/gitlab-icon.svg" },
  linkedIn: { src: "/linked-in-icon.svg" },
  twitter: { src: "/twitter-icon.svg" },
  medium: { src: "/medium-icon.svg" },
}
const styles = {
  img: mq({
    width: [20, 25, 30],
    height: [20, 25, 30],
    padding: 5,
  }),
  imageWrapper: {
    alignSelf: "flex-end",
    marginLeft: "auto",
    width: "80px",
    flexWrap: "wrap",
  },
}
const Branding = () => (
  <div css={styles.imageWrapper}>
    {Object.entries(data).map(([key, { src }]) => (
      <img
        onMouseEnter={e =>
          (e.currentTarget.src = `/hovered-` + `${src.slice(1)}`)
        }
        onMouseOut={e => (e.currentTarget.src = src)}
        css={styles.img}
        key={key}
        src={src}
        alt={key}
      />
    ))}
  </div>
)

export default Branding
