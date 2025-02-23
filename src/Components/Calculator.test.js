import { expect, test } from 'vitest'
import { substract } from './Calculator'




test("substract 3 - 2  to equal 1", () => {
    expect(substract(3, 2)).toEqual(1)
})


test("substract -9 -3 to equal -6", () => {
    expect(substract(-9, -3)).toEqual(-6)
})


