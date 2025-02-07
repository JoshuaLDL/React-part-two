import BookShelf from "./Pages/BookShelf";
import Characters from "./Components/Characters";
import BookDetailPage from "./Pages/BookDetailPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LogInButton from "./Components/LogInButton";
import SingleCharacter from "./Components/SingleCharacter";


export default function App(){

  return(
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/books">Books</Link>
        <Link to="/characters">Characters</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/books" element={<BookShelf />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/books/:id" element={<BookDetailPage/>} />
        <Route path="/characters/:name" element={<SingleCharacter/>} />
      </Routes>

      <LogInButton text="Log In"/>

      <footer className="footer">
        Copyright 2025
      </footer>
    
  
    </BrowserRouter>
  )
}


