// Ques Link:  https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

/*
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

// Sol:
const SeriesSum = (n) => {
    if (n === 0) {
        return "0.00";
    }
    let res = 1;
    for (let i = 1; i < n; i++) {
        res += 1 / (1 + (i * 3));
    }
    return `${res.toFixed(2)}`;
}

// Test Cases:
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(SeriesSum(1), "1.00")
        Test.assertEquals(SeriesSum(2), "1.25")
        Test.assertEquals(SeriesSum(3), "1.39")
        Test.assertEquals(SeriesSum(4), "1.49")
    });
});