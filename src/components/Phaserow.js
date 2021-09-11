import React from 'react'
import Phasebutton from './Phasebutton'
import { useState } from 'react'


const Phaserow = ({ updatePhase }) => {

    // const phases = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5']
    // const phaseButtons = []
    // const [style, updateStyle] = useState('phase-button')

    // phases.forEach((item, index) => {
    //     phaseButtons.push(<div
    //         key={index}
    //         id={index + 1}
    //         className={style}
    //         onClick={(e) => {
    //             updatePhase(() => index + 1)
    //             addClickStyle(e)
    //         }}
    //     >
    //         {item}
    //     </div >)
    // })

    // const addClickStyle = (button, index) => {
    //     button.target.classList.add('clicked')
    // }

    return (
        <div className="phase-row">
            <Phasebutton
                text='1'
                id={1}
                updatePhase={updatePhase}
            />
            <Phasebutton
                text='2'
                id={2}
                updatePhase={updatePhase}
            />
            <Phasebutton
                text='3'
                id={3}
                updatePhase={updatePhase}
            />
            <Phasebutton
                text='4'
                id={4}
                updatePhase={updatePhase}
            />
            <Phasebutton
                text='5'
                id={5}
                updatePhase={updatePhase}
            />
        </div>
    )
}

export default Phaserow
