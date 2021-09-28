import React from "react"
import Layout from "../components/layout"
import PersonList from "../components/person_list"
import Search from "../components/search"

export default function Home() {
  return (
    <Layout>
      <Search />
      <PersonList />
    </Layout>
  )
}
