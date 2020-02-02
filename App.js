import React, { Component } from "react"
import GameOne from "./components/GameOne"
import GameTwo from "./components/GameTwo"
import GameThree from "./components/GameThree"
import Result from "./components/Result"
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            passedtest: true,
            finalresult: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                passedtest: false
            })
        }, 10000)
    }

    render() {
        if (this.state.passedtest == true) {
            return (
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link">Home<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Resources</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Contact Us</a>
                                </li>
                            </ul>
                        </div>    
                    </nav>
    
                    <div class="col-md-12 mb-4 white-text text-center wow fadeIn">
                        <h3 class="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">SafeDrive</h3>
                        <hr class="hr-light my-4 w-75"></hr>
                        <div class="row">
                            <div class="col-md-2"></div>
                            <h4 class="col-md-8 subtext-header mt-2 mb-4">Our application prevents drunk driving by enforcing a test, measuring the user's level of drunkedness and if the test fails, it warns the user's contacts to notify the officials!</h4>
                            <div class="col-md-2"></div>
                        </div> 
                    </div>
                    <body> 
                        <div class="container">
                            <div class="row col-md-16">
                                <div class="container card mt-3 col-md-4" ><GameOne /></div>
                                <div class="container card mt-3 col-md-4" ><GameTwo /></div>
                                <div class="container card mt-3 col-md-4" ><GameThree /></div>
                            </div>
                        </div>
                    </body>
                </div>        
            )
        } else {
            return (
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link">Home<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Resources</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Contact Us</a>
                                </li>
                            </ul>
                        </div>    
                    </nav>
    
                    <div class="col-md-12 mb-4 white-text text-center wow fadeIn">
                        <h3 class="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">SafeDrive</h3>
                        <hr class="hr-light my-4 w-75"></hr>
                        <div class="row">
                            <div class="col-md-2"></div>
                            <h4 class="col-md-8 subtext-header mt-2 mb-4">Our application prevents drunk driving by enforcing a test, measuring the user's level of drunkedness and if the test fails, it warns the user's contacts to notify the officials!</h4>
                            <div class="col-md-2"></div>
                        </div> 
                    </div>
                    <body> 
                        <div class="container">
                            <div class="row col-md-16">
                                <div class="container card mt-3 col-md-4" ><GameOne /></div>
                                <div class="container card mt-3 col-md-4" ><GameTwo /></div>
                                <div class="container card mt-3 col-md-4" ><GameThree /></div>
                            </div>
                            <br></br>
                            <div class="row col-md-16">
                                <Result finalresult={this.state.finalresult} />
                            </div>
                        </div>
                    </body>

                </div>        
            )
        }
    }
}

export default App