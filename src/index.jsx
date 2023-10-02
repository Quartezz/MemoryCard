import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Header from "./components/Header"
import "./styles/index.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>
)

