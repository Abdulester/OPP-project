import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.student = [];
    }
    addStudent(obj) {
        this.student.push(obj);
    }
}
const person = new Person;
const programmStart = async (person) => {
    do {
        console.log("Welcome Guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Ap kis se baat karna pasand kare ge..",
            name: "select",
            choices: ["Khudse : self ", "student"],
        });
        if (ans.select == "khud se : self") {
            console.log("Hello me khudse baat karah hu");
            console.log("meri tabiyat achi nhi hai");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "ap ko kisi student se baat karni hai.",
                name: "student",
            });
            const student = person.student.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`Hello I am ${name}, or me theek hu`);
                console.log(person.student);
            }
            if (student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`Hello I am ${student.name}, or me theek hu..............`);
                console.log(person.student);
            }
        }
    } while (true);
};
programmStart(person);
