import { useEffect } from "react";
import moleHill from '../molehill.png'

function EmptySlot(props){
    useEffect(()=> {
        let randSeconds = Math.ceil(Math.random() * 6000)
        let timer = setTimeout(()=> {
            props.setDisplayMole(true)
        }, randSeconds)
        return() => clearTimeout(timer)
    })

    return(
        <div>
            <img style={{'width': '30vw'}} 
                src={moleHill}
                alt='mole hill' />
        </div>
    )
}

export default EmptySlot