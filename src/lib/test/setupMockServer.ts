import { graphql as graphqlOriginal } from "msw";
import { setupServer } from "msw/node";

const mockApiEndPoint = "http://localhost:4000";

export const graphqlService = graphqlOriginal.link(
  mockApiEndPoint
) as unknown as typeof graphqlOriginal;
export const server = setupServer();
