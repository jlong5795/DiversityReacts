import React from "react"
import { graphql } from "gatsby";
const CreatorTemplate = ({ data }) => {
  console.log('From Creator Template', data)
  return (
    <div id='help'>
        <h1>Creator: {data.creator.name}</h1>
        <p>Bio: {data.creator.bio.bio}</p>
        <p style={{color:'black', backgroundColor: 'red'}}>control text</p>
    </div>
  )
}
export const query = graphql`
  query( $slug: String! ) {
    creator: contentfulCreator(slug: { eq: $slug }) {
       slug
       name
       bio {
         bio
       }
   }
}
`
export default CreatorTemplate