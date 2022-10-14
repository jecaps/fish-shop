const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/shop3");

  const fishSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: "This is an unknown fish" },
    price: { type: Number, default: 0 },
    category: { type: String },
  });

  const Fish = mongoose.model("fish", fishSchema);

  const results = await Fish.find({});
  console.log(`${results.length} fish found:`);
  results.forEach((result) =>
    console.log(`
  name: ${result.name}
  id: ${result._id}
  price: ${result.price}
  description: ${result.description}
  category: ${result.category}
  `)
  );

  process.exit();
}
