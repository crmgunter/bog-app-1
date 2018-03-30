import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditCreatureForm from "./EditCreatureForm";

class SingleCreature extends Component {
  state = {
    creature: [],
    editForm: false
  };

  async componentWillMount() {
    const creatureId = this.props.match.params.creatureId;
    const response = await axios.get(`/api/creatures/${creatureId}`);
    const creature = response.data;
    this.setState({ creature: creature });
    console.log(this.state);
  }

  toggleEditForm = () => {
    this.setState({ editForm: !this.state.editForm });
  };

  render() {
    return (
      <div>
        <Link to="/creatures/">back</Link>
        <h1>hey</h1>
        <h1>{this.state.creature.name}</h1>
        <p>Description: {this.state.creature.description}</p>
        <button onClick={this.toggleEditForm}>Edit Creature</button>
        {this.state.editForm ? (
          <EditCreatureForm />
        ) : null}
      </div>
    );
  }
}

export default SingleCreature;
