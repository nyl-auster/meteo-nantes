import Header from './Header'
import Head from 'next/head'
import Navigation from './Navigation'

const Layout = ({ children }) => {
  const iconPath = '/static/images/icon.svg'
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/bulma-5.1.css" />

        {/*PWA*/}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Va-t-il pleuvoir ?" />
        <meta name="apple-mobile-web-app-title" content="Va-t-il pleuvoir ?" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/svg" href={iconPath} />
        <link rel="apple-touch-icon" type="image/svg" href={iconPath} />
        {/*END PWA*/}

      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout