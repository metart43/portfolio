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
    resources: {
      youtube: { url: "", src: "/youtube-icon.svg", title: "demo" },
      playStore: { url: "", src: "/play-store-icon.svg", title: "andrd" },
      appleStore: { url: "", src: "/apple-icon.svg", title: "apple" },
    },
    webApp: false,
  },
  ourStreetsSupplies: {
    title: "OurStreets Supplies",
    description:
      "OurStreets Supplies was a feature in the OurStreets app allowing users to report and search the availability of essential supplies during the shortages during the initial stages of the COVID-19 pandemic.",
    src: "/ourstreets-supplies.png",
    resources: {
      youtube: { url: "", src: "/youtube-icon.svg", title: "demo" },
      medium: { url: "", src: "/medium-icon.svg", title: "blog" },
    },
    webApp: false,
  },
  ourStreetsManager: {
    title: "OurStreets Manager",
    src: "/ourstreets-manager.png",
    description:
      "OurStreets Manager is used by advocacy, municipal, and micro-mobility partners to gain insights and respond to reports from users of the app. I co-created front-end of the application using React.js, Material-UI and Charts.js",
    webApp: true,
  },
  hiddenGem: {
    title: "Hidden Gems",
    description:
      "Mock-up of Spotify player that allows to control the playback, switch the playback between devices, create a favorites list, add or remove a song from the list, search for specific songs. Front-End is built using React.js, styled with AntDesign. Back-End - Ruby On Rails, PostgreSQL - data management.",
    webApp: true,
    src: "/hidden-gem.png",
    resources: {
      js: { url: "", src: "/js.svg", title: "repo" },
      ruby: { url: "", src: "/ruby.svg", title: "repo" },
      youtube: { url: "", src: "/youtube-icon.svg", title: "demo" },
    },
  },
  insultApp: {
    title: "Trash App",
    webApp: true,
    src: "/insult-app.png",
    description:
      "Twitter mock-up. App allows user to create a group, send a message to the user, search for users, and invite a user to a specific group. Front-End and Back-End of the application is built usin Ruby on Rails; PostgreSQL - used for data management",
    resources: {
      ruby: { url: "", src: "/ruby.svg", title: "repo" },
      youtube: { url: "", src: "/youtube-icon.svg", title: "demo" },
    },
  },
}
const styles = {
  content: { display: "flex", alignItems: "center", flexDirection: "column" },
  screenshot: mq({
    width: ["100%", "100%", "200px", "200px"],
  }),
  screenshotWebApp: mq({
    width: ["100%", "100%", "450px", "450px"],
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
  icons: {
    width: "30px",
    height: "30px",
    marginRight: 20,
    marginLeft: 20,
  },
}

const Work = () => (
  <div css={styles.content}>
    <Header>#work</Header>
    {Object.values(data).map(
      ({ title, description, src, resources, webApp }, i) => (
        <div
          key={i}
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Header>{title}</Header>
            <div style={{ display: "flex", alignSelf: "center" }}>
              {resources
                ? Object.values(resources).map(({ src, title }, i) => (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        key={i}
                        onMouseEnter={e =>
                          (e.currentTarget.src =
                            `/hovered-` + `${src.slice(1)}`)
                        }
                        onMouseOut={e => (e.currentTarget.src = src)}
                        css={styles.icons}
                        src={src}
                      />
                      {title ? title : null}
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div css={styles.workWrapper}>
            <img
              css={webApp ? styles.screenshotWebApp : styles.screenshot}
              src={src}
            />
            <div css={styles.textWrapper}>
              <Subheader>{description}</Subheader>
            </div>
          </div>
        </div>
      )
    )}
  </div>
)

export default Work
