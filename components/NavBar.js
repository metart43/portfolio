import React from "react"
import { Header, CustomLink } from "./Typography"
import Branding from "./Branding"
import Divider from "./Divider"

const styles = {
  navBar: {
    display: "flex",
  },
}

const NavBar = () => (
  <div>
    <div css={styles.navBar}>
      <div>
        <Header>Artem Metelskyi</Header>
        <CustomLink>#work |</CustomLink>
        <CustomLink>#tech experience |</CustomLink>
        <CustomLink>#about |</CustomLink>
      </div>
      <Branding />
    </div>
    <Divider />
  </div>
)
export default NavBar
