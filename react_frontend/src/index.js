// ANYWHERE where JSX is used, you MUST import React
import React from "react"
import ReactDOM from "react-dom"

// To have access to a component; must use './', '.js' not required
// Entry point to application, top of the tree hierarchy
import App from "./App"


// Renders any of your functional components to the HTML page that has
// this file in their script tag src 
ReactDOM.render(<App />, document.getElementById("root"))