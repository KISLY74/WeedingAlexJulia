import { useState } from 'react'
import Header from './components/Header/Header'
import Schedule from './components/Schedule/Schedule'
import Venue from './components/Venue/Venue'
import Wishes from './components/Wishes/Wishes'
import DressCode from './components/DressCode/DressCode'
import GuestForm from './components/GuestForm/GuestForm'
import Footer from './components/Footer/Footer'
import EnvelopeIntro from './components/EnvelopeIntro/EnvelopeIntro'

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <EnvelopeIntro onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          <Header />
          <Venue />
          <Schedule />
          <Wishes />
          <DressCode />
          <GuestForm />
          <Footer />
        </>
      )}
    </>
  )
}

export default App