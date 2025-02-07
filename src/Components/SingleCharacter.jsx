import { useState } from "react"



export default function SingleCharacter ({name, height, mass, eyeColour, hairColour}) {
    const [isShowing, setIsShowing] = useState (false)
    
    function handleClick () {
        setIsShowing(!isShowing)
    }


    return (
        <div className="border-5">
            <h2>{name}</h2>

            <button onClick={handleClick}>
                {isShowing ? "Hide Stats" : "Show Stats"}
                </button>
            
                {isShowing && 
                    <ul>
                        <li>Height: {height}</li>
                        <li>Mass: {mass}</li>
                        <li>Eye Colour: {eyeColour}</li>
                        <li>Hair Colour: {hairColour}</li>
                    </ul>
                }

        </div>
    )
}


