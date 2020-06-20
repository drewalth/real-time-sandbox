import React from 'react'
import {
  Link
} from "react-router-dom";

function header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default header;