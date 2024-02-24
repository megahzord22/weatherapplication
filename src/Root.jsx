import React from 'react'
import Search from './querysearch' 

export default function Root() {
    return (
        <div className="page-container">
            <header>Header</header>
            <main>
                <Search /> 
            </main>
            <footer>Copyright 2024 Megan Grant</footer>
        </div>
    )
}