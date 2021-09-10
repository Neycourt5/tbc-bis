import Classbutton from './components/Classbutton'
import Phaserow from './components/Phaserow'
import { useState } from 'react'


function App() {
  const [phaseClicked, updatePhaseClicked] = useState(false)
  const togglePhaseClicked = () => updatePhaseClicked(!phaseClicked)

  return (
    <div className="container">
      <header><h1>TBC BIS</h1></header>
      <p>CHOOSE YOUR PHASE</p>
      <Phaserow />
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
