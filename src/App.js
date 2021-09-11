import Classbutton from './components/Classbutton'
import Phaserow from './components/Phaserow'
import { useState } from 'react'


function App() {

  // Store selected phase information in a useState
  const [phase, updatePhase] = useState()
  console.log(`Selected phase: ${phase}`)


  // Store selected class information in a useState
  // const [wowClass, updatewowClass] = useState()
  // console.log(`Selected class: ${wowClass}`)


  return (
    <div className="container">
      {/* Header Info */}
      <header><h1>TBC BIS</h1></header>

      {/* Row of buttons to select phase */}
      <p>CHOOSE YOUR PHASE</p>
      <Phaserow
        updatePhase={updatePhase}
      />

      {/* Row of buttons to select class */}
      <p>CHOOSE YOUR CLASS</p>
      <div className="class-row">
        <Classbutton />
        <Classbutton />
        <Classbutton />
        <Classbutton />
        <Classbutton />
        <Classbutton />
        <Classbutton />
        <Classbutton />
        <Classbutton />
      </div>
    </div>
  );
}

export default App;
