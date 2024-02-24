import React from 'react'
import Search from './querysearch'
import { css } from '@emotion/react' 

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
    `
    return (
        <div className="page-container">
            <header css={headerStyles}>Sunny Side Up <span className="brand-symbol">↑ </span></header>
            <main>
                <Search /> 
            </main>
            <footer>Copyright 2024 Megan Grant</footer>
        </div>
    )
}