import Layout from '../components/Layout'
import Weather from '../components/Weather'
import { getMeteo } from '../MeteoProxyApi'

const Index = ({ meteo }) => (
  <Layout>
    <Weather meteo={meteo} />
  </Layout>
)

Index.getInitialProps = async function () {
  const meteo = await getMeteo()
  return { meteo }
}

export default Index