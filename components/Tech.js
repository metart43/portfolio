import React from "react"
import { mq } from "../src/util/mediaQueries"
import Divider from "./Divider"
import styled from "styled-components"

const data = {
  ourStreets: {
    title: "OurStreets",
    logo: "/ourstreets-logo.jpg",
    position: "Full-Stack Web Developer",
    duration: "Nov 2019 — July 2020",
    description:
      "OurStreets - crowdsource application allows users to report systemic street safety issues that affect their neighborhood. Ourstreets was a brand new and unique experience for me. I had a chance to build a native application from scratch, by closely working with CTO and taking part in all stages of professional development, starting from building the structure of the app, ending with the process of deploying the app to Apple and Google platforms.",
  },
  driving: {
    title: "How's My Driving",
    logo: "/hmd-logo.png",
    position: "Full-Stack Web Developer",
    duration: "May 2019 - Oct 2019 (Contract)",
    description: `How's My Driving - progressive web application that allowed users to report dangerous driving behavior, such as near miss, speeding, sign ignoring etc.
                  I joined start-up company on a volunteer basis and later transitioned into a contract employee.
                  While working on PWA, I gained vital experience by helping to redesign the front face of the application, building a full-stack feature for feedback sharing, implementing "What's New Section".`,
  },
  flatiron: {
    title: "Flatiron",
    logo: "/flatiron-logo.png",
    position: "Student",
    duration: "Jan 2019 - April 2019",
    description: `During 4 months of the immersive bootcamp, I was able to learn and solidify core concepts of Test Driven and Full Stack Development (React.js/Ruby On Rails) by completing code challanges and working on projects. I successfully learned the basics of two programming languages. The entire course was divided into 2 parts. The first part was dedicated to the core concepts of Ruby following by the process of getting to know Ruby On Rails framework. 
                  Second part - we focused on Front-End development with vanilla JavaScript; we finished the second part of the boot camp by building a Full-Stack application with React.js/Ruby on Rails.`,
  },
}

const styles = {
  card: mq({
    width: ["auto", "auto", "70%", "70%"],
    height: "auto",
    padding: 20,
  }),
  cardHeader: mq({
    fontSize: ["1rem", "1rem", "1.25rem"],
    fontWeight: 600,
    color: "#112d4e",
  }),
  cardSubtitle: mq({
    fontSize: "1rem",
    color: "#3f72af",
    fontWeight: 500,
    margin: "10px 0px 10px 0px",
  }),
  cardBody: mq({
    fontSize: "1rem",
    padding: ["0px", "10px", "20px", "20px"],
  }),
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Tech = () => (
  <div className="tech">
    {Object.values(data).map(
      ({ title, position, duration, description, logo }, i) => (
        <div css={styles.card} key={i}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              alt={title}
              src={logo}
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
            <div css={styles.cardHeader}>{title}</div>
          </div>
          <div css={styles.cardSubtitle}>{position}</div>
          <div css={styles.cardSubtitle}>{duration}</div>
          <div css={styles.cardBody}>{description}</div>
          <Divider />
        </div>
      )
    )}
  </div>
)

export default Tech
