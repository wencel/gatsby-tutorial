import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const RecipesTags = ({ recipes = [] }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map(tag => (
          <Link key={tag[0]} to={`/tags/${slugify(tag[0], { lower: true })}`}>
            {tag[0]} ({tag[1]})
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecipesTags
