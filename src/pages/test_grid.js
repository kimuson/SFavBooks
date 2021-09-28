import React from "react"
import "../styles/test_grid.css"
import booksImg from "../../static/books_img.png"

export default function test_grid() {
  return (
    <div className="grid">
      <div className="col">
        <div className="thumb"></div>
        <div className="col-body">
          <div>
            <img
              src={booksImg}
              className="post-link-image"
              alt="post-cover"
            ></img>
          </div>
          <p className="col-person">ビルゲイツ</p>
          <p className="col-status">Microsoft CEO</p>
        </div>
      </div>
    </div>
  )
}
