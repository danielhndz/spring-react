const React = require("react");
const ReactDOM = require("react-dom");

class App extends React.Component {
  render() {
    return <div>Holi desde React</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

console.log("holi");
