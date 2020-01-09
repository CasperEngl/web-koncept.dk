import { graphql } from 'gatsby';

export const squareImageXs = graphql`
  fragment squareImageXs on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const squareImageSm = graphql`
  fragment squareImageSm on File {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const squareImageMd = graphql`
  fragment squareImageMd on File {
    childImageSharp {
      fluid(maxWidth: 600, maxHeight: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const squareImageLg = graphql`
  fragment squareImageLg on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const squareImageXl = graphql`
  fragment squareImageXl on File {
    childImageSharp {
      fluid(maxWidth: 1200, maxHeight: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const squareImageXxl = graphql`
  fragment squareImageXxl on File {
    childImageSharp {
      fluid(maxWidth: 2000, maxHeight: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
