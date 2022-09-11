import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'

import './index.css'
import { Highlights } from './components/Highlights'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Highlights />
      </main>
      <Footer />
    </>
  )
}

export default App
