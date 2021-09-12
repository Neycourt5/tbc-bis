import React from 'react'


const Phaserow = ({ updatePhase }) => {

    return (
        // Radio button group to select the phase
        <div class="phase-row radios">
            <input type="radio" name="rGroup" value="1" id="r1" />
            <label
                class="phase-radio"
                htmlFor="r1"
                // updatePhase will update the phase with the value in parentheses
                onClick={() => updatePhase(1)}
            >Phase 1</label>
            <input type="radio" name="rGroup" value="2" id="r2" />
            <label
                class="phase-radio"
                htmlFor="r2"
                onClick={() => updatePhase(2)}
            >Phase 2</label>
            <input type="radio" name="rGroup" value="3" id="r3" />
            <label
                class="phase-radio"
                htmlFor="r3"
                onClick={() => updatePhase(3)}
            >Phase 3</label>
            <input type="radio" name="rGroup" value="4" id="r4" />
            <label
                class="phase-radio"
                htmlFor="r4"
                onClick={() => updatePhase(4)}
            >Phase 4</label>
        </div>
    )
}

export default Phaserow
