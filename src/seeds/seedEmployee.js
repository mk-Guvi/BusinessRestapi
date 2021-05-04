require("../config/db.js");
const Employee = require("../models/Employee.js");
const Business = require("../models/Business.js");

const seedEmployee = () => {
  const company = ["meta"];
  company.forEach((name) => {
    new Business({
      company_name: name
    })
      .save()
      .then((result) => {
        const { _id } = result;
        new Employee({
          company_name: _id,
          employee_name: "Mohammed",
          employee_role: "React-Developer"
        })
          .save()
          .then(console.log)
          .catch(console.error);
      })
      .catch(console.error);
  });
};
seedEmployee();
