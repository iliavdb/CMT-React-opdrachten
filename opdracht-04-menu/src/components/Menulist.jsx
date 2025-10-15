import { useState } from 'react' ;
import menu from '../data.js'
import Menu from './Menu.jsx'

const Menulist = () => {
    const [gerechten, setGerechten] = useState(menu)
    return (  
        <section className='menu-container'>
              {gerechten.map((gerecht) => (
                <Menu 
                id={gerecht.id}
                img={gerecht.img}
                title={gerecht.title}
                category={gerecht.category}
                price={gerecht.price}
                desc={gerecht.desc}
                />
            ))}
        </section>
    );
}
 
export default Menulist;