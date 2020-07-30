import React from "react"
import { mq } from "../src/util/mediaQueries"

const data = {
  github: { src: "/github-icon.svg" },
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
  imageWrapper: mq({
    display: "flex",
    alignSelf: "flex-end",
    marginLeft: "auto",
    flexWrap: "wrap",
    flexDirection: ["column", "column", "row", "row"],
  }),
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
