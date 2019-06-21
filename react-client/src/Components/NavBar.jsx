import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id='headerButtons'>
          <li className='logo'>
            <Link to="home">NQN</Link>
          </li>
          <li className="insta-logo" >
            <a href="https://www.instagram.com/infernohotnick/">
              <img src="./inst-icon.png" alt="insta icon" />
            </a>
          </li>
        </ul>
      </header>
    )
  }
}

export default NavBar
