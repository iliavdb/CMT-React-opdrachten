import { useState } from 'react' ;
import Book from './book';
import BookCounter from './BookCounter'


const Booklist = () => {
    const [books, setbooks] = useState([
        {
            title: 'Harry Potter',
            author: 'J.K Rowling',
            img: './images/book-1.png'
            
        },
        {
            title: 'Fantasia VI',
            author: 'Geronimo Stilton',
            img: './images/book-2.png'
        },
        {
            title: 'The Hunger Games',
            author: 'Suzanne Collins',
            img: './images/book-3.png'
        },
        {
            title: 'the hunger games',
            author: 'suzanne collins',
            img: './images.book-3.png'
        }
    ]);
    return ( 
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
     );
}
 
export default Booklist;