import React from "react"
import "../styles/test.css"
import booksImg from "../../static/books_img.png"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360"

export default function Test() {
  return (
    <div class="grid">
      <div class="col">
        <div class="thumb"></div>
        <div class="col-body">
          <div>
            <img
              src={booksImg}
              className="post-link-image"
              alt="post-cover"
            ></img>
          </div>
          <p class="col-person">ビルゲイツ</p>
          <p class="col-status">Microsoft CEO</p>
        </div>
      </div>
    </div>
  )
}
