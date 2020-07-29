import React from "react"
import { Header, Subheader } from "./Typography"
import { mq } from "../src/util/mediaQueries"

const data = {
  ourstreetsApp: {
    title: "OurStreets App",
    description: `OurStreets - crowdsource application allows users to report systemic
          street safety issues that affect their neighborhood. I was responsible
          for Front End development of the application. It is built using React
          Native and Expo.`,
    src: "/ourstreets-app.png",
  },
  ourStreetsSupplies: {
    title: "OurStreets Supplies",
    description:
      "OurStreets Supplies was a feature in the OurStreets app allowing users to report and search the availability of essential supplies during the shortages during the initial stages of the COVID-19 pandemic.",
    src: "/ourstreets-supplies.png",
  },
}
const styles = {
  content: { display: "flex", alignItems: "center", flexDirection: "column" },
  screenshot: mq({
    width: ["100%", "100%", "300px", "300px"],
  }),
  textWrapper: mq({
    width: ["100%", "100%", "450px", "450px"],
  }),
  workWrapper: mq({
    margin: 20,
    background: "#f9f7f7",
    display: "flex",
    flexDirection: ["column", "column", "row", "row"],
    justifyContent: "space-evenly",
    alignItems: "center",
  }),
}

const Work = () => (
  <div css={styles.content}>
    <Header>#work</Header>
    {Object.values(data).map(({ title, description, src }) => (
      <div
        style={{
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Header>{title}</Header>
        </div>
        <div css={styles.workWrapper}>
          <img css={styles.screenshot} src={src} />
          <div css={styles.textWrapper}>
            <Subheader>{description}</Subheader>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Work
