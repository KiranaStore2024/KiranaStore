import { Link } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Item.css";

function Item({ item, editItem, deleteItem }) {
  return (
    <div className="item">
      <img src={item.img} alt="Item image" />
      <div className="item_details">
        <div className="row">
          <div className="item_name">{item.name}</div>
          <div className="row btns">
            <span onClick={() => editItem(item._id)}>
              <Link to="/kiranastore/store/edit">
                <EditIcon />
              </Link>
            </span>
            <span onClick={() => deleteItem(item._id)}>
              <DeleteIcon />
            </span>
          </div>
        </div>
        <div className="item_price">Price: &#8377; {item.price}</div>
        <div className="row">
          <div className="item_quantity">Quantity: {item.quantity}</div>
          <div
            className="available_tag"
            style={item.quantity > 0 ? { color: "green" } : { color: "red" }}
          >
            {item.quantity > 0 ? "Available" : "Unavailable"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
