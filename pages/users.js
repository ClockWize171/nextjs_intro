import React from 'react'
import User from '../components/user'

const UsersLists = ({ users }) => {
    return (
        <div>
            <h1>Lists of Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <User user={user} />
                    <br />
                </div>
            ))}
        </div>
    )
}

export default UsersLists

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data,
        },
    }
}