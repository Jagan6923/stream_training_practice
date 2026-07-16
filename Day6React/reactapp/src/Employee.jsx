import React from 'react'

const Employee = () => {


    const employees = [
        { name: "John Doe", age: 30, position: "Software Engineer", salary: 80000 },
        { name: "Jane Smith", age: 28, position: "Data Analyst", salary: 65000 },
        {
            name: "Michael Johnson",
            age: 35,
            position: "Project Manager",
            salary: 90000,
        },
        {
            name: "Emily Davis",
            age: 32,
            position: "Marketing Specialist",
            salary: 70000,
        },
        { name: "David Brown", age: 33, position: "HR Manager", salary: 85000 },
        {
            name: "Sarah Wilson",
            age: 29,
            position: "Graphic Designer",
            salary: 60000,
        },
        {
            name: "Robert Martinez",
            age: 31,
            position: "Financial Analyst",
            salary: 75000,
        },
        {
            name: "Jessica Lee",
            age: 34,
            position: "Product Manager",
            salary: 95000,
        },
        {
            name: "Christopher Taylor",
            age: 36,
            position: "Sales Director",
            salary: 100000,
        },
        {
            name: "Amanda Anderson",
            age: 27,
            position: "Customer Support Representative",
            salary: 55000,
        },
    ]
    return (
        <div>
            <h1>Employee List</h1>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Position</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.position}</td>
                            <td>${employee.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Employee
