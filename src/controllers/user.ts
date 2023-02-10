import { Request, Response } from "express";

const userList = [
    {id: 1, name: "Andrea", age:3},
    {id: 2, name: "Helen", age:4},
    {id: 3, name: "Hanna", age:5},
]

export const getUsers = async (req: Request, res: Response) => {

try {
    res.json(userList);
} catch (error) {
    console.log(error);
    
}   
};



export const createUser = async (req: Request, res: Response) => {

    try {
        const newUser = req.body;
        userList.push(newUser);
        res.json(userList);
    } catch (error) {
        console.log(error);
        
    }   
    };


    export const deleteUser = async (req: Request, res: Response) => {

        try {
            const userId = req.params; 
    const result = userList.filter((user) => user.id !== Number(userId.id));
    res.json(result);
        } catch (error) {
            console.log(error);
            
        }   
        };