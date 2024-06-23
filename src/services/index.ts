import { createClient } from "../generated";

const client = createClient({
  url:
    import.meta.env.MODE === "test"
      ? "http://localhost:4000"
      : "https://graphql-pokeapi.graphcdn.app/",
});

export default client;
