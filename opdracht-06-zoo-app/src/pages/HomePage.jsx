import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Card from '../Components/Card.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setanimalList] = useState(animals);

  const goToDetail = (animalId) => {
    navigate(`/animal/${animalId}`);
  };

  return (
    <section>
      <h1>Welkom bij onze winkel!</h1>
      <h2>Onze Producten</h2>
      
      {animalList.map(animal => (
        <Card
          key={animal.id}
          animal={animal}
          onShowDetail={goToDetail}
        />
      ))}
    </section>
  );
};

export default Home;