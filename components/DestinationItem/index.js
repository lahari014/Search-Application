// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails
  return (
    <li className="list-item">
      <img src={imgUrl} alt={name} className="destiny" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
