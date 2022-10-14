const argv = require("minimist-lite")(process.argv.slice(2));
console.log(argv);

const mongoose = require("mongoose");

if (argv.c) {
  main().catch((err) => console.log(err));
} else {
  console.log("Nothing was saved. Please provide a category.");
}

async function main() {
  await mongoose.connect("mongodb://localhost:27017/shop3");

  const fishSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: "This is an unknown fish" },
    price: { type: Number, default: 0 },
    category: { type: String },
  });

  const Fish = mongoose.model("fish", fishSchema);

  const fish = Fish({
    name: argv.n,
    description: argv.d,
    price: argv.p,
    category: argv.c,
  });

  await fish.save();

  console.log("Successfully added");

  process.exit();
}
