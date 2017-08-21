import Link from 'next/link'

const Navigation = () => (
  <div className="navbar">
    <div className="navbar-end">
      <Link href="/">
        <a className="nav-item">Accueil</a>
      </Link>
      <Link href="/about">
        <a className="nav-item">About Page</a>
      </Link>
    </div>
  </div>
)

export default Navigation