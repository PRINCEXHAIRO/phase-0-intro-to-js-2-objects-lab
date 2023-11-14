const employee = { 
    Hairo: "227 Wyckoff Ave", 
    Moon: "1178 Bushwick Ave",
    Shalika: "221 Cardinal Lane "
}

function updateEmployeeWithKeyAndValue(object, key, value) { 
        const newEmployee = {... object};
        newEmployee[key] = value;
        return newEmployee;
}
  
const newPerson = updateEmployeeWithKeyAndValue ( employee, "Sam", "552 Candy Lane") 

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) { 
        object[key] = value
       return employee; 
}

  const updateEmployee  = destructivelyUpdateEmployeeWithKeyAndValue ( employee, "Sam", "12 Broadway")

  // We delete keyword to clone the employees and delete property(key) from list 

  function deleteFromEmployeeByKey(obj, key) { 
        
        const newObj = {...obj} 
        
        delete newObj[key]

        return newObj;

   };

  console.log(deleteFromEmployeeByKey(employee, 'Shalika'))


  function destructivelyDeleteFromEmployeeByKey(employee, key) { 

        delete employee[key]

        return employee;

  }



