import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import GoogleIcon from '../components/GoogleIcon'

import GooglePartner from '../assets/google_partner.svg'
import CustomersIcon from '../assets/ikon_kunder.svg'
import SearchIcon from '../assets/ikon_google-partner.svg'
import SupportIcon from '../assets/ikon_support.svg'
import SolutionIcon from '../assets/ikon_totallosninger.svg'

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
      aalborg: file(relativePath: { eq: "iStock-622534762-min.jpg" }) {
        ...squareImageXl
      }
      koebenhavn: file(relativePath: { eq: "iStock-904390980-min.jpg" }) {
        ...squareImageXl
      }
      aarhus: file(relativePath: { eq: "iStock-825989910.jpg" }) {
        ...squareImageXl
      }
      aarhus_harbor: file(relativePath: { eq: "iStock-496801328-min.jpg" }) {
        ...squareImageXxl
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="relative bg-gray-200">
        <div className="absolute text-white font-bold opacity-50" style={{
          left: '-7.5rem',
          bottom: '-12.5rem',
          fontSize: '22.5rem',
          whiteSpace: 'nowrap',
        }}>Web-Koncept</div>
        <div className="z-10 relative container">
          <div className="py-8 md:py-16 column md:row">
            <div className="w-full md:w-1/2 col">
              <div className="h-full column justify-end">
                <div className="col">
                  <h4 className="my-4 text-xl text-gray-500">Ny hjemmeside?</h4>
                  <h1 className="text-3xl md:text-5xl md:tracking-wider leading-tight font-bold text-gray-900">Webbureau i <span style={{ color: '#779578' }}>Århus, Aalborg og København</span></h1>
                </div>
              </div>
            </div>
            <div className="col w-full md:w-1/2">
              <h4 className="my-4 text-lg font-semibold text-gray-900">Web-Koncept A/S er et webbureau med fokus på at levere responsive hjemmesider til små og mellemstore virksomheder i hele Danmark</h4>
              <p className="leading-relaxed text-lg text-gray-700">Vores målsætning er at levere en hjemmesideløsning med en brugervenlig overflade, som prismæssigt passer til dine behov. Det er vigtigt for os, at du kun betaler for det, du har brug for. Derfor tilbyder vi flere forskellige services, såsom logodesign, e-mail, søgemaskineoptimering, annoncering m.m., som du selv kan vælge ud fra og sammensætte, som du har lyst.</p>
              <h4 className="my-4 text-lg font-semibold text-gray-900">Ny hjemmeside i WordPress</h4>
              <p className="leading-relaxed text-lg text-gray-700">Vi udarbejder din hjemmeside i WordPress, som er det mest brugte CMS-system i verden, og eftersom det er et OpenSource-system i konstant udvikling, er du altid sikret en hjemmeside, der følger med tiden. Vores dygtige grafikere sørger for at udvikle et professionelt og unikt design, der afspejler din virksomhedsprofil, og som henvender sig til din specifikke målgruppe. Hver enkelt hjemmeside bliver designet og udviklet ud fra dine ønsker og præferencer.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap">
        <BackgroundImage
          Tag="article"
          className="w-full sm:w-1/3"
          fluid={images.aalborg.childImageSharp.fluid}
        >
          <div
            className="p-12 w-full flex flex-col items-center justify-center"
            style={{
              background: 'rgba(85, 122, 86, 0.9)',
            }}
          >
            <span className="font-thin uppercase text-white opacity-50">Web-Koncept</span>
            <span className="text-4xl text-white font-semibold uppercase tracking-widest">Aalborg</span>
            <Link to="/" className="mt-4 px-5 py-2 border-2 border-white text-sm text-white font-light hover:bg-white hover:text-gray-900">Gå til afdeling</Link>
          </div>
        </BackgroundImage>
        <BackgroundImage
          Tag="article"
          className="w-full sm:w-1/3"
          fluid={images.koebenhavn.childImageSharp.fluid}
        >
          <div
            className="p-12 w-full flex flex-col items-center justify-center"
            style={{
              background: 'rgba(85, 122, 86, 0.9)',
            }}
          >
            <span className="font-thin uppercase text-white opacity-50">Web-Koncept</span>
            <span className="text-4xl text-white font-semibold uppercase tracking-widest">København</span>
            <Link to="/" className="mt-4 px-5 py-2 border-2 border-white text-sm text-white font-light hover:bg-white hover:text-gray-900">Gå til afdeling</Link>
          </div>
        </BackgroundImage>
        <BackgroundImage
          Tag="article"
          className="w-full sm:w-1/3"
          fluid={images.aarhus.childImageSharp.fluid}
        >
          <div
            className="p-12 w-full flex flex-col items-center justify-center"
            style={{
              background: 'rgba(85, 122, 86, 0.9)',
            }}
          >
            <span className="font-thin uppercase text-white opacity-50">Web-Koncept</span>
            <span className="text-4xl text-white font-semibold uppercase tracking-widest">Århus</span>
            <Link to="/" className="mt-4 px-5 py-2 border-2 border-white text-sm text-white font-light hover:bg-white hover:text-gray-900">Gå til afdeling</Link>
          </div>
        </BackgroundImage>
      </section>
      <section className="relative p-8">
        <div className="absolute text-gray-200 font-bold opacity-50" style={{
          left: '-7.5rem',
          bottom: '-12.5rem',
          fontSize: '22.5rem',
          whiteSpace: 'nowrap',
        }}>Google Partner</div>
        <div className="z-10 relative container">
          <h3 className="my-4 text-3xl text-gray-900 font-bold">
            <GoogleIcon />
            {' '}
            partner
          </h3>
          <p className="my-4 leading-relaxed text-lg text-gray-700">Hos Web-Koncept er vi stolte af at kunne kalde os for Google Partner. Det betyder, at vores medarbejdere er certificerede Google Ads-specialister og kan producere målrettede kampagner og effektive annoncer for din virksomhed.</p>
          <p className="my-4 leading-relaxed text-lg text-gray-700">Med vores ekspertise og erfaring inden for online annoncering kan du nemt og hurtigt komme i gang med at tiltrække nye kunder gennem Google Ads.</p>
          <GooglePartner className="w-64" />
          <Accordion className="accordion my-4 border-none" allowZeroExpanded>
            <AccordionItem className="accordion__item my-8">
              <AccordionItemHeading className="accordion__heading">
                <AccordionItemButton className="accordion__button bg-white hover:bg-white border border-gray-300">Is free will real or just an illusion?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion__panel border">
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion__item my-8">
              <AccordionItemHeading className="accordion__heading">
                <AccordionItemButton className="accordion__button bg-white hover:bg-white border border-gray-300">What harsh truths do you prefer to ignore?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion__panel border">
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in
                  cupidatat occaecat ut occaecat consequat est minim minim
                  esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <BackgroundImage
        Tag="section"
        className="w-full flex flex-wrap"
        fluid={images.aarhus_harbor.childImageSharp.fluid}
      >
        <article
          className="p-8 w-full sm:w-1/4"
          style={{
            background: 'rgba(74,100,109,0.9)',
          }}
        >
          <CustomersIcon className="my-4 mx-auto w-10 h-10" />
          <h3 className="my-4 font-bold text-white text-center text-2xl">+2700 tilfredse kunder</h3>
          <p className="text-white text-center">Vi har over 2700 tilfredse kunder i hele landet. Vi arbejder benhårdt for at levere de absolut bedste løsninger.</p>
        </article>
        <article
          className="p-8 w-full sm:w-1/4"
          style={{
            background: 'rgba(74,100,109,0.7)',
          }}
        >
          <SearchIcon className="my-4 mx-auto w-10 h-10" />
          <h3 className="my-4 font-bold text-white text-center text-2xl">Google Partner</h3>
          <p className="text-white text-center">Vores SEO-medarbejdere er certificerede i annoncering på Google, og vi er officiel Google Partner.</p>
        </article>
        <article
          className="p-8 w-full sm:w-1/4"
          style={{
            background: 'rgba(74,100,109,0.9)',
          }}
        >
          <SupportIcon className="my-4 mx-auto w-10 h-10" />
          <h3 className="my-4 font-bold text-white text-center text-2xl">Ubegrænset Support</h3>
          <p className="text-white text-center">Du har ubegrænset support, når du får lavet en hjemmeside hos os. Vores medarbejdere sidder klar til at hjælpe dig.</p>
        </article>
        <article
          className="p-8 w-full sm:w-1/4"
          style={{
            background: 'rgba(74,100,109,0.7)',
          }}
        >
          <SolutionIcon className="my-4 mx-auto w-10 h-10" />
          <h3 className="my-4 font-bold text-white text-center text-2xl">Total-løsninger</h3>
          <p className="text-white text-center">Vi kan skabe hele din online profil – fra grafik og opsætning af hjemmeside til branding og markedsføring på Google og Facebook.</p>
        </article>
      </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
