import React from 'react'
import Head from 'next/head'
import Footer from '../components/layout/Footer'

const About = () => {
  return (
    <>
      <Head>
        <title>About Thet Min Htin</title>
        <meta name='descrption' content='This is about me' />
      </Head>
      <h1 className='content'>About Page</h1>
    </>
  )
}

export default About

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}