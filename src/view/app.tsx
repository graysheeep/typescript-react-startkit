import * as React from "react"
import * as ReactDOM from "react-dom"
import Hello from "../components/hello"

require("../styles/app.scss")

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("app")
)
