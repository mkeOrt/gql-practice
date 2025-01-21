export const typeDefs = `#graphql
  type Product {
    id: String
    name: String
    price: Float
    stock: Int
  }

  input CreateProduct {
    name: String!
    price: Float!
    stock: Int!
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    createProduct(createProduct: CreateProduct): Product
  }
`;
