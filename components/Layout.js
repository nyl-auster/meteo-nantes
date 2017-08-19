import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <Navigation />
    { children }
  </div>
)

export default Layout