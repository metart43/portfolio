import React from "react"
import { mq } from "../src/util/mediaQueries"

const styles = {
  header: mq({
    fontWeight: 600,
    padding: 5,
    fontSize: ["1.25rem", "1.5rem", "1.5rem", "1.75rem"],
  }),
  subheader: mq({
    fontSize: ["1rem", "1rem", "1.25rem"],
    padding: 5,
    color: "darkgrey",
  }),
  regularText: {
    fontWeight: 500,
  },
}

export const Header = ({ children }) => <h1 css={styles.header}>{children}</h1>
export const RegularText = ({ children }) => (
  <h3 css={styles.regularText}>{children}</h3>
)
export const Subheader = ({ children }) => (
  <a css={styles.subheader}>{children}</a>
)
