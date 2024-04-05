import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Item from "../Item/Item";
import "./Store.css";

function Store({ itemsData, editItem, deleteItem }) {
  return (
    <div className="store">
      <button>
        <Link className="link" to="/kiranastore/store/add-new-item">
          Add new item{" "}
          <span>
            <AddIcon className="icon" />
          </span>
        </Link>
      </button>
      <div className="items_collection">
        {itemsData.length > 0 ? (
          itemsData.map((item, index) => {
            return <Item key={index} item={item} editItem={editItem} deleteItem={deleteItem} />;
          })
        ) : (
          <h1>No items available in the store</h1>
        )}
      </div>
    </div>
  );
}

export default Store;