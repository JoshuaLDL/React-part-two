import { useEffect, useState } from "react"
import SingleCharacter from "./SingleCharacter"


export default function Characters() {
    const [Characters, setCharacters] = useState([])
    function getData() {
        fetch('https://swapi.dev/api/people')
        .then (res => res.json())
        .then (data => {
           setCharacters(data.results)
           console.log(data)
        })
    }

    // [] tells useEffect to run getData on mount
    useEffect(getData, [])

    return (
        <div>
            <h2>Star Wars Characters</h2>
            <div className="grid grid-cols-1 sm:gird-cols-2 md:grid-cols-4 gap-4 px-10 ">
            {/* map loops through each piece of data in an array and gives them value */}
            {Characters.map(function (character) {
                return <SingleCharacter 
                        key={character.name}
                        name={character.name} 
                        height={character.height} 
                        mass={character.mass}
                        eyeColour={character.eye_color}
                        hairColour={character.hair_color}
                        />

            })}
        </div>
            </div>
    )
}