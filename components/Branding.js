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
    {Object.entries(data).map(([key, value]) => (
      <img css={styles.img} key={key} src={value.src} alt={key} />
    ))}
  </div>
)

export default Branding
