import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a, b) {
    return a + b
}

function firstJSX() {
    return (
        <div className="test">
            Giovane Aires - Introdução ao ReactJS
            <h1>Soma: {sum(11, 6)}</h1>
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            { firstJSX() }
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)