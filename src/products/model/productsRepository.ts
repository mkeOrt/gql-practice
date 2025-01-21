import { CreateProduct } from "./createProduct.js";
import { Product } from "./product.js";

export interface ProductsRepository {
  save(product: CreateProduct): Promise<Product>;
  findAll(): Promise<Product[]>;
}
