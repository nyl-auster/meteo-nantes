import Layout from '../components/Layout'
import Weather from '../components/Weather'
import { getMeteo } from '../MeteoProxyApi'

const Index = ({meteo}) => (
  <Layout>
    <div>
      <Weather meteo={meteo} />
      <p>Hello Next.js</p>
    </div>
  </Layout>
)

Index.getInitialProps = async function() {
  const meteo = await getMeteo()
  console.log(meteo)
  return {
    meteo
  }
}

export default Index