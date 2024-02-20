import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import ErrorContainer from '../components/ErrorContainer'
import Spinner from '../components/Spinner'

export default function Search() {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const query = searchParams.get("q")
    const [ inputQuery, setInputQuery ] = useState(query || "")

    const { isLoading, error, data } = useQuery({
        queryKey: ["searchWeather", query],
        queryFn: async () => {
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=7d39025bbcc1ee38a3ed87d12f12326d`
                )
                if (!res.ok) {
                    throw new Error('Network response was not ok')
                }
                return res.json()
            } catch (error) {
                throw new Error(`Error fetching weather data: ${error.message}`)
            }
        }
    })

    console.log("== isLoading:", isLoading)
    console.log("== fetchStatus:", fetchStatus)

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                setSearchParams({ q: inputQuery })
            }}>
                <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <h2>The city you are looking up: {query}</h2>
            {error && <ErrorContainer>Error: {error.message}</ErrorContainer>}
            {isLoading && <Spinner />}
            <ul>
                {data?.list && data.list.map(weather => (
                    <li key={weather.id}>
                        {weather.dt_txt}: {weather.weather[0].description}
                    </li>
                ))}
            </ul>
        </div>
    )
}