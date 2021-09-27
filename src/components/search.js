import React from "react"
import "../styles/search.css"

export default function Search() {
  return (
    <div className="outer">
      <form method="get" action="#" className="search_container">
        <input type="text" size="25" placeholder="キーワード検索" />
        <input type="submit" value="検索"></input>
      </form>
    </div>
  )
}
