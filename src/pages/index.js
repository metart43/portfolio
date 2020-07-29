import React from "react"
import { Link } from "gatsby"
import { Header, Subheader, RegularText } from "../../components/Typography"
import Branding from "../../components/Branding"
import Work from "../../components/Work"
import Divider from "../../components/Divider"
import { mq } from "../util/mediaQueries"

const styles = {
  content: mq({
    flex: 1,
    maxWidth: 1024,
    marginRight: "auto",
    marginLeft: "auto",
    padding: "2rem",
  }),
  navBar: {
    display: "flex",
  },
}

const MainProfile = () => (
  <div css={styles.content}>
    <div css={styles.navBar}>
      <div>
        <Header>Artem Metelskyi</Header>
        <Subheader>#work |</Subheader>
        <Subheader>#techExperience |</Subheader>
        <Subheader>#about |</Subheader>
      </div>
      <Branding />
    </div>
    <Divider />
    <div css={styles.bio}>
      <RegularText>
        Hi {String.fromCodePoint(0x1f47e)}! I am a Full Stack Web Developer
        based in Washington, DC.
        <br />
        <br />
        I write code in Javascript and Ruby. In January of 2019, I made an
        important decision and enrolled at Flatiron Full-Stack Web Development
        Bootcamp
        <br />
        <br />
        So far on my coding journey I worked with a number of frameworks and
        tools such as: React.js, React Native, Node.js, Ruby on Rails, AWS,
        Serverless, Redux, xState and more.
      </RegularText>
      <Divider />
    </div>
    <Work />
  </div>
)

export default MainProfile
