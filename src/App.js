import React from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideosCon from "./components/VideosCon";
import "./general.css"
import "./header.css"
import "./sidebar.css"
import "./gridCon.css"
import {createBrowserRouter, RouterProvider } from 'react-router-dom'


const App = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <VideosCon />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        element: <App />,
        path: "/"
    }
])

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)