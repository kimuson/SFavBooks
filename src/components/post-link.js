import React from "react"
import "../styles/post-link.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360";

export default function PostLink() {
    return (
        <div className="post-link">
            <div>
                <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
            </div>
            <div className="post-link-text">
                <p className="post-link-category">ビジネス</p>
                
                <div className="post-link-row">
                    <h2>ビル・ゲイツ</h2>
                    <p className="post-link-status">マイクロソフトCEO</p>
                </div>
                <p className="post-link-body">子供のころからたくさん本を読んで自分でものを考えろと言われて育った。<br/>両親は、本や政治や、その他いろいろなことについて、子供たちを交えて話し合った。</p>       
            </div>
        </div>
    )
}