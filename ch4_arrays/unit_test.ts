// describe what's going to be tested
export function describe(title: string, func: () => void) {
    console.log(`-> testing ${title}\n`);
    func();
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
            console.log(`Assertion failed:\n-expected: ${expected},\n-got: ${actual}`);
        }
    },
    deepEqual(
        actual: (string | number | boolean)[] | string,
        expected: (string | number | boolean)[] | string) {

        if (typeof actual !== typeof expected) {
            console.log(
                `Assertion failed case 1:\n-expected:\n${expected}\n\n-got:\n${actual}`
            );
            return;
        }

        if ((Array.isArray(actual) && Array.isArray(expected)) || typeof actual === "string") {

            if (actual.length !== expected.length) {
                console.log(
                    `Assertion failed case 2:\n-expected:\n${expected}\n\n-got:\n${actual}`
                );
                console.log("not the same length");
                console.log(`actual: ${actual.length}`);
                console.log(`expected: ${expected.length}`);
                return;
            }
            for (let i=0; i < actual.length; i++) {
                if (actual[i] !== expected[i]) {
                    console.log(
                        `Assertion failed case 3:\n-expected:\n${expected}\n\n-got:\n${actual}`
                    );
                    return;
                }
            }
        } else {
            console.log(
                `Assertion failed case 4:\n-expected:\n${expected}\n\n-got:\n${actual}`
            );
        }
    }
};

// run all tests
export let withSubmit = true;
