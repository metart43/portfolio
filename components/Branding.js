import React from "react"
import { mq } from "../src/util/mediaQueries"

const data = {
  github: { href: "https://github.com/metart43", src: "/github-icon.svg" },
  linkedIn: {
    href: "http://linkedin.com/in/artem-metelskyi",
    src: "/linked-in-icon.svg",
  },
  twitter: {
    href: "https://twitter.com/metelskyi_a",
    src: "/twitter-icon.svg",
  },
  medium: { href: "https://glitch.com/@metart43", src: "/medium-icon.svg" },
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
  link: { margin: "0px 5px 0px 5px" },
}
const Branding = () => (
  <div css={styles.imageWrapper}>
    {Object.entries(data).map(([key, { src, href }]) => (
      <a
        style={styles.link}
        key={key}
        target="_blank"
        rel="noreferrer"
        href={href}
      >
        <img
          role="presentation"
          onMouseEnter={e => (e.currentTarget.src = `/hovered-${src.slice(1)}`)}
          onMouseOut={e => (e.currentTarget.src = src)}
          onBlur={e => (e.currentTarget.src = src)}
          css={styles.img}
          src={src}
          alt={key}
        />
      </a>
    ))}
  </div>
)

export default Branding
