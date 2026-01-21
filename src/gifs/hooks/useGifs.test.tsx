import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { act, renderHook } from "@testing-library/react";
import * as gifsActions from "../actions/get-gifs-by-query.actions";



describe("useGifs", () => {
    test("should return the default values and methods", () => {
        const {result} = renderHook(() => useGifs());
    
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.gifList.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermClicked).toBeDefined();
    });

    test("should return a list of gifs", async() => {
        const { result } = renderHook( () => useGifs());

        await act(async() => {
            await result.current.handleSearch("goku");
        })

        expect(result.current.gifList.length).toBe(10);

    });
    test("should return a list of gifs when handleTermClicked is called", async() => {
        const {result} = renderHook(() => useGifs());

       await act(async() => {
            await result.current.handleTermClicked("bills");
        })

        expect(result.current.gifList.length).toBe(10);
    })

    test("should return a list of gifs from cache", async() => {
        const {result} = renderHook(() => useGifs());

        await act(async() => {
            await result.current.handleTermClicked("bills");
        })
        expect(result.current.gifList.length).toBe(10);

        vi.spyOn(gifsActions, "getGifsByQuery").mockRejectedValue(new Error("this is custom error"));

        await act(async() => {
            await result.current.handleTermClicked("bills");
        })
        expect(result.current.gifList.length).toBe(10);

    })

    test("should return no more tan 8 previous terms ", async() => {
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifsActions, "getGifsByQuery").mockResolvedValue([]);

        await act(async() => {
            await result.current.handleSearch("goku1");
        })
        await act(async() => {
            await result.current.handleSearch("goku2");
        })
        await act(async() => {
            await result.current.handleSearch("goku3");
        })
        await act(async() => {
            await result.current.handleSearch("goku4");
        })
        await act(async() => {
            await result.current.handleSearch("goku5");
        })
        await act(async() => {
            await result.current.handleSearch("goku6");
        })
        await act(async() => {
            await result.current.handleSearch("goku7");
        })
        await act(async() => {
            await result.current.handleSearch("goku8");
        })
        await act(async() => {
            await result.current.handleSearch("goku9");
        })
        await act(async() => {
            await result.current.handleSearch("goku10");
        })
        console.log(result.current.previousTerms);
        expect(result.current.previousTerms.length).toBe(8);
        expect(result.current.previousTerms).toStrictEqual(
            [
                'goku10', 'goku9',
                'goku8',  'goku7',
                'goku6',  'goku5',
                'goku4',  'goku3'
            ]
        )
    })

   
})