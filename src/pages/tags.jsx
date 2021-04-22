import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"

const Tags = ({ data }) => {
  const tags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout title="Tags">
      <main className="page">
        <section className="tags-page">
          {tags.map(tag => {
            const [text, value] = tag
            return (
              <Link to={`/tags/${text}`} key={text} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags
