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
            "id": 0,
            "audio": [],
        },
        {
            "title": "SecondAlbum",
            "id": 1,
            "audio": [],
        },
        {
            "title": "ThirdAlbum",
            "id": 2,
            "audio": [],
        },
        {
            "title": "FourtAlbum",
            "id": 3,
            "audio": [],

        },
    ]
}

const state2WithAddedSong = {
    albums: [


        {
            "title": "OneAlbum",
            "id": 0,
            "audio": [],
        },
        {
            "title": "SecondAlbum",
            "id": 1,
            "audio": [
                {
                    title: "Neviem byť sám",
                    artist: "Peter Nagy"
                }

            ],
        },
        {
            "title": "ThirdAlbum",
            "id": 2,
            "audio": [],
        },
        {
            "title": "FourtAlbum",
            "id": 3,
            "audio": [],

        },

    ]
}

const AddToAlbumDispatchedAction = {

    value: 1,

    value1: {
        title: "Neviem byť sám",
        artist: "Peter Nagy"
    },
}

const AddToAlbumToNotExistedAlbum = {

    value: 6,

    value1: {
        title: "Neviem byť sám",
        artist: "Peter Nagy"
    },




}


test("isAlbumDuplicate", () => {
    const Result = isAlbumDuplicate(state1, "metallica")
    expect(Result).toEqual(true)// my vlastne skušame alebo očakavame že ten result ma v sebe true hodnotu.

})

test("isAlbumDuplicate", () => {
    const Result = isAlbumDuplicate(state1, "ektor")
    expect(Result).toEqual(false)
})
// Testujeme či sa pesnička pridala do správneho albumu
test("AddSongToAlbum", () => {
    const Result = AddSongToAlbum(state2.albums, AddToAlbumDispatchedAction) // result je hocičo čo vracia ta funkcia
    // je vlaste ten opraveny zoznam albumov
    expect(Result).toEqual(state2WithAddedSong.albums) // tu testujem či naozaj bola pridaná pesnička ktoru sme chceli
})

// nebude pridaná nikde, snažime sa ju pridať do albumu ktory neexistuje.

test("AddSongToAlbum", () => {
    const Result = AddSongToAlbum(state2.albums, AddToAlbumToNotExistedAlbum)
    expect(Result).toEqual(state2.albums)
})

//  v testoch ide o to že čo nam vracia funkcia celkovo 