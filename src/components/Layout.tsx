import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Header from './Header'
import './layout.scss'

import Gazelle2018 from '../assets/borsen_gazelle.svg'
import Gazelle2019 from '../assets/borsen-gazelle-19.svg'
import GooglePartner from '../assets/google_partner.svg'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="p-8 flex flex-wrap text-gray-600 font-thin">
        <article className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="my-4 text-3xl text-gray-800 font-semibold">Kontakt os</h3>
          <div className="my-4">
            <p className="font-semibold">Web-Koncept A/S</p>
            <p>CVR. 35531750</p>
            <p>+45 50 80 20 40</p>
            <p>kontakt@web-koncept.dk</p>
          </div>
          <address className="my-4 not-italic">
            <strong className="block">København</strong>
            Sauntesvej 13,<br />
            2820 Gentofte
          </address>
          <address className="my-4 not-italic">
            <strong className="block">Aalborg</strong>
            Bejlerholm 12,<br />
            9400 Nørresundby
          </address>
          <address className="my-4 not-italic">
            <strong className="block">Århus</strong>
            Gunnar Clausens Vej 26 B,<br />
            8260 Viby J
          </address>
        </article>
        <article className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="my-4 text-3xl text-gray-800 font-semibold">Information</h3>
          <nav className="flex flex-col">
            <Link to="/" className="my-1">Betingelser</Link>
            <Link to="/" className="my-1">Databehandleraftalen</Link>
            <Link to="/" className="my-1">Privacy statement</Link>
            <Link to="/" className="my-1">Om Web-Koncept</Link>
            <Link to="/" className="my-1">Søg job</Link>
          </nav>
          <div className="flex">
            <Gazelle2018 className="w-40 h-40" />
            <Gazelle2019 className="w-40 h-40" />
          </div>
          <GooglePartner className="w-64" />
        </article>
        <article className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="my-4 text-3xl text-gray-800 font-semibold">Skriv til os</h3>
          <form>
            <input type="text" placeholder="Navn" className="my-2 p-4 w-full h-16 border-2" />
            <input type="email" placeholder="Email" className="my-2 p-4 w-full h-16 border-2" />
            <textarea placeholder="Din besked" className="my-2 p-4 w-full h-48 border-2 resize-none"></textarea>
            <button type="submit" className="px-4 py-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white">Send besked</button>
          </form>
        </article>
        <article className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="my-4 text-3xl text-gray-800 font-semibold">Brug for hjælp?</h3>
          <nav className="flex flex-col">
            <Link to="/" className="my-1">FAQ</Link>
            <Link to="/" className="my-1">Guides</Link>
            <Link to="/" className="my-1">Mailopsætning</Link>
            <Link to="/" className="my-1">Fjernsupport</Link>
            <Link to="/" className="my-1">Kontakt</Link>
          </nav>
          <form>
            <input type="search" placeholder="Søg" className="my-8 p-4 w-full h-16 border-2" />
          </form>
        </article>
      </footer>
    </>
  )
}

export default Layout
