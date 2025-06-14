// describe what's going to be tested
export function describe(title: string, booba: () => void) {
    console.log(`-> testing ${title}\n`);
    booba();
}

// individual tests
export function it(title: string, test: () => void) {
    console.log(title);
    test();
}

// assert
export let assert = {
    strictEqual(actual: number, expected: number) {
        if (actual !== expected) {
            console.log(`Assertion failed: expected ${expected}, got ${actual}`);
        }
    },
};

// run all tests
export let withSubmit = true;
