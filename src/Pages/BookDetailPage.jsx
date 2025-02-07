import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom"

export default function BookDetailPage() {
        const {id} = useParams () 
       
        const [title, setTitle] = useState("")
        const [blurb, setBlurb] = useState("")
        const [author, setAuthor] = useState("")
        const [image, SetImage] = useState("")

        function getBookData() {
            fetch (`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
            .then (res => res.json())
            .then (data => {
                console.log(data.data)
                setTitle(data.data.title)
                setBlurb(data.data.blurb)
                setAuthor(data.data.author)
                SetImage(data.data.image)

            })
        }

        useEffect (getBookData, [])

        return (
            <div>
                <h1>Book ID: {id}</h1>
                <img src={image} />
                <p>{title}</p>
                <p>{author}</p>
                <p>{blurb}</p>
            </div>
    )
}
