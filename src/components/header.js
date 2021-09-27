import React from "react"
import "../styles/header.css"

export default function Header() {
  return (
    <div>
      <header>
        <h1 className="site-title">
          <a href="http://localhost:8000/">S-BOOKSHELF</a>
        </h1>
        <nav className="pc-nav">
          <ul>
            <li>
              <a href="http://localhost:8000/">ABOUT</a>
            </li>
            <li>
              <a href="http://localhost:8000/">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main-visual">
        <h2>A favorite book of successful people</h2>
      </div>
    </div>
  )
}
