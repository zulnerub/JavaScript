class Company {


    constructor(){
        this.departments = [];
    }


    addEmployee(username, salary, position, department){
        if (!(username && position && department && salary)){
            throw new Error("Invalid input!");
        }

        if (salary < 0){
            throw new Error("Invalid input!");
        }

        if (!this.departments.includes(department)){
            this.departments.push({
                name: department,
                emps: [],
                averageSalary: function () {
                    return this.emps.reduce((prev, cur) => prev + cur.salary, 0) / this.emps.length;
                }
            });
        }

        this.departments.find(obj => obj.name === department).emps.push({
            username,
            salary,
            position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment(){
        const [ best ] = [...this.departments].
            sort((a, b) => b.averageSalary() - a.averageSalary());


        let result = "";
        result += `Best Department is: ${best.name}\n`;
        result += `Average salary: ${best.averageSalary().toFixed(2)}\n`;
        result += [...best.emps]
            .sort((a, b) => {
            if (a.salary === b.salary){
                return a.username.localeCompare(b.username);
            }
            return b.salary - a.salary;
        })
            .map(e => `${e.username} ${e.salary} ${e.position}`)
            .join("\n");

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());













