import React from "react"
import Work from "../../components/Work"
import Divider from "../../components/Divider"
import Bio from "../../components/Bio"
import NavBar from "../../components/NavBar"
import { mq } from "../util/mediaQueries"

const styles = {
  content: mq({
    flex: 1,
    maxWidth: 1024,
    marginRight: "auto",
    marginLeft: "auto",
    padding: "2rem",
  }),
}

const MainProfile = () => (
  <div css={styles.content}>
    <NavBar />
    <Bio />
    <Work />
  </div>
)

export default MainProfile
