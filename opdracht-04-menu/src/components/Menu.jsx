const Menu = ({id, title, category, price, img, desc}) => {
    return ( 
        <section key={id}>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{category}</h4>
            <h3>{price}</h3>
            <p>{desc}</p>
        </section>
     );
}
 
export default Menu;