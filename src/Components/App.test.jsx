import { isAlbumDuplicate } from "./App";
import { AddSongToAlbum } from "./App";
import { expect, test } from 'vitest'





const state1 = {
    albums: [


        {
            title: "metallica"
        },




    ]
}


const state2 = {
    albums: [


        {
            "title": "OneAlbum",
            "id": 0
        },
        {
            "title": "SecondAlbum",
            "id": 1
        },
        {
            "title": "ThirdAlbum",
            "id": 2
        },
        {
            "title": "FourtAlbum",
            "id": 3

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

test("AddSongToAlbum", () => {
    const Result = AddSongToAlbum(state2, 0)
    expect(Result).toEqual(true)
})

test("AddSongToAlbum", () => {
    const Result = AddSongToAlbum(state2, 0)
    expect(Result).toEqual("OneAlbuWithNewAudio")
})