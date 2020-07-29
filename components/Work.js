import React from "react"
import { Header, Subheader } from "./Typography"

const styles = {
  header: {
    textAlign: "center",
  },
}

const Work = () => (
  <div>
    <div style={styles.header}>
      <Header style={styles.header}>#work</Header>
      <Header>OurStreets App</Header>
    </div>
    <Subheader>
      OurStreets - crowdsource application allows users to report systemic
      street safety issues that affect their neighborhood. I was respnsible for
      Front End development of this app. It is built using React Native and Expo
    </Subheader>
  </div>
)

export default Work
