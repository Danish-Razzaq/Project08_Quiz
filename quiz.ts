import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";


let tital: string = chalk.yellow(figlet.textSync(`  Q U I Z S`))
console.log(tital);

console.log(chalk.bgBlack("- MCQ's type Question can only select one option. "));


const quiz: string[] = [];
const wrongAns: string[] = [];

const quizs = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        choices: ["Imran Khan", "Nawaz Sharif", "Bilalwal Bhoto", "Liyaqat Ali Khan"],
        message: chalk.magenta("Who is the first Prime Minester of PAKISTAN :"),
    },
    {
        name: "q2",
        type: "list",
        choices: ["Mia Ahmad", "Arif Alivi", "Zia Ullah Khan", " Ali RAza"],
        message: chalk.magenta("Who is the CEO-Panacloud "),
    },
    {
        name: "q3",
        type: "list",
        choices: ["Miryam Nawaz", "Dr. Arif Alvi", "Bilalwal Bhoto", "MR.Rizwan"],
        message: chalk.magenta("who is the launched the of piaic :"),
    },
    {
        name: "q4",
        type: "list",
        choices: ["Elon Musk", "Ada Lovelace", "Bill Gates", "Guido van Rossum"],
        message: chalk.magenta("who is the first programmer of computer :"),
    },
    {
        name: "q5",
        type: "list",
        choices: [" Thomas Jefferson", "Allma Iqbal", "Quid Azam", "Liyaqat Ali Khan"],
        message: chalk.magenta("Who is our founder of Pakistan :"),
    }
])

const { q1, q2, q3, q4, q5 } = quizs

if (q1 === "Liyaqat Ali Khan") {
    quiz.push(q1)
} else {
    wrongAns.push(`Who is our founder of Pakistan?\n  `, chalk.magenta(`  Liyaqat Ali `))
}
if (q2 === "Zia Ullah Khan") {
    quiz.push(q2)
}
else {
    wrongAns.push(`Who is the CEO-Panacloud?\n`, chalk.magenta(`  Zia Ullah Khan`))
}
if (q3 === 'Dr. Arif Alvi') {
    quiz.push(q3)
}
else {
    wrongAns.push(`who is the launched the of piaic?\n`, chalk.magenta(`  Dr. Arif Alvi`))
}

if (q4 === "Ada Lovelace") {
    quiz.push(q4)
}
else {
    wrongAns.push(`who is the first programmer of computer?\n`, chalk.magenta(`  Ada Lovelace`))
}

if (q5 === 'Quid Azam') {
    quiz.push(q5)
}
else {
    wrongAns.push(`Who is our founder of Pakistan?\n`, chalk.magenta(`  Quid Azam`))
}

if (quiz.length <= 2) {
    console.log(chalk.blue(`\t Ooopppp!!!!!!! Score not good`), chalk.red(`\n \t  You Got  only  ${quiz.length} Marks`));
} else {
    console.log(chalk.yellow(chalk.bold(` \t Congratulation`)), chalk.red(`\n \tYou Got  ${quiz.length} Marks`));
}

const chackAnswer = await inquirer.prompt([
    {
        name: "chack",
        type: "input",
        message: chalk.green("DO you want To chak the Right Answer ( y / n) "),
        default: "y",
    }])

if (chackAnswer.chack === "Y" || chackAnswer.chack === "y" || chackAnswer.chack === "yes" || chackAnswer.chack === "Yes") {

    console.log(wrongAns.join('\n'));

} else { }