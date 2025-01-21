import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../model/schema.js";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getResolvers } from "../presentation/resolvers.js";

export class Server {
  private _server;

  constructor() {
    

    this._server = new ApolloServer({
      typeDefs,
      resolvers: getResolvers(),
    });
  }

  public async start(port: number = 4000): Promise<void> {
    const { url } = await startStandaloneServer(this._server, {
      listen: { port },
    });

    console.log(`🚀  Server ready at: ${url}`);
  }
}
