import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animals from '../animals';


const ProductDetail = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();
  const [animalList, setanimalList] = useState(animals);
  
  // Zoek het juiste product
  const animal = animalList.find(p => p.id === Number(animalId));

  if (!animal) {
    return <div>dier niet gevonden!</div>;
  }

  return (
    <section>
      <button onClick={() => navigate('/')}>
        ← Terug naar home
      </button>
      
      <h1>{animal.name}</h1>
        <img className='jeMoeder' src={animal.imageUrl} alt="" />
       <p>{animal.habitat}</p>
        <p>{animal. diet}</p>
        <p>{animal.description}</p>
      <p>Beschrijving: {animal.description}</p>
    </section>
  );
};

export default ProductDetail;