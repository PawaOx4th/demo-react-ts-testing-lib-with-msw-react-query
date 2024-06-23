import { useQuery } from "@tanstack/react-query";
import client from "../services";

export const fetchPokemonList = async () => {
	try {
		const response = await client.query({
			__name: "GetPokemonList",
			pokemons: {
				count: true,
				status: true,
				results: {
					id: true,
					name: true,
					image: true,
					artwork: true,
				},
			},
		});

		return response;
	} catch (error) {
		console.error(error);
		throw new Error((error as Error).message);
	}
};

const useFetchPokemonList = () => {
	return useQuery({
		queryKey: ["pokemonList"],
		queryFn: () => fetchPokemonList(),
	});
};

function PokemonList() {
	const response = useFetchPokemonList();
	return <div>{JSON.stringify(response)}</div>;
}

export default PokemonList;
