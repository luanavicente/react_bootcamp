import React from 'react'

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
    return (
        <>
            <img src={props.user.picture.medium} alt="fotinha"/>
            <br/>
            <strong>Nome: </strong> <span>{props.user.name.first}</span>
            <br/>
            <strong>E-mail: </strong> <span>{props.user.email}</span>
            <br/>
        </>
    )
}

export default User