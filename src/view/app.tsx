import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import Hello from "../components/hello"

require("../styles/app.scss")

interface AppState {
  counter: number;
};

interface AppAction {
  type: string;
  by: number;
};

let store = createStore(
  (state: AppState, action: AppAction) => {
    switch (action.type) {
      case 'INCR':
        return { counter: state.counter + action.by };
      default:
        return state;
    }
  },
  { counter: 0 }
);

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Hello />
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("app")
)
