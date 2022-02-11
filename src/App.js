import React from 'react'

function fetchAPI(param) {
  return fetch("https://api.github.com/users/" + param).then(res => res.json())
    .then((data) => {
      return data
    })
    .catch(console.log)
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetchAPI(this.state.username).then(result => {
      this.setState({ result: result });
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            GitHub username:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {this.state.result && <div><pre>{JSON.stringify(this.state.result, null, 2)}</pre></div>}

      </div>
    );
  }
}

export default App;
