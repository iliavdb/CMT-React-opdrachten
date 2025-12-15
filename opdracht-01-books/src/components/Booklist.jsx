import { useState } from 'react';
import booksData from '../data.js'
import Book from './book';
import BookCounter from './BookCounter'


const Booklist = () => {
    const categories = ['Alle', 'Fantasy', 'Avontuur', 'Sciencefiction', 'Thriller', 'Romance']
    const [selectedCategories, setSelectedCategories] = useState('Alle')
    const [books, setbooks] = useState(booksData);
    const [searchInput, setSearchInput] = useState('')

    const filterHandler = (e) => {
        let category = e.target.value;
        setSelectedCategories(category)
        if (category === 'Alle') {
            setbooks(booksData)
        }
        else {
            const filteredBooksCategory = booksData.filter((book) =>
                book.category === category)
            setbooks(filteredBooksCategory)
        }

    }

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
                    onChange={searchHandler} value={searchInput} />
            </div>
            <div className='filter'>
                <label htmlFor="category">Filter op categorie</label>
                <select name="" id="category" value={selectedCategories} onChange={filterHandler} >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <section className='container'>

                <BookCounter aantal={books.length} />
                {books.map((book) => (
                    <Book
                        key={book.title}
                        title={book.title}
                        author={book.author}
                        img={book.img}
                        category={book.category}
                        description={book.description}
                        year={book.year}
                        pages={book.pages}
                    />
                ))}



            </section>
        </>
    )
}

export default Booklist;