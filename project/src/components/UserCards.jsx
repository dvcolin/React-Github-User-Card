import React, { Component } from 'react'
import axios from 'axios'
import UserCard from './UserCard';
import styled from 'styled-components'

const UserCardsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export default class UserCards extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/dvcolin')

        .then(res => {
            const userData = res.data;
            console.log('user data', userData);

            this.setState({
                user: {
                    username: userData.login,
                    location: userData.location,
                }
            })

            console.log(this.state.user);
        })

        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <UserCardsContainer>
                <UserCard username={this.state.user.username} />
            </UserCardsContainer>
        )
    }
}
