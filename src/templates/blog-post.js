import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <Layout>
      <div style={{maxWidth: 560, margin: 'auto'}}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
