import { Product } from "./product.js";

export type CreateProduct = Omit<Product, "id">;
