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
    strictEqual<T>(
        actual: T,
        expected: T,
        msg?: string
    ) {
        if (actual !== expected) {
            console.log(`Assertion FAIL:\n-expected: ${expected},\n-got: ${actual}`);
            return;
        }
        if (msg) {
            console.log(msg);
        }
        console.log("PASS");
    },
    deepEqual<T>(
        actual: T,
        expected: T) {

            if (typeof actual !== typeof expected) {
                console.log("Assertion FAIL case 1:");
                console.log("unmatched types");
                console.log(`-expected:\n${expected}`);
                console.log(`-got:\n${actual}`);
                console.log(`-expected type:\n${typeof expected}`);
                console.log(`-got:\n${typeof actual}`);
                return;
            }

            if (((Array.isArray(actual) && Array.isArray(expected)) ||
                (typeof actual === "string" && typeof expected === "string" )) &&
                typeof actual !== "object") {
            // array of values or strings
                if (actual.length !== expected.length) {
                    console.log("Assertion FAIL case 2:");
                    console.log("not the same length");
                    console.log(`-expected:\n${expected}\n\n-got:\n${actual}`);
                    console.log(`expected: ${expected.length}`);
                    console.log(`got: ${actual.length}`);
                    return;
                }
                for (let i=0; i < actual.length; i++) {
                    if (actual[i] !== expected[i]) {
                        console.log("Assertion FAIL case 3:");
                        console.log("unmatched array elements");
                        console.log(`-expected:\n${expected[i]}`);
                        console.log(`-got:\n${actual[i]}`);
                        console.log(`-Type expected:\n${typeof expected}`);
                        console.log(`-Type got:\n${typeof actual}`);
                        return;
                    }
                }

            } else if (actual instanceof Map && expected instanceof Map) {
            // maps
                let actualK = Reflect.ownKeys(actual);
                let expectedK = Reflect.ownKeys(actual);

                if (actualK.length !== expectedK.length) {

                    console.log("Assertion FAIL case 4:");
                    console.log("- not the same amount of keys");
                    console.log(`- expected: ${expectedK.length}`);
                    console.log(`- got: ${actualK.length}`);
                    return;
                }

                for (const k of actualK) {
                    if (!expectedK.includes(k)) {
                        console.log("Assertion FAIL case 4:");
                        console.log("- Unexpected Key");
                        console.log(`- key: ${k.toString()}`);
                        return;
                    }
                    const actualV = (actual as any)[k];
                    const expectedV = (expected as any)[k];

                    if (actualV !== expectedV) {
                        console.log("Assertion FAIL case 4:");
                        console.log("- Different Values");
                        console.log(`- at key: ${k.toString()}`);
                        console.log(`- expected: ${expectedV}`);
                        console.log(`- got: ${actualV}`);
                        return;
                    }
                }
            } else {
            // objects and array of objects
                if (!deepEqualObj(actual, expected)) {
                    console.log("Assertion FAIL case 5:");
                    console.log("- DeepEqual of objects failed");
                    return;
                }
            }
            console.log("PASS");
        }
};

// run all tests
export const withSubmit = true;

function deepEqualObj(a: any, b: any): boolean {
    if (a === b) return true;

    if (typeof a !== "object" || typeof b !== "object" ||
        a === null || b === null) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const k of keysA) {
        if (!keysB.includes(k) || !deepEqualObj(a[k], b[k])) {
            return false;
        }
    }

    return true;
}
