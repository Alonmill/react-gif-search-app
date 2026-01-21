import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
    test("should render the component", () => {
        render(<MyCounterApp/>);
        screen.debug();

        expect(screen.getByRole("heading", {level: 1}).innerHTML).toContain("Contador 5")
        expect(screen.getByRole("button", { name: "+1"})).toBeDefined();
        expect(screen.getByRole("button", {name: "-1"})).toBeDefined();
        expect(screen.getByRole("button", {name: "Reset"})).toBeDefined()
    })

    test('should increment the counter', () => { 
        render(<MyCounterApp/>);
        const [ buttonAdd ]= screen.getAllByRole("button");
        fireEvent.click(buttonAdd);

        expect(screen.getByRole("heading", {level: 1}).innerHTML).toContain("Contador 6")

     })

     test('should decrement the counter', () => { 
        render(<MyCounterApp/>);
        const buttonSubtract = screen.getByRole("button", {name: "-1"});
        const h1 = screen.getByRole("heading", {level: 1});

        fireEvent.click(buttonSubtract);
        expect(h1.innerHTML).toContain("Contador 4")
      })
})