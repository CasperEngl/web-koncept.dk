import React from 'react'

import Header from './Header'
import Footer from './Footer'

import './layout.scss'

type Props = {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: Props) =>
// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)

  (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )


export default Layout
