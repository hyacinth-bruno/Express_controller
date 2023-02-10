
import { Router } from "express";
import { getProducts, createProduct, deleteProduct } from "../controllers/product";

const productRouter = Router();

// // GET => endpoint: http://localhost:5001/products/

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
productRouter.delete("/:id", deleteProduct)

export default productRouter;