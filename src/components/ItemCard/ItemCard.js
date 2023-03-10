import { Link } from "react-router-dom";

export const ItemCard = ({ item }) => {
  return (
    <div>
      <h2> {item.name} </h2>
      <img src={item.img} alt={item.name} />
      <p> {item.description} </p>
      <p>$ {item.price} </p>
      <Link to={`/detail/${item.id}`} className="btn btn-primary">Ver más</Link>
    </div>
  );
};
