import React, { Component } from 'react';
import '@blueprintjs/core/dist/blueprint.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src="/logo.png" />
        <ul className="example-list">
          <li>
            <span className="pt-icon-large pt-icon-properties"></span>
            <a href="/todos">
              Todo List Example
            </a>
          </li>
          <li>
            <span className="pt-icon-large pt-icon-highlight"></span>
            <a href="/blog">
              Blog Example
            </a>
          </li>
          <li>
            <span className="pt-icon-large pt-icon-numerical"></span>
            <a href="/pagination">
              Pagination Example
            </a>
          </li>
          <li>
            <span className="pt-icon-large pt-icon-search-template"></span>
            <a href="/github">
              Github Search Example
            </a>
          </li>
        </ul>

        <hr />

        <h5>Visit projects on Github</h5>
        <ul className="repo-links">
          <li><a href="https://www.github.com/Buildize/hacksaw" target="_blank">Hacksaw Repository</a></li>
          <li><a href="https://www.github.com/Buildize/hacksaw-react" target="_blank">Hacksaw React Repository</a></li>
          <li><a href="https://www.github.com/Buildize/hacksaw-examples" target="_blank">Hacksaw Examples Repository</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
