import * as React from "react"
import * as ReactDOM from "react-dom"
import { increment } from '../actions'
import { connect } from 'react-redux'

class Hello extends React.Component<any, any> {
  render() {
    return (
      <div>
        <p>
          <label>Counter: </label>
          <b>#{this.props.counter}</b>
        </p>
        <button onClick={e => this.props.incr() }>INCREMENT</button>
        <span style={{ padding: "0 5px" }} />
        <button onClick={e => this.props.decr() }>DECREMENT</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: any) => ({
  incr: () => {
    dispatch({ type: 'INCR', by: 1 });
  },
  decr: () => {
    dispatch({ type: 'INCR', by: -1 });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);