import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import RecipesList from "../components/RecipesList"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout title="About">
      <main className="page">
        <section className="about-page">
          <article>
            <h2>The header </h2>
            <p>
              I'm baby mustache fashion axe hot chicken, yuccie palo santo tilde
              gastropub schlitz ethical cloud bread microdosing commodo
              post-ironic. Street art small batch offal, readymade. unicorn
              tofu.
            </p>
            <p>
              Flexitarian banh mi deep v, celiac kogi proident mumblecore
              williamsburg. Hot chicken freegan sunt pickled ennui in
              distillery.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome sauce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
        id
      }
    }
  }
`
export default About
