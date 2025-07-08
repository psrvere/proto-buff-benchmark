const fs = require("fs")

// Create an array of 1000 employees and store as JSON
const employees = []

for (let i = 0; i < 1000; i++) {
    employees.push({
        name: `Name ${i}`,
        id: i,
        age: Math.floor(Math.random() * 100),
        salary: Math.floor(Math.random() * 100000),
    })
}

fs.writeFileSync("employees_data.json", JSON.stringify(employees, null, 2))