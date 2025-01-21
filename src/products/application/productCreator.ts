import { CreateProduct } from "../model/createProduct.js";
import { Product } from "../model/product.js";
import { ProductsRepository } from "../model/productsRepository.js";

export class ProductCreator {
  constructor(private readonly _productsRepository: ProductsRepository) {}

  public exec(createProduct: CreateProduct): Promise<Product> {
    return this._productsRepository.save(createProduct);
  }
}
