import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MyCounterApp } from "./MyCounterApp";

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleReset: handleResetMock,
        handleSubtract: handleSubtractMock
    })
}))

describe("MyCounterApp", () => {
    test('should render the component', () => { 
        render(<MyCounterApp/>);
        screen.debug();

        expect(screen.getByRole("heading", {level: 1}).innerHTML).contain("Contador 20");
        expect(screen.getByRole("button", {name: "+1"})).toBeDefined();
        expect(screen.getByRole("button", {name: "-1"})).toBeDefined();
        expect(screen.getByRole("button", {name: "Reset"})).toBeDefined();
     })

     test("should call handleAdd if button is clicked", () => {
        render(<MyCounterApp/>);
        const buttonAdd = screen.getByRole("button", {name: "+1"});

        fireEvent.click(buttonAdd);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleSubtractMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
     })
})