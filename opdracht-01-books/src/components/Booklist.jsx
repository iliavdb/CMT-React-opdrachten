import { useState } from 'react' ;
import booksData from '../data.js'
import Book from './book';
import BookCounter from './BookCounter'


const Booklist = () => {
    const [books, setbooks] = useState(booksData);
    const [searchInput, setSearchInput] = useState('')

    const searchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch)
  

   
    
    const filteredBooks = booksData.filter((book) => 
        
        book.title.toLowerCase().includes(newSearch.toLowerCase())
    )


    setbooks(filteredBooks)
    };

    return ( 
        <>
        <div className='input'> 
            <input type="text" placeholder='Zoek Hier Uw Boek' name='search' 
            onChange={searchHandler} value={searchInput}/>
        </div>
        <section className='container'>
            
            <BookCounter aantal={books.length}/>
            {books.map((book) => (
                <Book
                title={book.title}
                author={book.author}
                img={book.img}
                />
            ))}
        
  
    
        </section>
        </>
     )
}
 
export default Booklist;