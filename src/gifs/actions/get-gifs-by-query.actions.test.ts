import { beforeEach, describe, expect, test, vi } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import { getGifsByQuery } from "./get-gifs-by-query.actions";
import { giphyApi } from "../api/giphy.api";
import {giphySearchResponseMock} from "../../../test/mocks/giphy.response.data"

describe("getGifsByQuery", () => {
    let mock = new AxiosMockAdapter(giphyApi);
    
    beforeEach(() => {
       mock.reset()
    })
    // test('should return a list of query', async() => { 
    //     const gifs = await getGifsByQuery("goku");
    //     const [gif1] = gifs

    //     expect(gif1).toEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width:  expect.any(Number),
    //         height:  expect.any(Number),
    //     })
    //  })

    test('should return a list of query', async() => { 
        mock.onGet("/search").reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery("goku");

        expect(gifs.length).toBe(10);

        gifs.forEach(gif => {
            expect( typeof gif.id ).toBe("string");
            expect( typeof gif.title ).toBe("string");
            expect( typeof gif.url ).toBe("string");
            expect( typeof gif.width ).toBe("number");
            expect( typeof gif.height ).toBe("number");
        })
    })

    test('should return an empty list of gifs if query is empty', async() => { 
       mock.onGet("/search").reply(200, {data: []})
        const gifs = await getGifsByQuery('');
        expect(gifs.length).toBe(0);
    })

    test("sould handle error when the API returns an error", async() => {
        const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {
            console.log("holaaaa");
            console.log("millonario")
        })
        mock.onGet("/search").reply(400, { data: {message: "bad request"} });
        const gifs = await getGifsByQuery("saitama");

        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
    })
})