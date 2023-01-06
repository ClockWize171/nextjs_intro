import React from 'react'
import useSWR from 'swr'

const DashboardSWR = () => {

    const fetcher = async () => {
        const response = await fetch('http://localhost:4000/dashboard')
        const data = await response.json()
        return data
    }

    const { data, error } = useSWR('dashboard', fetcher)
    if (error) return 'An Error has occured'
    if (!data) return 'Loading'

    return (
        <div>
            <h2><i>Client-Side Data Fetching</i></h2>
            <h2 style={{ textDecoration: 'underline' }}>Dashboard</h2>
            <h2>Posts - {data.post}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
        </div>
    )
}

export default DashboardSWR