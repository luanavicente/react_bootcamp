import React, { useState, useEffect } from 'react';
import api from './services/api'
import User from './components/User'

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
        },
        dob:{
            age: number
        }
    }

    const [users, setUsers] = useState<UserData[]>([])

    useEffect(() => {
        api.get('',{ 
            params: {
                results: 5,
                gender: 'female',
                nat: 'br'
            } 
        }).then(res => {
            setUsers(res.data.results)
        })
    },[])

    return (
        <>
            <h1>Consuming API</h1>
            { users.map(user => (
                <>
                    <User user={user}/>
                    <hr/>
                </>
            ))}
        </>
    )
}

export default ConsumingAPI;
