import React, { Component } from 'react'
import axios from 'axios'
import UserCard from './UserCard';
import styled from 'styled-components'

const UserCardsContainer = styled.div`
    width: 80%;
    margin: 2.5rem auto;
    display: flex;
    flex-direction: column;
`;

export default class UserCards extends Component {
    constructor() {
        super();
        this.state = {
            ghHandle: 'dvcolin',
            users: [],
        }
    }

    
    getUserInfo = () => {
        axios.get(`https://api.github.com/users/${this.state.ghHandle}`)

        .then(res => {
            const userData = res.data;
            console.log('user data', userData);

            this.setState({
                users: [...this.state.users, userData],
            })

            console.log(this.state.users);
        })

        .catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
       this.getUserInfo();
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault();
        this.getUserInfo();
    }

    render() {
        return (
            <UserCardsContainer>
                <input name='ghHandle' type='text' onChange={this.handleChanges} />
                <button onClick={this.handleSubmit}>Submit</button>
                {this.state.users.map(user => {
                 return <UserCard username={user.login} location={user.location} />   
                })}
            </UserCardsContainer>
        )
    }
}
