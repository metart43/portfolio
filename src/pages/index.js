import React, { useState, useEffect } from "react"
import Work from "../../components/Work"
import Bio from "../../components/Bio"
import NavBar from "../../components/NavBar"
import { mq } from "../util/mediaQueries"
const styles = {
  content: mq({
    flex: 1,
    marginRight: "auto",
    marginLeft: "auto",
    padding: "2rem",
  }),
}

const MainProfile = ({ location: { hash } }) => (
  <div css={styles.content}>
    <NavBar />
    {hash === "" ? <Bio /> : null}
    {hash === "#work" ? <Work /> : null}
  </div>
)

export default MainProfile
