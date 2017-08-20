import Layout from '../components/Layout'
import Weather from '../components/Weather'
import { getMeteo } from '../MeteoProxyApi'

const Index = (props) => (
  <Layout>
    <div>
      <Weather />
      <p>Hello Next.js</p>
    </div>
  </Layout>
)

Index.getInitialProps = async function() {
  const meteo = await getMeteo()
  console.log(meteo)
  return {
    meteo: 'hello'
  }
}

export default Index