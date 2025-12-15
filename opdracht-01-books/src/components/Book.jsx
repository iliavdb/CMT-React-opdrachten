import { useState } from 'react';

const Book = ({ title, img, author, category, description, year, pages }) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
    const [liked, setLiked] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    function verhoogTeller() {
        setAantalKeerGelezen(aantalKeerGelezen + 1);
    }

    function handleFlip() {
        setIsFlipped(!isFlipped)
    }

    function toggleLike(e) {
        e.stopPropagation()
        setLiked(!liked)
    }


    return (
        <>
            <h2>{title}</h2>

            <article className={`book ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

                <div className='book-inner' >
                    <div className='book-front' >
                        <img src={img} alt={title} />
                        <h3>{author}</h3>
                        <p>{category}</p>
                        <div className='favorite-section'>
                            <button onClick={toggleLike}>
                                {liked ? '❤️' : '   '}
                            </button>
                        </div>
                    </div>

                    <div className="book-back">
                        <h2>Details</h2>
                        <p>{year}</p>
                        <p>{pages}</p>
                        <p>{description}</p>
                    </div>

                </div>
            </article>

            <button onClick={verhoogTeller}>
                Keer gelezen: {aantalKeerGelezen}
            </button>
        </>
    );
}

export default Book;