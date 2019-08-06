import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import styled from "styled-components";

const UserCardsContainer = styled.div`
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-wrap: wrap;
`;

export default class UserCards extends Component {
  constructor() {
    super();
    this.state = {
      ghHandle: "dvcolin",
      users: []
    };
  }

  getUserInfo = () => {
    axios
      .get(`https://api.github.com/users/${this.state.ghHandle}`)

      .then(res => {
        const userData = res.data;

        this.setState({
          users: [...this.state.users, userData]
        });

        axios
        .get(`https://api.github.com/users/${this.state.ghHandle}/followers`)
  
        .then(res => {
          const userFollowers = res.data;
          userFollowers.forEach(user => {
            this.setState({
                users: [...this.state.users, user]
              });
          })
          
        })
  
        .catch(err => {
          console.log(err);
        });
      })

      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getUserInfo();
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getUserInfo();
    console.log('heres johnny',this.state.users)
  };

  render() {
    return (
      <div style={{margin: '2.5rem 0'}}>
        <input name="ghHandle" type="text" onChange={this.handleChanges} />
        <button onClick={this.handleSubmit}>Submit</button>
        <UserCardsContainer>
          {this.state.users.map(user => {
            return (
              <UserCard
                key={user.id}
                image={user.avatar_url}
                username={user.login}
                location={user.location}
                followers={user.followers}
                following={user.following}
                repos={user.public_repos}
              />
            );
          })}
        </UserCardsContainer>
      </div>
    );
  }
}
