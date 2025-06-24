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
					console.log(
						`Assertion FAIL case 1:\n-expected:\n${expected}\n\n-got:\n${actual}`
					);
					return;
				}

				if ((Array.isArray(actual) && Array.isArray(expected)) ||
						(typeof actual === "string" && typeof expected === "string" )) {
					if (actual.length !== expected.length) {
						console.log(
							`Assertion FAIL case 2:\n-expected:\n${expected}\n\n-got:\n${actual}`
						);
						console.log("not the same length");
						console.log(`actual: ${actual.length}`);
						console.log(`expected: ${expected.length}`);
						return;
					}
					for (let i=0; i < actual.length; i++) {
						if (actual[i] !== expected[i]) {
							console.log(
								`Assertion FAIL case 3:\n-expected:\n${expected[i]}\n\n-got:\n${actual[i]}`
							);
							return;
						}
					}
				} else {
					if ((typeof actual === "object" && actual) &&
							(typeof expected === "object" && expected)) {
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
					}
				}
				console.log("PASS");
			}
};

// run all tests
export let withSubmit = true;
