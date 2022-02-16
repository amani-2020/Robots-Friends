import logo from "./logo.svg";
import "./App.css";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { robots: robots, searchfield: "" };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    return (
      <div className="App tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
