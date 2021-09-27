import React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Search from "../components/search"

export default function Home() {
  return (
    <Layout>
      <Search />
      <PostLink />
      <PostLink />
      <PostLink />
    </Layout>
  )
}
