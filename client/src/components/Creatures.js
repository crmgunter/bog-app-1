import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewCreatureForm from "./NewCreatureForm";

class Creatures extends Component {
  state = {
    creatures: [],
    showNewForm: false
  };
  componentWillMount() {
    this.getAllCreatures();
  }

  getAllCreatures = async () => {
    const res = await axios.get("/api/creatures");
    this.setState({ creatures: res.data });
  };

  toggleNewForm = () => {
    this.setState({ showNewForm: !this.state.showNewForm });
  };

  render() {
    return (
      <div>
        <h1>Hey from creatures!</h1>
        {this.state.creatures.map((creature, i) => {
          return (
            <Link
              key={i}
              creatures={this.state.creatures}
              to={`/creatures/${creature._id}`}
            >
              <h3>{creature.name}</h3>
            </Link>
          );
        })}
        <button onClick={this.toggleNewForm}>Create New Creature</button>
        {this.state.showNewForm ? (
          <NewCreatureForm getAllCreatures={this.getAllCreatures} />
        ) : null}
      </div>
    );
  }
}

export default Creatures;
