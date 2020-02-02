import React, { Component } from "react"

class GameTwo extends Component {
    constructor() {
        super()
        this.state = {
            dic: [],
            passtest: false
        }
        this.handleChangeOne = this.handleChangeOne.bind(this)
        this.handleChangeTwo = this.handleChangeTwo.bind(this)
        this.handleChangeThree = this.handleChangeThree.bind(this)
        this.handleChangeFour = this.handleChangeFour.bind(this)
        this.handleChangeFive = this.handleChangeFive.bind(this)
        this.handleChangeSix = this.handleChangeSix.bind(this)
    }

    handleChangeOne() {
        this.state.dic.push(1)
    }

    handleChangeTwo() {
        this.state.dic.push(2)
    }

    handleChangeThree() {
        this.state.dic.push(3)
    }

    handleChangeFour() {
        this.state.dic.push(4)
    }

    handleChangeFive() {
        this.state.dic.push(5)
    }

    handleChangeSix() {
        this.state.dic.push(6)
    }

    render() {
        if (this.state.dic.rand_num == [1, 2, 3, 4, 5, 6]) {
            this.state.passtest = true
        }

        if (this.state.dic != [1, 2, 3, 4, 5, 6]) {
            this.state.passtest = false
        }

        return (
            <div className="game">
                <h1>Drunk Test #2</h1>
                <hr></hr>
                <h3>Click the buttons in order!</h3>
                <button onClick={this.handleChangeFour}>4</button>
                <button onClick={this.handleChangeThree}>3</button>
                <button onClick={this.handleChangeOne}>1</button>
                <button onClick={this.handleChangeSix}>6</button>
                <button onClick={this.handleChangeTwo}>2</button>
                <button onClick={this.handleChangeFive}>5</button>
            </div>
        )
    }
}


export default GameTwo