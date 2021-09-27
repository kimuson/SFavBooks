import React from "react"
import "../styles/hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                成功者の愛読書<br />
            </h1>
            <div className="hero-author">
                <img src="https://api.adorable.io/avatars/30/image.png" className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                良き書物を読むことは、過去の最も優れた人達と会話をかわすようなものである。
                <br />
                - デカルト -
                </p>
            </div>
        </div>
    )
}