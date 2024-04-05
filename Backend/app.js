const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/kiranastore");
}

main()
  .then(() => {
    console.log("connected to database!");
  })
  .catch((err) => {
    console.log(err);
  });

// Schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const itemSchema = mongoose.Schema({
  img: {
    type: String,
    set: (v) =>
      v === ""
        ? "https://as1.ftcdn.net/v2/jpg/02/57/42/72/1000_F_257427286_Lp7c9XdPnvN46TyFKqUaZpPADJ77ZzUk.jpg"
        : v,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const User = new mongoose.model("User", userSchema);
const Item = new mongoose.model("Item", itemSchema);

// Server
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Home route");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.find({
    $and: [{ username: username }, { password: password }],
  });

  if (username && password && userExists.length > 0) {
    res.send("Logged in successfully");
  } else {
    res.send("User not exists");
  }
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.find({
    $or: [{ username: username }, { email: email }],
  });
  console.log(userExists);

  if (username && email && password && userExists.length == 0) {
    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    await newUser.save();
    res.send("Account created successfully");
  } else if (userExists.length > 0) {
    res.send(`The username ${username} or ${email} already exists`);
  } else {
    res.send("Wrong input");
  }
});

app.post("/store-items", async (req, res) => {
  const allItems = await Item.find();
  res.json(allItems);
});

app.post("/add-item", async (req, res) => {
  const { img, name, price, quantity } = req.body;

  const newItem = new Item({
    img: img,
    name: name,
    price: price,
    quantity: quantity,
  });

  await newItem.save();
  res.json(newItem);
});

app.post("/edit-item", async (req, res) => {
  const { id } = req.body;

  const item = await Item.findById(id);
  res.json(item);
});

app.post("/save-edit", async (req, res) => {
  const { id, img, name, price, quantity } = req.body;

  const item = await Item.findByIdAndUpdate(id, {
    img: img,
    name: name,
    price: price,
    quantity: quantity,
  });
  res.json(item);
});

app.post("/delete-item", async (req, res) => {
  const { id } = req.body;

  const item = await Item.findByIdAndDelete(id);
  res.json(item);
});
