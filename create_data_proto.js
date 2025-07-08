const Schema = require("./employees_pb.js");
const fs = require("fs")

const employees = new Schema.Employees();

for (let i = 0; i < 1000; i++) {
    const emp = new Schema.Employee();

    emp.setId(i);
    emp.setName(`Name ${i}`);
    emp.setAge(Math.floor(Math.random() * 100));
    emp.setSalary(Math.floor(Math.random() * 100000));

    employees.addEmployees(emp);
}

fs.writeFileSync("employees_data.bin", employees.serializeBinary())