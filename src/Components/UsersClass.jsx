import React, { Component } from "react";

export default class UsersClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    this.setState({ users: data });
  };

  render() {
    const { users } = this.state;

    return (
      <>
        {users.map((user, index) => (
          <div key={index} className="card">
            <div>Name: {user.name}</div>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
          </div>
        ))}
      </>
    );
  }
}
