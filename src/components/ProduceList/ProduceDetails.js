import { addToCart } from "../../store/cartReducer";
import { useDispatch } from 'react-redux';

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();

  return (
    <li className="produce-details">
    <span>{produce.name}</span>
    <span>
    <button
    className={"like-button" + (produce.liked ? " selected" : "")}
    >
    <i className={"fas fa-heart"} />
    </button>
    <button
      className={"plus-button" + (cartItem ? " selected" : "")}
      onClick={() => dispatch(addToCart(produce.id))}
    >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;