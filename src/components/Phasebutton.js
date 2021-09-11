import React from 'react'

const Phasebutton = ({ text, id, updatePhase }) => {
    return (
        <div className='phase-button'
            onClick={() => updatePhase(() => id)}
        >
            {text}
        </div>
    )
}

export default Phasebutton
