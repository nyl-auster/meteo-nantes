import Header from './Header'
import Head from 'next/head'
import Navigation from './Navigation'
import Clock from './Clock'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div className="container">
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/bulma-5.1.css" />
    </Head>
    <Header />
    <div className="has-text-centered">
      <Clock />
    </div>
    {children}
  </div>
)

export default Layout