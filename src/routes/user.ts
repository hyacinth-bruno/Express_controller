import { createUser, deleteUser } from './../controllers/user';
// user.ts
import { Router } from "express";
import { getUsers } from "../controllers/user";



const userRouter = Router();

// // GET => endpoint: http://localhost:5001/users/
userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser)



export default userRouter;
