import { isAlbumDuplicate } from "./App";
import { AddSongToAlbum } from "./App";
import { AddSongToSelectedAlbum } from "./App";
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
    expect(Result).toEqual(true)

})

test("isAlbumDuplicate", () => {
    const Result = isAlbumDuplicate(state1, "ektor")
    expect(Result).toEqual(false)
})
// Testujeme či sa pesnička pridala do správneho albumu
test("AddSongToAlbum", () => {
    const Result = AddSongToAlbum(state2.albums, AddToAlbumDispatchedAction)
    expect(Result).toEqual(state2WithAddedSong.albums)
})



test("AddSongToAlbum", () => {
    const Result = AddSongToAlbum(state2.albums, AddToAlbumToNotExistedAlbum)
    expect(Result).toEqual(state2.albums)
})



const state3 = {
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
                },


            ]
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

const state4 = {
    albums: [


        {
            "title": "OneAlbum",
            "id": 0,
            "audio": [
                {
                    title: "Neviem byť sám",
                    artist: "Peter Nagy"
                },
            ],
        },
        {
            "title": "SecondAlbum",
            "id": 1,
            "audio": [

                {
                    title: "Neviem byť sám",
                    artist: "Peter Nagy"
                },


            ]

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

const AddToSelectedAlbumDispatchedAction = {

    value1: {
        title: "Neviem byť sám",
    },
}

test("AddSongToSelectedAlbum", () => {
    const Result = AddSongToSelectedAlbum(state3.albums[1].audio, AddToSelectedAlbumDispatchedAction)
    expect(Result).toEqual(state4.albums[0].audio)
})

test("AddSongToSelectedAlbum", () => {
    const Result = AddSongToSelectedAlbum(state3.albums.audio, AddToSelectedAlbumDispatchedAction)
    expect(Result).toEqual(state4.albums[4].audio);
})
