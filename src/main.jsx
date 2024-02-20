import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Root from './Root'
import QuerySearch from './querysearch'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "query-search", element: <QuerySearch /> },
            // {
            //     path: "org-repos/:org",
            //     element: <RouterOrgRepos />,
            //     loader: orgLoader
            // },
            // {
            //     path: "router-post",
            //     element: <RouterPost />,
            //     action: postAction
            // },
            // { index: true, element: <Navigate to="/fetch-search" replace /> }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>,
)
