// Write your code here.
import './index.css'

const Thumbnailitem = props => {
  const {eachItem, onClickImage, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = eachItem

  const classImageStyle = isActive ? 'active' : ''

  const onClickTab = () => {
    onClickImage(id)
  }

  return (
    <li className="thumbnailItem">
      <button type="button" className="button" onClick={onClickTab}>
        <img
          src={thumbnailUrl}
          className={`thumbnailImg ${classImageStyle}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default Thumbnailitem
