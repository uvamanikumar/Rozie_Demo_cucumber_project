// utils.ts
export function random(length: number) {
    const min = 1;
    const max = length;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random number between 1 and ${length} (inclusive): ${randomNumber}`);
    return randomNumber;
}


// map with get set function