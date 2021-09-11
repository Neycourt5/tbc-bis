import React from 'react'
import druidIcon from './classicons/druid.png'
import hunterIcon from './classicons/hunter.png'
import mageIcon from './classicons/mage.png'
import paladinIcon from './classicons/paladin.png'
import priestIcon from './classicons/priest.png'
import rogueIcon from './classicons/rogue.png'
import shamanIcon from './classicons/shaman.png'
import warlockIcon from './classicons/warlock.png'
import warriorIcon from './classicons/warrior.png'

const Classrow = ({ updateWowClass }) => {
    return (
        <div class="class-row-radios">
            <input type="radio" name="classGroup" value="1" id="c1" />
            <label
                class="class-button"
                htmlFor="c1"
                onClick={() => updateWowClass(() => 'druid')}
            >
                <img src={druidIcon} alt="" />
            </label>
            <input type="radio" name="classGroup" value="2" id="c2" />
            <label
                class="class-button"
                htmlFor="c2"
                onClick={() => updateWowClass(() => 'hunter')}
            >
                <img src={hunterIcon} alt="" />
            </label>
            <input type="radio" name="classGroup" value="3" id="c3" />
            <label
                class="class-button"
                htmlFor="c3"
                onClick={() => updateWowClass(() => 'mage')}
            >
                <img src={mageIcon} alt="" />
            </label>
            <input type="radio" name="classGroup" value="4" id="c4" />
            <label
                class="class-button"
                htmlFor="c4"
                onClick={() => updateWowClass(() => 'paladin')}
            >
                <img src={paladinIcon} alt="" />
            </label>
            <input type="radio" name="classGroup" value="5" id="c5" />
            <label
                class="class-button"
                htmlFor="c5"
                onClick={() => updateWowClass(() => 'priest')}
            >
                <img src={priestIcon} alt="" />
            </label>
            <input type="radio" name="classGroup" value="6" id="c6" />
            <label
                class="class-button"
                htmlFor="c6"
                onClick={() => updateWowClass(() => 'rogue')}
            >
                <img src={rogueIcon} alt="" />
            </label>
            <input type="radio" name="classGroup" value="7" id="c7" />
            <label
                class="class-button"
                htmlFor="c7"
                onClick={() => updateWowClass(() => 'shaman')}
            >
                <img src={shamanIcon} alt="" />
            </label>
            <input type="radio" name="classGroup" value="8" id="c8" />
            <label
                class="class-button"
                htmlFor="c8"
                onClick={() => updateWowClass(() => 'warlock')}
            >
                <img src={warlockIcon} alt="" />
            </label>
            <input type="radio" name="classGroup" value="9" id="c9" />
            <label
                class="class-button"
                htmlFor="c9"
                onClick={() => updateWowClass(() => 'warrior')}
            >
                <img src={warriorIcon} alt="" />
            </label>
        </div>
    )
}

export default Classrow
