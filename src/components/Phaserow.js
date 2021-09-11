import React from 'react'
import Phasebutton from './Phasebutton'

const Phaserow = ({ phase, updatePhase }) => {

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
            <Phasebutton text='3'
                text='3'
                id={3}
                updatePhase={updatePhase}
            />
            <Phasebutton text='4'
                text='4'
                id={4}
                updatePhase={updatePhase}
            />
            <Phasebutton text='5'
                text='5'
                id={5}
                updatePhase={updatePhase}
            />
        </div>
    )
}

export default Phaserow
