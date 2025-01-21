import { Product } from "../model/product.js";
import { ProductsRepository } from "../model/productsRepository.js";

export class ProductsFetcher {
  constructor(private readonly _productsRepository: ProductsRepository) {}

  public exec(): Promise<Product[]> {
    return this._productsRepository.findAll();
  }
}
