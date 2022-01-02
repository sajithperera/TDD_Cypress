import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  };

  componentDidMount() {
    this.getTodos();

  };
  getTodos() {
    axios.get('http://localhost:5009/todos')
      .then((res) => { this.setState({ todos: res.data.data.todos }); })
      .catch((err) => { });
  };

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h1 className="title is-1">Todo List</h1>
                <hr/>
                <div className="content">
                  <div className="field has-addons">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
};

export default App;
