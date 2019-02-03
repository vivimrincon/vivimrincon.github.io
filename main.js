
let React = require('react');
let ReactDOM = require('react-dom');
let Button = require('@material-ui/core/Button');

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));