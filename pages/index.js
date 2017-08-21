import Layout from '../components/Layout'
import Weather from '../components/Weather'
import { getMeteo } from '../MeteoProxyApi'
import About from '../components/About'

const Index = ({ meteo }) => (
  <Layout>
    <Weather meteo={meteo} />
    <About />
  </Layout>
)

Index.getInitialProps = async function () {
  const meteo = await getMeteo()
  return { meteo }
}

export default Index