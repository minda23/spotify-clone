import { sortingData1 } from "./sortingData";
import { expect, test } from 'vitest'





const stateResult = {
    sortingAlphabetical: [
        {
            title: "Akon"
        },
        {
            title: "Bones"
        },
        {
            title: "Cecillia"
        },
        {
            title: "Drake"
        },
        {
            title: "Fero"
        },




    ],

    notSorted: [
        {
            title: "Drake"
        },
        {
            title: "Cecillia"
        },
        {
            title: "Akon"
        },
        {
            title: "Fero"
        },
        {
            title: "Bones"
        },
    ]
}

test("sortingData1", () => {
    expect(sortingData1(stateResult.notSorted)).toEqual(stateResult.sortingAlphabetical)
})