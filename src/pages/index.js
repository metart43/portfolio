import React from "react"
import { Link } from "gatsby"
import { Header, CustomLink, RegularText } from "../../components/Typography"
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
        <CustomLink>#work |</CustomLink>
        <CustomLink>#techExperience |</CustomLink>
        <CustomLink>#about |</CustomLink>
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
        I write code in Javascript and Ruby. In January of 2019, I enrolled at
        Flatiron Full-Stack Web Development Bootcamp. I graduated in April of
        2019. Immediately after that I joined local start-up company "How's My
        Driving", as a Full-Stack Developer, company later evolved into
        "OurStreets App".
        <br />
        <br />
        So far on my coding journey, I worked with several frameworks and tools
        such as React.js, React Native, Node.js, Ruby on Rails, AWS, Serverless,
        Redux, xState, Storybook and more.
      </RegularText>
      <Divider />
    </div>
    <Work />
  </div>
)

export default MainProfile
