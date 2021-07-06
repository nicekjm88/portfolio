import React from 'react'
import { NavLink } from 'react-router-dom'

import { slugify } from '../util/url'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories }) => (
  <div className="container">
    <div className="PostCategoriesNav">
      <NavLink className="NavLink" exact to={`/portfolio/`}>
        All
      </NavLink>
      {categories.map((category, index) => (
        <NavLink
          className="NavLink"
          key={category.title + index}
          to={`/portfolio/category/${slugify(category.title)}/`}
        >
          {category.title}
        </NavLink>
      ))}
    </div>
  </div>
)

export default PostCategoriesNav
