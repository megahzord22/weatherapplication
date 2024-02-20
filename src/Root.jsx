import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <div className="page-container">
            <nav>
                <ul>
                    <li><NavLink to="/home">Search with fetch()</NavLink></li>
                    <li><NavLink to="/weather">Post with fetch()</NavLink></li>
                </ul>
            </nav>
            <main><Outlet /></main>
        </div>
    )
}