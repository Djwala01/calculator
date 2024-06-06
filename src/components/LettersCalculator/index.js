import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  Clicked = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
        <div className="content">
          <h1 className="main-heading">Calculate the Letters you enter</h1>

          <label className="paragraph" htmlFor="description">
            Enter the phrase
          </label>
          <p id="description" />
          <label htmlFor="input">Enter the phrase</label>

          <input
            type="text"
            className="search-content"
            id="input"
            onChange={this.Clicked}
          />
          <p className="button">No.of letters:{searchInput.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
