import React from 'react'
import styled from 'styled-components'

const UserCardContainer = styled.div`
    display: flex;
    border: 2px solid #a1a1a1;
    padding: 2.5rem;
    border-radius: 7px;
    margin: 2.5rem;
`;

const UserImage = styled.img`
    height: 200px;
    width: 200px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2.5rem;
    width: 300px;
`;

const UserName = styled.h1`
    font-size: 3rem;
    color: white;
    margin: 0;
    padding: 0;
`;

const UserLocation = styled.h3`
    font-size: 1.8rem;
    margin: 1rem 0;
    color: #d1d1d1;
`;

const UserGeneral = styled.p`
    font-size: 1.6rem;
    margin: 0.8rem 0;
    color: white;
`;

const UserCard = props => {
    return (
        <UserCardContainer>
            <UserImage src={props.image} />
            <UserInfo>
                <UserName>{props.username}</UserName>
                <UserLocation>{props.location}</UserLocation>
                <UserGeneral>Followers: {props.followers}</UserGeneral>
                <UserGeneral>Following: {props.following}</UserGeneral>
                <UserGeneral>Public Repos: {props.repos}</UserGeneral>
            </UserInfo>
        </UserCardContainer>
    )
}

export default UserCard
