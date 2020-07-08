import React, { useState, useEffect } from 'react';
import api from './Services/api'

function ConsumingAPI() {

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

    const [users, setUsers] = useState<UserData[]>([])

    useEffect(() => {
        api.get('',{ 
            params: {
                results: 5,
                gender: 'female'
            } 
        }).then(res => {
            setUsers(res.data.results)
        })
    },[])

    return (
        <>
            <h1>Consuming API</h1>
            { users.map(user => (
                <div>
                    <img src={user.picture.medium} alt="fotinha"/>
                    <br/>
                    <strong>Nome: </strong> <span>{user.name.first}</span>
                    <br/>
                    <strong>E-mail: </strong> <span>{user.email}</span>
                </div>
            ))}
        </>
    )
}

export default ConsumingAPI;
