// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  changeCount = () => {
    this.setState(prevState => {
      const {count} = prevState

      const num = count + Math.ceil(Math.random() * 100)

      let numType

      if (num % 2 === 0) {
        numType = true
      } else {
        numType = false
      }

      return {isEven: numType, count: num}
    })
  }

  render() {
    const {isEven, count} = this.state

    const content = isEven ? 'Even' : 'odd'

    return (
      <div className="bg-container">
        <div className="even-odd-card-con">
          <h1 className="heading">Count {count}</h1>
          <p className="count-status">Count is {content}</p>
          <button
            className="increment-btn"
            type="button"
            onClick={this.changeCount}
          >
            Increment
          </button>
          <p className="count-note">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
