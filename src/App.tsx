import "./App.css";
import PokemonList from "./components/PokemonList";
import Provider from "./Provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
	return (
		<Provider>
			<div>
				<h1>Vite + React</h1>
				<hr />
				<PokemonList />
			</div>
			<ReactQueryDevtools
				initialIsOpen={false}
				buttonPosition={"bottom-right"}
			/>
		</Provider>
	);
}

export default App;
