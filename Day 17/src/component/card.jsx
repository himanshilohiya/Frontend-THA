import "./style.css";

const Card = ({ name, cal }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h2>consumed  calorie: {cal} </h2>
    </div>
  );
};

export default Card;