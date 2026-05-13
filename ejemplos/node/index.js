import chalk from "chalk";
import cowsay from "cowsay";

console.log(chalk.green("Hola Mundo"));
console.log(cowsay.say({ text: "Hola Alejo" }));

console.log(chalk.red(cowsay.say({ text: "Lucas prestá atención" })));
