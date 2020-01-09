import React, { useState } from "react"
import { Link } from 'gatsby'
import classNames from 'classnames'

import Logo from '../assets/Logo_Web-Koncept-03.svg'
import Envelope from '../assets/envelope-light.svg'
import Mobile from '../assets/mobile-light.svg'

export default () => {
  const [menuOpen, menuToggle] = useState(false)

  return (
    <>
      <section className="h-12 flex bg-gray-200 border-b border-gray-300">
        <div className="w-1/2 flex justify-center border-r border-gray-300">
          <a className="flex items-center text-sm" href="mailto:kontakt@web-koncept.dk"><Envelope className="mx-2 w-4 h-4" /> Send en mail</a>
        </div>
        <div className="w-1/2 flex justify-center">
          <a className="flex items-center text-sm" href="tel:50802040"><Mobile className="mx-2 w-4 h-4" /> Ring til os</a>
        </div>
      </section>
      <header className="h-16 flex">
        <div className="container flex items-center justify-between">
          <Link to="/">
            <Logo className="w-48"></Logo>
          </Link>
          <button
            onClick={() => menuToggle(!menuOpen)}
            className={classNames({
              'hamburger hamburger--slider': true,
              'is-active': menuOpen,
            })}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
          >
            <span className="hamburger-box">
              <span className={classNames({
                'hamburger-inner': true,
                'text-white dark:text-white': menuOpen,
                'text-gray-900 dark:text-white': !menuOpen,
              })}
              />
            </span>
          </button>
        </div>
      </header>
    </>
  )
}
