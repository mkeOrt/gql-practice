import { LocalProductsFacade } from "../../products/infrastructure/localProductsFacade.js";
import { getProductsResolvers } from "../../products/presentation/resolvers.js";

export function getResolvers() {
  const productsRepository = new LocalProductsFacade();

  const { Query: queryProducts, Mutation: mutationProducts } =
    getProductsResolvers(productsRepository);

  return {
    Query: {
      ...queryProducts,
    },
    Mutation: {
      ...mutationProducts,
    },
  };
}
