import React, {createContext, useContext, useState, useEffect } from "react";
const bookContext = createContext();
export const BookContextProvider = ({children}) => {    
     const [bookDetails, setBookDetails] = useState([]);
    const [error,setError]=useState('');
    const [selectedBook, setSelectedBook]= useState(null)

        useEffect(() => {
            fetch('https://www.dbooks.org/api/recent')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => setBookDetails(data.books || []))
                .catch((error) => setError(error));
        }, []);

        const selectBook =(book)=>{
            setSelectedBook(book);
        }

        return(
            <bookContext.Provider value={{bookDetails,error, selectBook, selectedBook}}>
                {children}
            </bookContext.Provider>
        )
}
export const useBookContext = () => useContext(bookContext);
