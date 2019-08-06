import React from 'react'
import styled from 'styled-components'

const UserCardContainer = styled.div`
    background: blue;
    display: flex;
    width: 40%;
`;

const UserName = styled.h1`
    font-size: 2.5rem;
    color: orange;
`;

const UserCard = props => {
    return (
        <UserCardContainer>
            <UserName>{props.username}</UserName>
        </UserCardContainer>
    )
}

export default UserCard
