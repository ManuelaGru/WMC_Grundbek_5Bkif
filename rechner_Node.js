const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/":
            if (num2 === 0) return "Division durch 0 nicht erlaubt";
            return num1 / num2;
        default: return "Unbekannter Operator";
    }
}

rl.question("Erste Zahl: ", (a) => {
    rl.question("Operator (+ - * /): ", (op) => {
        rl.question("Zweite Zahl: ", (b) => {
            console.log("Ergebnis: " + calculate(Number(a), Number(b), op));
            rl.close();
        });
    });
});
