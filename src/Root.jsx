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
    return (
        <div className="page-container">
            <header css={headerStyles}>
            <img src={logo} alt="Logo" css={logoStyles} /> 
                Sunny Side Up</header>
            <main>
                <Search /> 
            </main>
            <footer>Copyright 2024 Megan Grant</footer>
        </div>
    )
}