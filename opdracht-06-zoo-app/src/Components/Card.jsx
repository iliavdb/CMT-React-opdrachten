import { useState } from 'react';
import animalsData from '../animals.js';  // pas dit pad aan als nodig
import Card from './Card';

const AnimalList = () => {
  const [animals, setAnimals] = useState(animalsData);
  const [searchInput, setSearchInput] = useState('');

  const searchHandler = (e) => {
    const newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredAnimals = animalsData.filter((animal) =>
      animal.name.toLowerCase().includes(newSearch.toLowerCase())
    );

    setAnimals(filteredAnimals);
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="Zoek hier een dier"
          name="search"
          onChange={searchHandler}
          value={searchInput}
        />
      </div>

      <section className="container">
        <p>Aantal dieren: {animals.length}</p>

        {animals.map((animal) => (
          <Card 
            key={animal.id}
            animal={animal}
            onShowDetail={() => {}} // vul in afhankelijk van jouw detail-logica
          />
        ))}
      </section>
    </>
  );
};

export default AnimalList;
