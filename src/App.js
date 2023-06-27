import React from "react"
import "./App.css"

class App extends React.Component {

  state = {
    displayValue: "",
    massage :""
  }

  handleInputChange = (event, input) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value))
      this.setState({ [input]: event.target.value })
  }

  handlebutton = (button) => {

    try {
      if (button === "C") {
        this.clearDisplay()
      } else if (button === "=") {
        this.calculate()
      } else if (button === ".") {
        if (this.state.displayValue.charAt(0) === "") {
          this.dott()
        } else {
          this.inputDecimal()
        }
      } else {
        try {
          this.setState({ displayValue: this.state.displayValue + button })
        } catch (error) {
          this.setState({
            displayValue: this.state.displayValue = "Type valid input"
          })
        }

      }

    } catch (error) {
      this.setState({
        displayValue: this.state.displayValue = "Type valid input"
      })
    }
  }

  dott = () => {
    console.log("inside a dott");
    this.setState({
      displayValue: this.state.displayValue = "0" + "."
    })
  }

  clearDisplay = () => {
    this.setState({
      massage:this.state.massage =`Clear Data Successfully`
    })
  setTimeout(() => {
    this.setState({
      massage:this.state.massage =""
    })
  }, 3000);
    this.setState({
      displayValue: this.state.displayValue = ""
    })
  }

  inputDigit = (digit) => {
    const { displayValue } = this.state;
    if (this.state.displayValue === "0") {
      this.setState({ displayValue: String(digit) })
    } else {
      this.setState({ displayValue: displayValue + digit })
    }
  }

  inputDecimal = () => {
    // console.log("inside a inputDecimal");
    const { displayValue } = this.state

    if (!displayValue.includes(".")) {
      this.setState({ displayValue: displayValue + "." })
    }

    if (this.state.displayValue.charAt(0) === ".") {
      this.setState({
        displayValue: this.state.displayValue = "0" + "."
      })
    }
  }

  calculate = () => {
    // console.log("inside =");
    try {
      this.setState({
        displayValue: eval(this.state.displayValue)
      })
    } catch (error) {
      this.setState({
        displayValue: this.state.displayValue = "Syntax Error"
      })
    }
  }


  render() {
    // console.log(this.state.displayValue, "render");
    return (
      <div className="parent-div">
        <div className="cal-body">
          <div className="cal-border">
            <div className="display">
              <input id="input" maxLength="11" type="text" value={this.state.displayValue} onChange={(event) => { this.handleInputChange(event, "displayValue") }}  ></input>
              <p id="p">{this.state.massage}</p>
            </div>
      <br />
            <div className="row">
              <button name="1" onClick={() => this.handlebutton("1")}>1</button>
              <button name="2" onClick={() => this.handlebutton("2")}>2</button>
              <button name="3" onClick={() => this.handlebutton("3")}>3</button>
              <button name="+" onClick={() => this.handlebutton("+")}>+</button>
            </div >
            <div className="row ">
              <button name="4" onClick={() => this.handlebutton("4")}>4</button>
              <button name="5" onClick={() => this.handlebutton("5")}>5</button>
              <button name="6" onClick={() => this.handlebutton("6")}>6</button>
              <button name="-" onClick={() => this.handlebutton("-")}>-</button>
            </div>
            <div className="row">
              <button name="7" onClick={() => this.handlebutton("7")}>7</button>
              <button name="8" onClick={() => this.handlebutton("8")}>8</button>
              <button name="9" onClick={() => this.handlebutton("9")}>9</button>
              <button name="*" onClick={() => this.handlebutton("*")}>x</button>
            </div>
            <div className="row">
              <button name="." id="dot" onClick={() => this.handlebutton(".")}>.</button>
              <button name="0" onClick={() => this.handlebutton("0")}>0</button>
              <button name="00" onClick={() => this.handlebutton("00")}>00</button>
              <button name="/" onClick={() => this.handlebutton("/")}>/</button>
            </div>
            <div className="row">
              <button name="=" onClick={() => this.handlebutton("=")}>=</button>
              <button name="c" onClick={() => this.handlebutton("C")}>C</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;