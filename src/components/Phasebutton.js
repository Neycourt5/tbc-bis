import React from 'react'

const Phasebutton = ({ text, togglePhaseClicked, phaseClicked }) => {
    return (
        <div className={phaseClicked ? "phase-button clicked" : 'phase-button'}
            onClick={togglePhaseClicked}
        >
            {text}
        </div>
    )
}

export default Phasebutton
