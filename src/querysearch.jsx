import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import ErrorContainer from './components/ErrorContainer'
import Spinner from './components/Spinner'
import Weather from './components/Weather'

export default function Search() {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const query = searchParams.get("q")
    const [ inputQuery, setInputQuery ] = useState(query || "")

    const { isLoading, error, data } = useQuery({
        queryKey: ["searchWeather", query],
        queryFn: async () => {
            try {
                if (query == null) {
                    return null }
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

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                setSearchParams({ q: inputQuery })
            }}>
                <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <h2>{query}</h2>
            {error && query && <ErrorContainer>Error: {error.message}</ErrorContainer>}
            {isLoading && <Spinner />}
            <div className="weather-cards">
                {data?.list && data.list.map(weather => (
                    <Weather key={weather.dt} weather={weather} />
                ))}
            </div>
        </div>
    )
}