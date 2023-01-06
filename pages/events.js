import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Events = ({ eventList }) => {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()
    const fetchEntertainmentsEvents = async () => {
        const response = await fetch(' http://localhost:4000/event?category=entertainment')
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, { shallow: true })
    }

    return (
        <div>
            <button onClick={fetchEntertainmentsEvents}>Entertainments Events</button>
            <h1>Lists of events</h1>
            {
                events.map(event => (
                    <div key={event.id}>
                        <h2>
                            {event.id} {event.title} {event.data} | {event.category}
                        </h2>
                        <p>{event.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Events

export const getServerSideProps = async (context) => {
    const { query } = context
    const { category } = query
    const queryString = category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4000/event?${queryString}`)
    const data = await response.json()
    return {
        props: {
            eventList: data
        }
    }
}