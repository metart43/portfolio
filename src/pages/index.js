import React from "react"
import Work from "../../components/Work"
import Bio from "../../components/Bio"
import NavBar from "../../components/NavBar"
import { mq } from "../util/mediaQueries"
import Tech from "../../components/Tech"
import { Helmet } from "react-helmet"

const styles = {
  content: mq({
    flex: 1,
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 1280,
  }),
}

const MainProfile = ({ location: { hash } }) => (
  <div css={styles.content}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{hash || "Artem Metelskyi"}</title>
      <link rel="canonical" href="https://www.metelskyi.me/" />
    </Helmet>
    <NavBar hash={hash} />
    {hash === "" ? <Bio /> : null}
    {hash === "#work" ? <Work /> : null}
    {hash === "#tech-experience" ? <Tech /> : null}
  </div>
)

export default MainProfile
