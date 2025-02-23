import { isAlbumDuplicate } from "./App";
import { expect, test } from 'vitest'





const state1 = {
    albums: [


        {
            title: "metallica"
        },




    ]
}


test("isAlbumDuplicate", () => {
    expect(isAlbumDuplicate(state1, "metallica")).toEqual(true)
})

test("isAlbumDuplicate", () => {
    expect(isAlbumDuplicate(state1, "ektor")).toEqual(false)
})