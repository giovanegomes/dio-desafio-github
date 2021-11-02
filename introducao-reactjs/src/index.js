import React, { Component } from "react"
import ReactDOM from "react-dom"
// import Button from './Button'
// import ComponentA from './ComponentA'
// import ComponentB from './ComponentB'
import "./styles.css"

// function sum(a, b) {
//     alert(a + b)
// }

// function firstJSX() {
//     return (
//         <div className="test">
//             Giovane Aires - Introdução ao ReactJS
//         </div>
//     )
// }

// const App = () => {

//     return (
//         <div className="App">
//             { firstJSX() }
//             <Button onClick={() => sum(11,6)} name={'Giovane Aires'}/>
//             <ComponentA>
//                 <ComponentB>
//                     <Button onClick={() => sum(5,6)} name={'João Aires'}/>
//                 </ComponentB>
//             </ComponentA>
//         </div>
//     )
// }

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            cup: 'water'
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                cup: 'juice'
            })
        }, 3000)
    }
    changeCup = () => {
        this.setState({
            cup: 'soda'
        })
    }

    render(){
        const { clock, cup } = this.state

        return (
            <div>
                <h1>{ clock }</h1>
                <button onClick={() => this.changeCup()}>{cup}</button>
            </div>
        )
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)