import Link from 'next/link'

const Navigation = () => (
  <div>
    <Link href="/">
      <a>Accueil</a>
    </Link>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
)

export default Navigation