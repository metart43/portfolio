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
  activeLink: mq({
    fontSize: ["1rem", "1rem", "1.25rem"],
    padding: 5,
    color: "#3f72af",
  }),
  link: mq({
    fontSize: ["1rem", "1rem", "1.25rem"],
    padding: 5,
    color: "black",
  }),
  linkWrapper: mq({
    display: "flex",
    flexDirection: ["column", "column", "row", "row"],
  }),
}

const paths = ["#work", "#tech-experience"]

const NavBar = ({ hash }) => (
  <div>
    <div css={styles.navBar}>
      <div>
        <Header>Artem Metelskyi</Header>
        <div css={styles.linkWrapper}>
          <Link css={!hash ? styles.activeLink : styles.link} to="/">
            #home
          </Link>
          {paths.map(path => (
            <Link
              key={path}
              css={hash === path ? styles.activeLink : styles.link}
              to={path}
            >
              {path}
            </Link>
          ))}
          <a
            css={styles.link}
            target="_blank"
            rel="noreferrer"
            href="mailto:metelskyi88@gmail.com"
          >
            #email-me
          </a>
        </div>
      </div>
      <Branding />
    </div>
    <Divider />
  </div>
)
export default NavBar
