import React from 'react';
import { useBookContext } from './assets/Contexts/bookContext';
import BookDetailsCss from './BookDetails.module.css';
import Nav from './Nav';
import Logout from './Logout';
const BookDetails = () => {
    const { selectedBook } = useBookContext();
    return (
        <>
            <Nav>
                <Logout />
            </Nav>
            <div className={BookDetailsCss.container}>
                <div>
                    <img src={selectedBook.image} alt={selectedBook.title} />
                </div>
                <div>
                    <h2>{selectedBook.title}</h2>
                    <h2>{selectedBook.subtitle}</h2>
                    <h2>{selectedBook.authors}</h2>
                    <h2>{selectedBook.id}</h2>
                </div>
            </div>
        </>
    )
}

export default BookDetails