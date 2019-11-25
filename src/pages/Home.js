import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Service from '../components/Services'

export default function Home() {
  return (
    <>
    <Hero>
      <Banner title="luxurious rooms" subtitle="dekuxe room starting at $299">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
    <Service />
    </>
  )
}


