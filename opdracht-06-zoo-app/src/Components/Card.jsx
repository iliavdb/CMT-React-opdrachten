const Card = ({ animal, onShowDetail }) => {
  return (
    <section>
      <h2>{animal.name}</h2>
      <img src={animal.imageUrl} alt="" />
      <button onClick={() => onShowDetail(animal.id)}>
        Meer info
      </button>
    </section>
  );
};

export default Card;