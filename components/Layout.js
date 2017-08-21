import Header from './Header'
import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/bulma-5.1.css" />
    </Head>
    <Header />
    {children}
  </div>
)

export default Layout