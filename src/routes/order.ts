import { Router } from "express";
import { getOrders, createOrder, deleteOrder } from "../controllers/order";

const orderRouter = Router();

// // GET => endpoint: http://localhost:5001/orders/

orderRouter.get("/", getOrders);
orderRouter.post("/", createOrder);
orderRouter.delete("/:id", deleteOrder)
export default orderRouter;