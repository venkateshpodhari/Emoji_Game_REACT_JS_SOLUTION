// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisDetails
  const onCLickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-button" type="button" onClick={onCLickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
