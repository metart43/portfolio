import React from "react"
import Work from "../../components/Work"
import Bio from "../../components/Bio"
import NavBar from "../../components/NavBar"
import { mq } from "../util/mediaQueries"
import Tech from "../../components/Tech"

const styles = {
  content: mq({
    flex: 1,
    marginRight: "auto",
    marginLeft: "auto",
    padding: "1.5rem",
  }),
}

const MainProfile = ({ location: { hash } }) => (
  <div css={styles.content}>
    <NavBar />
    {hash === "" ? <Bio /> : null}
    {hash === "#work" ? <Work /> : null}
    {hash === "#tech-experience" ? <Tech /> : null}
  </div>
)

export default MainProfile
