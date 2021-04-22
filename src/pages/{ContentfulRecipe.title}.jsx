import React from "react"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs"
import slugify from "slugify"

const RecipeTemplate = ({ data: { contentfulRecipe: recipe } }) => {
  const {
    title,
    cookTime,
    prepTime,
    servings,
    description: { description },
    content: { ingredients, instructions, tags, tools },
    image,
  } = recipe
  const pathToImage = getImage(image)
  return (
    <Layout title={title}>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <div className="recipe-tags">
                Tags:{" "}
                {tags.map((tag, index) => {
                  const slugTag = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slugTag}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </div>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => (
                <div className="single-instruction" key={index}>
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{instruction}</p>
                </div>
              ))}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient, index) => (
                  <p key={index} className="single-ingredient">
                    {ingredient}
                  </p>
                ))}
              </div>
              <div>
                <h4>ingredients</h4>
                {tools.map((tool, index) => (
                  <p key={index} className="single-tool">
                    {tool}
                  </p>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      description {
        description
      }
      servings
      prepTime
      content {
        ingredients
        instructions
        tags
        tools
      }
    }
  }
`
export default RecipeTemplate
