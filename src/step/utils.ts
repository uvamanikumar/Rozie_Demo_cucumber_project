// utils.ts
export function random(length: number) {
    const min = 1;
    const max = length;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random number between 1 and ${length} (inclusive): ${randomNumber}`);
    return randomNumber;
}


// map with get set function
const state: Map <string, any> =new Map();
export function getstate(key: string){
    if (!state.has(key)) {
        throw new Error(`Cannot find state ${key}`);
    }
    console.log(`[getState] get state ${key}`);
    return state.get(key);

}

export function setstate(key: string, value: string){
state.set(key,value);
    console.log("key stored")
}


export function clearState() {
    console.log(`[clearState] clear state`);
    state.clear();
}

export function capitalizeFirstLetter(input: string): string {
    if (input.length === 0) {
        return input; // Return unchanged if the string is empty
    }
    // Convert the first letter to uppercase and concatenate the rest of the string
    return input.charAt(0).toUpperCase() + input.slice(1);
}