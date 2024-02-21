import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <div className="page-container">
            <nav>
                <ul>
                    <li><NavLink to="/query-search">Search the weather for any city</NavLink></li>
                </ul>
            </nav>
            <main><Outlet /></main>
        </div>
    )
}