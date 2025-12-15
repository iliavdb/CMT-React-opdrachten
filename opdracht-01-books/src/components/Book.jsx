import { useState } from 'react' ;

const Book = ({title, img, author, category}) => {
        const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0)
        function verhoogTeller() {
            setAantalKeerGelezen(aantalKeerGelezen + 1);
        }

        const [liked, setLiked] = useState(false);
        function toggleLike() {
            setLiked(!liked)
        }
        

    return (  
        <section className="book">   
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <h3>{author}</h3>
            <p>{category}</p>
            <div className='favorite-section'>
                <button onClick={toggleLike}>
                    {liked ? '❤️' : '🤍'}
                </button>
            </div>
           
            <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
        </section>
    );
}
 
export default Book;