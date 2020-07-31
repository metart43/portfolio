import React from "react"
import { Header } from "./Typography"
import Branding from "./Branding"
import Divider from "./Divider"
import { Link } from "gatsby"
import { mq } from "../src/util/mediaQueries"

const styles = {
  navBar: {
    display: "flex",
  },
  link: mq({
    fontSize: ["1rem", "1rem", "1.25rem"],
    padding: 5,
    color: "#3f72af",
  }),
  linkWrapper: mq({
    display: "flex",
    flexDirection: ["column", "column", "row", "row"],
  }),
}

const NavBar = () => (
  <div>
    <div css={styles.navBar}>
      <div>
        <Header>Artem Metelskyi</Header>
        <div css={styles.linkWrapper}>
          <Link css={styles.link} to="/">
            #home
          </Link>
          <Link css={styles.link} to="#work">
            #work
          </Link>
          <Link css={styles.link} to="#tech-experience">
            #tech-experience
          </Link>
          <a
            css={styles.link}
            target="_blank"
            rel="noreferrer"
            href="mailto:metelskyi88@gmail.com"
          >
            #contact-me
          </a>
        </div>
      </div>
      <Branding />
    </div>
    <Divider />
  </div>
)
export default NavBar
