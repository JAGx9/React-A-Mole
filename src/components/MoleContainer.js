import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} setDisplayMole={setTheMole} handleClick={handleClick} /> : <EmptySlot setDisplayMole={setTheMole} />

    return (
        <div>
            {displayMole}
        </div>
    )
}

export default MoleContainer
