const Book = ({title, img, author}) => {
    return (  
        <section className="book">   
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <h3>{author}</h3>
            
        </section>
    );
}
 
export default Book;