import Classrow from './components/Classrow'
import Phaserow from './components/Phaserow'
import { useState } from 'react'



function App() {
  // Require wow classic items database


  // WoW classic items variables


  // Store selected phase information in a useState
  const [phase, updatePhase] = useState(() => 0)
  console.log(`Selected phase: ${phase}`)

  // Store selected class information in a useState
  const [wowClass, updateWowClass] = useState()
  console.log(`Selected class: ${wowClass}`)


  // Test to see if displaying the selected states works corectly
  // const displayLoadout = () => {
  //   if (phase != null && wowClass != null) {
  //     alert(`Loading ${wowClass} and ${phase} bis loadout`)
  //   }
  // }
  // displayLoadout()

  return (
    <div className="container">
      {/* Header Info */}
      <header><h1>TBC BIS</h1></header>

      {/* Row of buttons to select phase */}
      <h3>PHASE</h3>
      <Phaserow
        updatePhase={updatePhase}
      />

      {/* Row of buttons to select class */}
      <h3>CLASS</h3>
      <Classrow
        updateWowClass={updateWowClass}
      />
    </div>
  );
}

export default App;
