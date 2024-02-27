import React from 'react'
import Search from './querysearch'
import { css } from '@emotion/react' 
import logo from './logo.jpg'; 

export default function Root() {
    const headerStyles = css`
        font-family: 'Arial', sans-serif;
        font-size: 48px; 
        font-weight: bold;
        color: #FFD700; 
        text-transform: uppercase;
        letter-spacing: 4px; 
        margin-bottom: 20px;
        text-align: center; 
        padding: 20px; 
        background-color: rgba(255, 255, 255, 0.7);
        display: flex; 
        align-items: center; 
        justify-content: center; 
        max-height: 20vh; 
        width: 100%; 
        overflow: hidden; 
        margin-bottom: 20px; 

        .brand-symbol {
            font-size: 36px; 
            vertical-align: middle;
            color: #3498db;
        }
        @media (max-width: 600px) {
            font-size: 80px; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            padding: 20px 0; 
            max-height: none; 
        }
    `
    const logoStyles = css`
        width: 60px; 
        height: auto; 
        margin-right: 10px; 
        @media (max-width: 600px) {
            width: 100px; /* Increase width for smaller screens */
        }
`
const footerStyles = css`
    background-color: #2c3e50;
    color: #fff;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const mainStyles = css`
    flex: 1; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    padding: 0 20px; 
`
const containerStyles = css`
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
`
    return (
        <div css={containerStyles}>
            <header css={headerStyles}>
            <img src={logo} alt="Logo" css={logoStyles} /> 
                Sunny Side Up</header>
            <main css={mainStyles}>
                <Search /> 
            </main>
            <footer css={footerStyles}>Copyright 2024 Megan Grant</footer>
        </div>
    )
}