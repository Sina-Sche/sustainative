require("dotenv").config();
const express = require("express");
const path = require("path");
const {
  getProducts,
  getProductById,
  getProductsByTitle,
  getProductsByCategory,
  postProductSuggestion,
} = require("./lib/products");

const { connect } = require("./lib/database");
const { getAllProjects } = require("./lib/projects");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3600;

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("/api/products/details/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const product = await getProductById(id);
    response.send(product);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

app.get("/api/products/browse/:title", async (request, response) => {
  const { title } = request.params;
  try {
    const products = await getProductsByTitle(title);
    response.json(products);
  } catch (error) {
    console.error(error);
    response.status(500).send("An internal server error occured");
  }
});

app.get("/api/products/filter/:categoryName", async (request, response) => {
  const { categoryName } = request.params;
  try {
    const products = await getProductsByCategory(categoryName);
    response.json(products);
  } catch (error) {
    console.error(error);
    response.status(500).send("An error occured");
  }
});

app.get("/api/products", async (request, response) => {
  try {
    const allProducts = await getProducts();
    response.json(allProducts);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected server error");
  }
});

app.get("/api/projects", async (request, response) => {
  try {
    const allProjects = await getAllProjects();
    response.json(allProjects);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected server error occured.");
  }
});

app.post("/api/suggestions", async (request, response) => {
  const product = request.body;
  try {
    await postProductSuggestion(product);
    response
      .status(200)
      .json("You successfully added a product suggestion! Thanks!");
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error occured");
  }
});
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/public", "index.html"));
});

async function run() {
  console.log("On your way to the database...");
  await connect(process.env.DB_URI, process.env.DB_NAME);
  console.log("Success! You are now connected to the database");
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

run();
