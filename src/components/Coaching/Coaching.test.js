import { render, screen } from "@testing-library/react";
import Coaching from "./Coaching";

test("renders learn react link", () => {
	render(<Coaching />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
