// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  display = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const details = destinationsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="container">
        <h1 className="text">Destination Search</h1>
        <input
          type="search"
          className="search icon"
          placeholder="search"
          onChange={this.display}
        />
        <ul className="list-container">
          {details.map(eachUser => (
            <DestinationItem
              userDetails={eachUser}
              key={eachUser.id}
              url={eachUser.imgUrl}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
