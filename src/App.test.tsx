import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import App from "./App";

describe("Render App", () => {
	test("should render the App component", async () => {
		render(<App />);
		screen.getByText("Vite + React");
	});
});
