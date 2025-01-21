import { ProductsFetcher } from "../application/productsFetcher.js";
import { ProductsRepository } from "../model/productsRepository.js";

export function getProductsResolvers(productsRepository: ProductsRepository) {
  const resolvers = {
    Query: {
      products: () => new ProductsFetcher(productsRepository).exec(),
    },
    Mutation: {
      createProduct: (_: any, { createProduct }) =>
        productsRepository.save(createProduct),
    },
  };

  return resolvers;
}
