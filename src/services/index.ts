import { createClient } from "../generated";

const client = createClient({
  url: "https://graphql-pokeapi.graphcdn.app/",
});

export default client;
