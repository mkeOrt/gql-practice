import { ProductsFetcher } from "../application/productsFetcher.js";
import { ProductsRepository } from "../model/productsRepository.js";

export function getProductsResolvers(productsRepository: ProductsRepository) {
  const resolvers = {
    Query: {
      products: async () => new ProductsFetcher(productsRepository).exec(),
    },
    Mutation: {
      createProduct: async (_, { createProduct }) =>
        productsRepository.save(createProduct),
    },
  };

  return resolvers;
}
