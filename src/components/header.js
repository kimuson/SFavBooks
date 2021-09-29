import React from "react"
import "../styles/header.css"

export default function Header() {
  return (
    <div>
      <header>
        <h1 className="site-title">
          <a href="http://localhost:8000/">S-BOOKSHELF</a>
        </h1>
      </header>
      <div className="main-visual">
        <h2>Here are some of the favorite books of successful people</h2>
      </div>
    </div>
  )
}
