import "typeface-inter"
import "./src/styles/global.css"

const ReactDOM = require("react-dom")

export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}
