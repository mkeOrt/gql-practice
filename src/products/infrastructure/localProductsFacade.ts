import { CreateProduct } from "../model/createProduct.js";
import { Product } from "../model/product.js";
import { ProductsRepository } from "../model/productsRepository.js";

export class LocalProductsFacade implements ProductsRepository {
  private readonly _products = new Map<string, Product>();

  public async save(createProduct: CreateProduct): Promise<Product> {
    const product: Product = {
      id: crypto.randomUUID(),
      ...createProduct,
    };

    this._products.set(product.id, product);
    return product;
  }

  public async findAll(): Promise<Product[]> {
    return [...this._products.values()];
  }
}
