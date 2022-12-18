import {getPercents} from "../index.js";

describe("test getPercents", () => {
    it("getPecents (50, 100)", ()=>{
        const result = getPercents(50, 100);
        expect(result).toBe(50)
    })
    it("getPecents (string, 100)", ()=>{
        const result = getPercents("abcd", 100);
        expect(result).toBe(NaN);
    })
    it("getPecents (string, string", ()=>{
        const result = getPercents("abcd", "dcba");
        expect(result).toBe(NaN);
    })
    it("getPecents (boolean, boolean", ()=>{
        const result = getPercents(true, false);
        expect(result).toBe(0);
    })
})