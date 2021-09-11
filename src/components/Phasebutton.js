import React from 'react'

const Phasebutton = ({ text, id, updatePhase }) => {
    return (
        // <div className='phase-button'
        //     onClick={() => {
        //         updatePhase(() => id)
        //     }}
        // >
        //     {text}
        // </div >
        <label
            htmlFor='phase-radio'
            className='phase-radio-container'
        >
            <input
                className='phase-radio'
                type="radio"
                name='phase-radio'
                value={id}
            />
            <span
                className='phase-button'
                onClick={() => updatePhase(id)}
            >{text}</span>
        </label>
    )
}

export default Phasebutton
