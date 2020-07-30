import React from "react"
import { RegularText } from "./Typography"
import Divider from "./Divider"

const Bio = () => (
  <div>
    <div>
      <RegularText>
        Hi {String.fromCodePoint(0x1f47e)}! I am a Full Stack Web Developer
        based in Washington, DC.
        <br />
        <br />
        I write code in Javascript and Ruby. In January of 2019, I enrolled at
        Flatiron Full-Stack Web Development Bootcamp; I graduated in April of
        2019. Immediately after graduation, I joined the local start-up company
        "How's My Driving", as a Full-Stack Developer. In November, 2019 after
        the company evolved into "OurStreets App", I was hired on a full-time
        basis to build the new native app.
        <br />
        <br />
        So far on my coding journey, I worked with several frameworks and tools
        such as React.js, React Native, Node.js, Ruby on Rails, AWS, Serverless,
        Redux, xState, Storybook, and more.
      </RegularText>
    </div>
  </div>
)

export default Bio
