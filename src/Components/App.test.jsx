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
    const Result = isAlbumDuplicate(state1, "metallica")
    expect(Result).toEqual(true)// my vlastne skušame alebo očakavame že ten result ma v sebe true hodnotu.

})

test("isAlbumDuplicate", () => {
    const Result = isAlbumDuplicate(state1, "ektor")
    expect(Result).toEqual(false)
})