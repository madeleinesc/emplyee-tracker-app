USE employee_db

SELECT departments.id AS DepartmentId, departments.dpt_name AS Department
FROM departments;


SELECT roles.id AS RoleId, roles.title AS Role,  roles.salary AS Salary, departments.dpt_name AS Department
FROM roles
JOIN departments 
ON roles.dpt_id = departments.id;


SELECT employees.id AS EmployeeId, employees.first_name AS FirstName, employees.last_name AS LastName, roles.title AS Role, roles.salary AS Salary, departments.dpt_name AS Department, employees.manager_id AS ManagerId
FROM employees
JOIN roles
ON employees.role_id = roles.id
JOIN departments
ON roles.dpt_id = departments.id
ORDER BY employees.id;





