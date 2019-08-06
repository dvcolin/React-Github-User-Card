import React from 'react'
import styled from 'styled-components'

const UserCardContainer = styled.div`
    display: flex;
    width: 40%;
`;

const UserName = styled.h1`
    font-size: 2.5rem;
    color: orange;
`;

const UserLocation = styled.h3`
    font-size: 2rem;
    color: green;
`;

const UserCard = props => {
    return (
        <UserCardContainer>
            <UserName>{props.username}</UserName>
            <UserLocation>{props.location}</UserLocation>
        </UserCardContainer>
    )
}

export default UserCard
