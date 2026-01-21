import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
    test("should render the title properly", () => {
        const title = "millonario"
        render(<CustomHeader title={title}/>);
        expect(screen.getByText(title)).toBeDefined();
    })

    test("should render the description when providers", () => {
        const description = "soy millonario";
        render(<CustomHeader title="holaa" description={description}/>);
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByRole("paragraph")).toBeDefined();
        expect(screen.getByRole("paragraph").innerHTML).toBe(description);
    })

    test("should not render description when not provided", () => {
        const {container} = render(<CustomHeader title="hola"/>);
        const p = container.querySelector("p");
        expect(p?.innerHTML).toBeUndefined();

        const divElement = container.querySelector(".content-center");
        const h1 = divElement?.querySelector("h1");
        expect(h1?.innerHTML).toBe("hola");

        const p2 = divElement?.querySelector("p");
        expect(p2).toBeNull();
    })
})