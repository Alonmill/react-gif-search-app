import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import {  renderHook, act } from "@testing-library/react";


describe("useCounter", () => {
    test("should initialize with default value of 5", () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(5)
    });

    test("should initialize with value 20", () => {
        const initialValue = 20
        const {result} = renderHook(() => useCounter(initialValue));

        expect(result.current.counter).toBe(initialValue)
    });

    test("should increment when handleAdd is called", () => {
        const {result} = renderHook(() => useCounter());

        act(() => result.current.handleAdd())
        expect(result.current.counter).toBe(6)
    });

     test("should decrement when handleSubtract is called", () => {
        const {result} = renderHook(() => useCounter());

        act(() => {
            result.current.handleSubtract();
        })

        expect(result.current.counter).toBe(4)
    });

    test("should reset when handleReset is called whitout initialValue", () => {
        const initialValue = 90;
        const {result} = renderHook(() => useCounter(initialValue));

        act(() => {
            result.current.handleAdd();   //91
            result.current.handleAdd();   //92
        })

        expect(result.current.counter).toBe(92);

        act(() => {
            result.current.handleReset();
        })

        expect(result.current.counter).toBe(initialValue)

    })

})