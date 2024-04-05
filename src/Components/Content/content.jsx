import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import "./content.css";
import Navbar from "../commonComponents/Navbar/Navbar";
import Login from "../LoginPage/Login";
import Signup from "../SignupPage/Signup";
import Home from "../HomePage/Home";
import Store from "../Store/Store";
import InputPage from "../InputPage/InputPage";
import Footer from "../commonComponents/Footer/Footer";
import { useEffect, useState } from "react";

function Content() {
  const [loginData, setLoginData] = useState({
    loginUsername: "",
    loginPassword: "",
  });
  const [signupData, setSignupData] = useState({
    signupUsername: "",
    signupEmail: "",
    signupPassword: "",
  });
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [itemsData, setItemsData] = useState([]);
  const [itemInfo, setItemInfo] = useState({
    itemImage: "",
    itemName: "",
    itemPrice: "",
    itemQuantity: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [currId, setCurrId] = useState("");
  const [isLogoutBtn, setIsLogoutBtn] = useState(false);

  async function getStoreItems() {
    const response = await axios.post("http://localhost:3000/store-items");
    setItemsData(response.data);
  }

  useEffect(() => {
    getStoreItems();
  }, []);

  function handleAddItemInput(event) {
    setItemInfo((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  async function addItem() {
    const img = itemInfo.itemImage;
    const name = itemInfo.itemName;
    const price = itemInfo.itemPrice;
    const quantity = itemInfo.itemQuantity;

    const response = await axios.post("http://localhost:3000/add-item", {
      img,
      name,
      price,
      quantity,
    });
    getStoreItems();

    setItemInfo({
      itemImage: "",
      itemName: "",
      itemPrice: "",
      itemQuantity: "",
    });
  }

  async function editItem(id) {
    const response = await axios.post("http://localhost:3000/edit-item", {
      id,
    });

    setItemInfo({
      itemImage: response.data.img,
      itemName: response.data.name,
      itemPrice: response.data.price,
      itemQuantity: response.data.quantity,
    });

    setIsEdit(true);
    setCurrId(id);
  }

  async function saveEditedItem() {
    const id = currId;
    const img = itemInfo.itemImage;
    const name = itemInfo.itemName;
    const price = itemInfo.itemPrice;
    const quantity = itemInfo.itemQuantity;

    const response = await axios.post("http://localhost:3000/save-edit", {
      id,
      img,
      name,
      price,
      quantity,
    });
    setIsEdit(false);
    getStoreItems();

    setItemInfo({
      itemImage: "",
      itemName: "",
      itemPrice: "",
      itemQuantity: "",
    });
  }

  async function deleteItem(id) {
    const response = await axios.post("http://localhost:3000/delete-item", {
      id,
    });

    getStoreItems();
  }

  // Function to handle signup data input
  function handleSignupData(event) {
    setSignupData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  // Function to submit signup data
  async function handleSignupSubmit(event) {
    event.preventDefault();

    const username = signupData.signupUsername;
    const email = signupData.signupEmail;
    const password = signupData.signupPassword;

    const response = await axios.post("http://localhost:3000/signup", {
      username,
      email,
      password,
    });
    setMessage(response.data);

    setSignupData({
      signupUsername: "",
      signupEmail: "",
      signupPassword: "",
    });
  }

  // Function to handle Login data input
  function handleLoginData(event) {
    setLoginData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  // Function to submit Login data
  async function handleLoginSubmit(event) {
    event.preventDefault();

    const username = loginData.loginUsername;
    const password = loginData.loginPassword;

    const response = await axios.post("http://localhost:3000/login", {
      username,
      password,
    });

    if (response) {
      setMessage(response.data);

      if (response.data == "Logged in successfully") {
        setIsLoggedin(true);
        setUser(username);
      }
    }

    setLoginData({
      loginUsername: "",
      loginPassword: "",
    });
  };

  return (
    <Router>
      <Navbar
        setIsLoggedin={setIsLoggedin}
        isLoggedin={isLoggedin}
        user={user}
        setIsLogoutBtn={setIsLogoutBtn}
        isLogoutBtn={isLogoutBtn}
      />

      <div className="app_body">
        <Routes>
          <Route
            exact
            path="/kiranastore/login"
            element={
              <Login
                loginData={loginData}
                handleLoginData={handleLoginData}
                handleLoginSubmit={handleLoginSubmit}
                isLoggedin={isLoggedin}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <Login
                loginData={loginData}
                handleLoginData={handleLoginData}
                handleLoginSubmit={handleLoginSubmit}
                isLoggedin={isLoggedin}
              />
            }
          />
          <Route
            exact
            path="/kiranastore/signup"
            element={
              <Signup
                signupData={signupData}
                handleSignupData={handleSignupData}
                handleSignupSubmit={handleSignupSubmit}
              />
            }
          />
          <Route path="/kiranastore" element={<Home />} />
          <Route
            path="/kiranastore/store"
            element={
              <Store
                itemsData={itemsData}
                editItem={editItem}
                deleteItem={deleteItem}
              />
            }
          />
          <Route
            path="/kiranastore/store/add-new-item"
            element={
              <InputPage
                handleAddItemInput={handleAddItemInput}
                addItem={addItem}
                itemInfo={itemInfo}
                isEdit={isEdit}
                saveEditedItem={saveEditedItem}
              />
            }
          />
          <Route
            path="/kiranastore/store/edit"
            element={
              <InputPage
                handleAddItemInput={handleAddItemInput}
                addItem={addItem}
                itemInfo={itemInfo}
                isEdit={isEdit}
                saveEditedItem={saveEditedItem}
              />
            }
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default Content;
