import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Button from "../components/button";

describe("Button Component", () => {
    // increment button
    test("renders button with increment text", () => {
        render(<Button onClick={() => {}}>increment</Button>);

        const buttonElement = screen.getByText("increment");
        expect(buttonElement).toBeInTheDocument();
    });

    // test for checking the onclick on increment button
    test("call onClick when increment button is clicked", () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>increment</Button>);

        const buttonElement = screen.getByText("increment");
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // decrement button 
    test('renders button with decrement text', () => {
        render(<Button onClick={() => {}}>decrement</Button>)

        const decrementButton = screen.getByText('decrement')
        expect(decrementButton).toBeInTheDocument()
    })

    // test for checking the onclick on decrement button
    test('call onClick when decrement button is clicked', () => {
        const handleClick = vi.fn()
        render(<Button onClick={handleClick}>decrement</Button>)

        const decrementButton = screen.getByText('decrement')
        fireEvent.click(decrementButton)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
});
