import { Request, Response } from "express";

const orderList = [
{id: 1, name: "order A", price:100},
{id: 2, name: "order B", price:200},
{id: 3, name: "order C", price:300},
];

export const getOrders = async (req: Request, res: Response) => {
try {
res.json(orderList);
} catch (error) {
console.log(error);
}
};

export const createOrder = async (req: Request, res: Response) => {
try {
const neworder = req.body;
orderList.push(neworder);
res.json(orderList);
} catch (error) {
console.log(error);
}
};


export const deleteOrder = async (req: Request, res: Response) => {

    try {
        const OrderId = req.params; 
const result = orderList.filter((Order) => Order.id !== Number(OrderId.id));
res.json(result);
    } catch (error) {
        console.log(error);
        
    }   
    };