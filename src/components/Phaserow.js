import React from 'react'
import Phasebutton from './Phasebutton'

const Phaserow = () => {
    return (
        <div className="phase-row">
            <Phasebutton text='1' />
            <Phasebutton text='2' />
            <Phasebutton text='3' />
            <Phasebutton text='4' />
            <Phasebutton text='5' />
        </div>
    )
}

export default Phaserow
