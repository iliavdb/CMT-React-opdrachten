const Movie = ({title, desc, img}) => {
    return ( 
        <section className="movie-container">
            <img src={img} alt={title} />
            <h2>{desc}</h2>
            <p>{title}</p> 

        </section>
     );
}
 
export default Movie
