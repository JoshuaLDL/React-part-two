import { useState } from "react"

export default function LogInButton({text}) {
    const[counter, setCounter] = useState(0)
    const[isShowing, setIsShowing] = useState(false)
    

    function handleClick (){
        setIsShowing (!isShowing)
        setCounter(counter + 1)
        console.log(setCounter)
    }
    return(
        <div>
            <button onClick={handleClick}>{isShowing ? "Log out" : "Log in"}</button>
            {isShowing &&
                <></>
            }
        </div>
    )
}