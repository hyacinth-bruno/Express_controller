import Express, {Request, Response} from "express";
import userRouter from "./routes/user";
import productRouter from "./routes/product";
import orderRouter from "./routes/order";

const app = Express();

app.use(Express.json());

app.use('/users', userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

const port = 5003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

