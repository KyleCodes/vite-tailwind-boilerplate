import React, {ReactElement} from "react"
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import ReactDOM from "react-dom/client"

import "./index.css"

function App(): ReactElement {
  return <div className="h-screen w-screen flex items-center justify-center">Hello World!</div>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
