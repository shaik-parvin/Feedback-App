// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedback: true}

  userResponse = () => {
    this.setState({isFeedback: false})
  }

  homePage = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="emoji-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emoji-card">
          {emojis.map(emoji => (
            <li className="list" key={emoji.id}>
              <button
                type="button"
                onClick={this.userResponse}
                className="button"
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="img" />
                <p>{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedbackPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
        <h1>Thank You</h1>
        <p className="para">
          we will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          {isFeedback ? this.homePage() : this.feedbackPage()}
        </div>
      </div>
    )
  }
}

export default Feedback
