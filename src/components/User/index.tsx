import React from 'react'
import { Container, Picture, Info } from './styles'

interface UserData { 
    email: string,
    picture: {
        medium: string
    },
    name: {
        title: string,
        first: string,
        last: string
    }
}

interface User {
    user: UserData
}

const User: React.FC<User> = (props: User) => {

    const active = props.user.name.first.length > 5 

    return (
        <Container active={active}>
            <Picture>
                <img src={props.user.picture.medium} alt="fotinha"/>
            </Picture>

            <Info>
                <span><strong>Nome: </strong>{props.user.name.first}</span>
                <span><strong>E-mail: </strong>{props.user.email}</span>
            </Info>

            <button>Delete</button>

        </Container>
    )
}

export default User