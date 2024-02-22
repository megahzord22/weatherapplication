import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <div className="page-container">
            <header>Header</header>
            <nav>
                <ul>
                    <li><NavLink to="/query-search">Search the weather for any city</NavLink></li>
                </ul>
            </nav>
            <main><Outlet /></main>
            <footer>Copyright 2024 Megan Grant</footer>
        </div>
    )
}