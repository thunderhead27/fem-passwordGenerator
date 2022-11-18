import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from './../styles/GlobalStyles'
import './slider.css'

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
