import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons"

const Blogpost = ({ data }) => {
  return (
    <Layout>
      <div className="eyecatch">
        <figure>
          <GatsbyImage image={data.contentfulBlogPost.eyecatch.gatsbyImageData} alt={data.contentfulBlogPost.eyecatch.description} />
        </figure>
      </div>
      <article className="content">
        <div className="container">
          <h1 className="bar">{ data.contentfulBlogPost.title }</h1>
          <aside className="info">
            <time dateTime={ data.contentfulBlogPost.publishDate }>
              <FontAwesomeIcon icon={faClock} />
              { data.contentfulBlogPost.publishDateJP }
            </time>
            <div className="cat">
              <FontAwesomeIcon icon={faFolderOpen} />
              <ul>
                {data.contentfulBlogPost.category.map(category => (
                  <li className={category.categorySlug} key={category.id}>
                    {category.category}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="postbody">
            <p>
              記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
              記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
              記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
            </p>
          </div>
          <ul className="postlink">
            <li className="prev">
              <a href="base-blogpost.html" rel="prev">
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>前の記事</span>
              </a>
            </li>
            <li className="next">
              <a href="base-blogpost.html" rel="next">
                <span>次の記事</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulBlogPost {
      title
      publishDateJP:publishDate(formatString: "YYYY年MM月DD日")
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        gatsbyImageData(layout: FULL_WIDTH)
        description
        file {
          details {
            image {
              width
              height
            }
          }
          url
        }
      }
    }
  }
`

export default Blogpost
