import { Link } from "react-router-dom";


export default function SingleBook ({title, image, author, genre, id}) {
    
    return(
        <div className="border-2 p-5">
            <Link to={`/books/${id}`}>
                <img src={image}/>
                <h3>{title}</h3>
                <ul>
                    <li>Author: {author}</li>
                    <li>Genre: {genre}</li>
                </ul>
            </Link>
        </div>


    )
}