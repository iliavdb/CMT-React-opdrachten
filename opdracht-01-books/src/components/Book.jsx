import { useState } from 'react' ;

const Book = ({title, img, author}) => {
        const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0)
        function verhoogTeller() {
            setAantalKeerGelezen(aantalKeerGelezen + 1);
        }

    return (  
        <section className="book">   
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <h3>{author}</h3>
           
            <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
        </section>
    );
}
 
export default Book;