import Classrow from './components/Classrow'
import Phaserow from './components/Phaserow'
import { useState } from 'react'


function App() {
  // Require wow classic items database
  const Database = require('wow-classic-items')

  // WoW classic items variables
  // const items = new Database.Items(options)
  // const professions = new Database.Professions(options)
  // const zones = new Database.Zones(options)
  // const classes = new Database.Classes(options)

  // Store selected phase information in a useState
  const [phase, updatePhase] = useState(() => 0)
  console.log(`Selected phase: ${phase}`)

  // Store selected class information in a useState
  const [wowClass, updateWowClass] = useState()
  console.log(`Selected class: ${wowClass}`)


  return (
    <div className="container">
      {/* Header Info */}
      <header><h1>TBC BIS</h1></header>

      {/* Row of buttons to select phase */}
      <p>PHASE</p>
      <Phaserow
        updatePhase={updatePhase}
      />

      {/* Row of buttons to select class */}
      <p>CLASS</p>
      <Classrow
        updateWowClass={updateWowClass}
      />
    </div>
  );
}

export default App;
