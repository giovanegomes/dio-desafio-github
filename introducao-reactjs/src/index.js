import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import "./styles.css"

function sum(a, b) {
    alert(a + b)
}

function firstJSX() {
    return (
        <div className="test">
            Giovane Aires - Introdução ao ReactJS
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            { firstJSX() }
            <Button onClick={() => sum(11,6)} name={'Giovane Aires'}/>
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => sum(5,6)} name={'João Aires'}/>
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)