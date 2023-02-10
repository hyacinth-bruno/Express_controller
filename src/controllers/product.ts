import { Request, Response } from "express";

const productList = [
{id: 1, name: "Product A", price:100},
{id: 2, name: "Product B", price:200},
{id: 3, name: "Product C", price:300},
];

export const getProducts = async (req: Request, res: Response) => {
try {
res.json(productList);
} catch (error) {
console.log(error);
}
};

export const createProduct = async (req: Request, res: Response) => {
try {
const newProduct = req.body;
productList.push(newProduct);
res.json(productList);
} catch (error) {
console.log(error);
}
};


export const deleteProduct = async (req: Request, res: Response) => {

    try {
        const productId = req.params; 
const result = productList.filter((product) => product.id !== Number(productId.id));
res.json(result);
    } catch (error) {
        console.log(error);
        
    }   
    };


