import { useEffect, useState } from "react"
import SingleBook from "../Components/SingleBook"


export default function BookShelf() {
    const [BookShelf, setBookShelf] = useState([])
    const [Search, setSearch] = useState ("")

    function getBooks() {
        let url = "https://book-swap-api.dev.io-academy.uk/api/books"

        if (Search !== "") {
            url += `?search=${Search}`
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookShelf(data.data)
            })
    }

    // [search] This tells useEffect to run our function on mount, and every time search changes
    useEffect(getBooks, [Search])




    // function getBooks () {
    //     fetch('https://book-swap-api.dev.io-academy.uk/api/books')
    //     // Asynchronous because depends on data size, wifi etc.
        
    //     .then (res => res.json())
    //     // Unpacking data and converting to a js object that we can use. Asynchronous - wait to be fetched
        
    //     .then (data => {
    //        setBookShelf(data.data) 
    //     // Asynchronous - wait for it to be unpacked
    //     // (data.data) is pulling .data from the fetch request data on console (make sure you use the right word here or map wont work.)
           
    //     console.log(data.data)
    //         // Display converted array called data.
    //     })
    // }


    useEffect(getBooks, [Search])

    function handleSearchChange (e) {
        // Takes what the user types
        // puts it into state
        setSearch (e.target.value)

    }

    return (
        <div>
            
            <label htmlFor="Search">Search Books: </label>
            <input type="text" id="search" value={Search} onChange={handleSearchChange}/>

            {BookShelf.map(function (book) {
                return <SingleBook
                        key={book.id}
                        title={book.title} 
                        image={book.image}
                        author={book.author}
                        id={book.id}
                        />

            })}
        </div>
    )
}


