const mongoose = require("mongoose");

// const uri = "mongodb://127.0.0.1/shop";

const uri =
  "mongodb+srv://vbthapa55:qwerty123@cluster0.kziyfmu.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(uri);

// we need to create a schema
const productSchema = new mongoose.Schema({
  name: String,
  company: String,
  price: Number,
  colors: [String],
  image: String,
  category: String,
  isFeatured: Boolean,
});

// we need to now create an model
const Product = new mongoose.model("Product", productSchema);




//? 2nd step while inserting the data
const data1 = {
  name: "Designer Handbag2",
  company: "64c23350e32f4a51b19b923a",
  price: 2466,
  colors: ["#000000", "#cc6600", "#663300"],
  image: "/images/product-handbag.png",
  category: "64c2342de32f4a51b19b9250",
  isFeatured: true,
};

const main = async () => {
  try {
    //? 2: insert documents
    // await Product.insertMany(data1);
    // const data = await Product.find({ price: { $eq: 2466 } });
    // console.log(data);

    //? 3 update query
    // await Product.findOneAndUpdate(
    //   { name: "Designer Handbag2", price: 2466 },
    //   { $set: { price: 2499 } }
    // );

    //? 3 Delete query

    await Product.findOneAndDelete({ name: "Designer Handbag2", price: 2499 });
    const data = await Product.find({
      name: "Designer Handbag2",
      price: 2499,
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

main();

db.Students.insertMany(
  [{
    name: "Binamra",
    age: 20,
  },
  {
    name: "Thapa",
    age: 21,
  }]
);


 {
    "name": "Binamra",
    "age": 20,
  }
  {
    "name": "Thapa",
    "age": 21,
  }