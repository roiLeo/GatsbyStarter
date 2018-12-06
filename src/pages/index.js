import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

// const IndexPage = () => (
//   <Layout>
//     <h1>Hello world</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage

const IndexPage = () => (
  <div>

    {/*  HEADER start */}
    <nav class="navbar">
      <div class="container">
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>
            <a class="navbar-item">
              Documentation
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-dark">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            Welcome to my space !
          </h1>
        </div>
      </div>
    </section>
    {/*  HEADER start */}



    {/*  MIDDLE start */}
    <div className="my-section section" style={{marginTop: 30, marginBottom: 30}}>
      <div className="columns">

        <div className="column">
          <div className="box has-background-success">
            <h3 className="title has-text-centered is-4 has-text-white">Healthy Snacks</h3>
            <p className="has-text-centered has-text-white">
              Access to the worlds best and healthiest snacks!
            </p>
            <Image />
          </div>
        </div>

        <div className="column">
          <div className="box has-background-success">
            <h3 className="title has-text-centered is-4 has-text-white">Guilty Snacks</h3>
            <p className="has-text-centered has-text-white">
              For those childhood snacks you can't live without.
            </p>
            <Image />
          </div>
        </div>
        <div className="column">
          <div className="box has-background-success">
            <h3 className="title has-text-centered is-4 has-text-white">100% Automated</h3>
            <p className="has-text-centered has-text-white">
              Easy to setup, tweak and have snacks delivered to your door!
            </p>
            <Image />
          </div>
        </div>
      </div>
    </div>
    {/*  MIDDLE end */}

    {/*  CTA start */}

    {/*  CTA end */}

    {/*  FOOTER start */}
    <div className="has-background-primary">
      <div className="my-section">
        <div style={{paddingBottom: 10,paddingTop: 30}} className="has-text-centered has-text-white">
          <p>&copy; 2018 Made with love &#9829;</p>
        </div>
      </div>
    </div>
    {/*  FOOTER end */}
  </div>
)
export default IndexPage
