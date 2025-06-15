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
						console.log(`Assertion failed:\n-expected: ${expected},\n-got: ${actual}`);
				}
		},
		deepEqual(actual: (string | number)[], expected: (string | number)[]) {
				if (typeof actual !== typeof expected) {
						console.log(`Assertion failed case 1:\n-expected:\n${expected}\n\n-got:\n${actual}`);
						return;
				}

				if (Array.isArray(actual) && Array.isArray(expected)) {
						if (actual.length !== expected.length) {
								console.log(`Assertion failed case 2:\n-expected:\n${expected}\n\n-got:\n${actual}`);
								return;
						}
						for (let i=0; i < actual.length; i++) {
								if (actual[i] !== expected[i]) {
										console.log(`Assertion failed case 3:\n-expected:\n${expected}\n\n-got:\n${actual}`);
										return;
								}
						}
				} else {
						console.log(`Assertion failed case 4:\n-expected:\n${expected}\n\n-got:\n${actual}`);
				}
		}
};

// run all tests
export let withSubmit = true;
