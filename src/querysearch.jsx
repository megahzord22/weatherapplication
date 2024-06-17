import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import ErrorContainer from './components/ErrorContainer'
import Spinner from './components/Spinner'
import Weather from './components/Weather'
import { css } from '@emotion/react'


export default function Search() {
const formStyles = css`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column; 
    @media (min-width: 600px) {
        flex-direction: row; 
    }
    `
const cardsStyles = css`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
const buttonStyles = css`
    background-color: #FFD700; 
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    @media (max-width: 600px) { 
    width: 100%; 
    margin-top: 10px;
    font-size: 20px;
}
    &:hover { 
        transform: scale(1.1); 
    }

`
const inputStyles = css`
    border: 2px solid #FFD700; 
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    width: 200px;
    margin-right: 10px;
    color: 999;
    @media (max-width: 600px) { 
        width: 100%; 
        font-size: 20px;
    }
`
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
                    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=addyourownappid`
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
            <form css={formStyles} onSubmit={e => {
                e.preventDefault()
                setSearchParams({ q: inputQuery })
            }}>
                <input css={inputStyles} value={inputQuery} placeholder="Enter any city" onChange={e => setInputQuery(e.target.value)} />
                <button css={buttonStyles}type="submit"><strong>Search City</strong></button>
            </form>
            <h2>{query}</h2>
            {error && query && <ErrorContainer>Error: {error.message}</ErrorContainer>}
            {isLoading && <Spinner />}
            <div css={cardsStyles}>
                {data?.list && data.list.map(weather => (
                    <div key={weather.dt}>{weather.id}<Weather weather={weather} /></div>
                ))}
            </div>
        </div>
    )
}