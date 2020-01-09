import React, { useState } from 'react'
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
          <a className="flex items-center text-sm" href="mailto:kontakt@web-koncept.dk">
            <Envelope className="mx-2 w-4 h-4" />
            {' '}
            Send en mail
          </a>
        </div>
        <div className="w-1/2 flex justify-center">
          <a className="flex items-center text-sm" href="tel:50802040">
            <Mobile className="mx-2 w-4 h-4" />
            {' '}
            Ring til os
          </a>
        </div>
      </section>
      <header className="h-16 flex">
        <div className="container flex items-center justify-between">
          <Link to="/">
            <Logo className="w-48" />
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
              <span className="hamburger-inner text-gray-900 dark:text-white" />
            </span>
          </button>
        </div>
      </header>
      <div
        className={classNames({
          'z-40 fixed inset-0 w-screen h-screen bg-gray-700 opacity-50': menuOpen,
          'opacity-0 pointer-events-none': !menuOpen,
        })}
        onClick={() => menuToggle(false)}
      ></div>
      <div className={classNames({
        'z-50 fixed top-0 right-0 bottom-0 w-64 flex flex-col items-center justify-center bg-white': menuOpen,
        'hidden': !menuOpen,
      })}>
        <Link to="/" className="my-4">
          <Logo className="w-48" />
        </Link>
        <nav className="flex flex-col text-right">
          <Link
            to="/"
            className="px-4 py-1 text-2xl font-semibold text-gray-800 hover:text-gray-600"
          >
            Forside
          </Link>
          <Link
            to="/"
            className="px-4 py-1 text-2xl font-semibold text-gray-800 hover:text-gray-600"
          >
            Produkter
          </Link>
          <Link
            to="/"
            className="px-4 py-1 text-2xl font-semibold text-gray-800 hover:text-gray-600"
          >
            Referencer
          </Link>
          <Link
            to="/"
            className="px-4 py-1 text-2xl font-semibold text-gray-800 hover:text-gray-600"
          >
            Om Web-Koncept
          </Link>
          <Link
            to="/"
            className="px-4 py-1 text-2xl font-semibold text-gray-800 hover:text-gray-600"
          >
            Bæredygtigt Samarbejde
          </Link>
          <Link
            to="/"
            className="px-4 py-1 text-2xl font-semibold text-gray-800 hover:text-gray-600"
          >
            Kontakt
          </Link>
          <div className="my-4"></div>
          <a
            href="https://wkt.wetransfer.com/"
            className="px-4 py-1 text-gray-800 hover:text-gray-600"
          >
            Overfør materiale
          </a>
          <a
            href="https://get.teamviewer.com/web-koncept"
            className="px-4 py-1 text-gray-800 hover:text-gray-600"
          >
            Fjernsupport
          </a>
          <a
            href="http://support.gigahost.dk/?cat=7"
            className="px-4 py-1 text-gray-800 hover:text-gray-600"
          >
            Mailopsætning
          </a>
          <a
            href="https://webmail.surftown.com/appsuite/"
            className="px-4 py-1 text-gray-800 hover:text-gray-600"
          >
            Webmail
          </a>
        </nav>
      </div>
    </>
  )
}
