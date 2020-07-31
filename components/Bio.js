import React from "react"
import { RegularText } from "./Typography"
import { Link } from "gatsby"

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
        "How's My Driving", as a Full-Stack Developer, to work a on progressive
        web application that served as a tool for dangerous driving reporting.
        In November, 2019 after the company evolved into "OurStreets App", I was
        hired on a full-time basis to convert a PWA into the new native app.
        <br />
        <br />
        So far on my coding journey, I worked with several frameworks and tools
        such as React.js, React Native, Node.js, Ruby on Rails, AWS, Serverless,
        Redux, xState, Storybook, and more.
        <br />
        <br />I am an extremely curious person! Curiosity and willingness to
        constantly learn new things that's what brought me to coding. Feel free
        to check out <Link to="#work">#work</Link> section to see what I have
        built so far.
      </RegularText>
    </div>
  </div>
)

export default Bio
