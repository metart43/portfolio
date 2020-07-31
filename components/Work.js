import React from "react"
import { Header, Subheader } from "./Typography"
import { mq } from "../src/util/mediaQueries"
import Divider from "./Divider"

const data = {
  ourstreetsApp: {
    title: "OurStreets App",
    description: `OurStreets - crowdsource application allows users to report systemic
          street safety issues that affect their neighborhood. I was responsible
          for Front End development of the application. It is built using React
          Native and Expo.`,
    src: "/ourstreets-app.png",
    resources: {
      youtube: {
        href: "https://www.youtube.com/watch?v=eGCN-3jWik0",
        src: "/youtube-icon.svg",
        title: "demo",
      },
      playStore: {
        href:
          "https://play.google.com/store/apps/details?id=com.ourstreets.reporter",
        src: "/play-store-icon.svg",
        title: "andrd",
      },
      appleStore: {
        href: "https://apps.apple.com/us/app/ourstreets/id1494198355?ls=1",
        src: "/apple-icon.svg",
        title: "apple",
      },
    },
    webApp: false,
  },
  ourStreetsSupplies: {
    title: "OurStreets Supplies",
    description:
      "OurStreets Supplies was a feature in the OurStreets app allowing users to report and search the availability of essential supplies during the shortages during the initial stages of the COVID-19 pandemic.",
    src: "/ourstreets-supplies.png",
    resources: {
      youtube: {
        href: "https://www.youtube.com/watch?v=2ESxVeEbnWo",
        src: "/youtube-icon.svg",
        title: "demo",
      },
      medium: {
        href:
          "https://medium.com/ourstreets/one-month-of-supplies-a1ad9a07c374",
        src: "/medium-icon.svg",
        title: "blog",
      },
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
      js: {
        href: "https://github.com/metart43/spotify_frontend",
        src: "/js.svg",
        title: "repo",
      },
      ruby: {
        href: "https://github.com/metart43/spotify_backend",
        src: "/ruby.svg",
        title: "repo",
      },
      youtube: {
        href: "https://www.youtube.com/watch?v=mBcwxlBNTu0&feature=youtu.be",
        src: "/youtube-icon.svg",
        title: "demo",
      },
    },
  },
  insultApp: {
    title: "Trash App",
    webApp: true,
    src: "/insult-app.png",
    description:
      "Twitter mock-up. App allows user to create a group, send a message to the user, search for users, and invite a user to a specific group. Front-End and Back-End of the application is built usin Ruby on Rails; PostgreSQL - used for data management",
    resources: {
      ruby: {
        href: "https://github.com/metart43/insult_app",
        src: "/ruby.svg",
        title: "repo",
      },
      youtube: {
        href: "https://www.youtube.com/watch?v=aaimNZyetwI&feature=youtu.be",
        src: "/youtube-icon.svg",
        title: "demo",
      },
    },
  },
}
const styles = {
  content: { display: "flex", alignItems: "center", flexDirection: "column" },
  screenshot: mq({
    // flexGrow: ["1", "1", "0.2", "0.2"],
    width: ["100%", "100%", "200px", "200px"],
  }),
  screenshotWebApp: mq({
    // flexGrow: ["1", "1", "0.8", "0.8"],
    width: ["100%", "100%", "450px", "450px"],
  }),
  textWrapper: mq({
    flexGrow: ["1", "1", "0.5", "0.5"],
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
                ? Object.values(resources).map(({ src, title, href }, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <a href={href} target="_blank" rel="noreferrer">
                        <img
                          role="presentation"
                          alt={title}
                          onMouseEnter={e =>
                            (e.currentTarget.src = `/hovered-${src.slice(1)}`)
                          }
                          onMouseOut={e => (e.currentTarget.src = src)}
                          onBlur={e => (e.currentTarget.src = src)}
                          css={styles.icons}
                          src={src}
                        />
                      </a>
                      {title ? title : null}
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div css={styles.workWrapper}>
            <img
              alt={title}
              css={webApp ? styles.screenshotWebApp : styles.screenshot}
              src={src}
            />
            <div css={styles.textWrapper}>
              <Subheader>{description}</Subheader>
            </div>
          </div>
          {i === Object.values(data).length - 1 ? null : <Divider />}
        </div>
      )
    )}
  </div>
)

export default Work
