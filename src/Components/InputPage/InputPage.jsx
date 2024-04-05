import { Link } from "react-router-dom";

import "./InputPage.css";

function InputPage({ handleAddItemInput, addItem, itemInfo, isEdit, saveEditedItem }) {
  return (
    <div className="input_page">
      <h1>Enter item details</h1>
      <br />
      <br />
      <div>
        <label htmlFor="itemImage">Image URL/Link</label>
        <br />
        <input
          type="text"
          placeholder="Image URL/Link"
          id="itemImage"
          name="itemImage"
          onChange={handleAddItemInput}
          value={itemInfo.itemImage}
        />
      </div>
      <br />
      <div>
        <label htmlFor="itemName">Image Name</label>
        <br />
        <input
          type="text"
          placeholder="Item Name"
          id="itemName"
          name="itemName"
          onChange={handleAddItemInput}
          value={itemInfo.itemName}
        />
      </div>
      <br />
      <div>
        <label htmlFor="itemPrice">Item Price</label>
        <br />
        <input
          type="text"
          placeholder="Item Price"
          id="itemPrice"
          name="itemPrice"
          onChange={handleAddItemInput}
          value={itemInfo.itemPrice}
        />
      </div>
      <br />
      <div>
        <label htmlFor="itemQuantity">Item Quantity</label>
        <br />
        <input
          type="text"
          placeholder="Item Quantity"
          id="itemQuantity"
          name="itemQuantity"
          onChange={handleAddItemInput}
          value={itemInfo.itemQuantity}
        />
      </div>
      <br />
      {isEdit ? (
        <button onClick={saveEditedItem}>
          <Link className="link" to="/kiranastore/store">
            Save item
          </Link>
        </button>
      ) : (
        <button onClick={addItem}>
          <Link className="link" to="/kiranastore/store">
            Add item
          </Link>
        </button>
      )}
    </div>
  );
}

export default InputPage;
